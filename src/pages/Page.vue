<template>
<div>
  A Page {{pageid}}
  <component :is="root"></component>
  <!-- <pre v-html="content"></pre> -->
  <div class="entry-content" ref="container"></div>
</div>
</template>
<script>
import Vue from 'vue'

export default {
  data () {
    return {
      dictionary: {},
      pageid: null,
      content: 'hello',
      root: 'div'
    }
  },

  mounted () {
    window.$page = this
    this.pageid = this.$store.state.route.params['id']

    // load page
    this.$wpapi.posts().id(this.pageid).then(res => {
      var content = res.content.rendered

      var callback = (sc) => {
        var content = sc.content || '';
        var data = {}

        for (var n in sc.attrs.named) {
          data[n] = sc.attrs.named[n].trim()
        }

        // console.log(data)
        // data = {}
        var jdata = JSON.stringify(data)
        var hashCode = jdata.hashCode()
        this.dictionary[hashCode] = data;
        return `<${sc.tag} data="${hashCode}">${content}</${sc.tag}>`
      }

      var result = content

      // cleanup
      result = result.replace(/&#8221;/g, "'")
      result = result.replace(/&#8243;/g, "'")
      result = result.replace(/<style/g, '<!--style')
      result = result.replace(/\/style>/g, '/style-->')
      result = result.replace(/<script/g, '<!--script')
      result = result.replace(/\/script>/g, '/script-->')


      var m, tag
      var tags = [ 'vc_row', 'vc_column' ]
      tags.forEach(tag=>{
        while ((m = wp.shortcode.next(tag, result)) != undefined) {
          console.log(tag)
          result = wp.shortcode.replace(tag, result, callback)
        }
        var btns = `<div>
              <v-btn color="success" @click="buttonClick">Success</v-btn>
              <v-btn color="error">Error</v-btn>
              <v-btn color="warning">Warning</v-btn>
              <v-btn color="info">Info</v-btn>
            </div>`
      })

      // fix html errors
      var elm = document.createElement('DIV')
      elm.innerHTML = result
      result = elm.innerHTML

      var c = {
        template: `<div>
          ${result}
          </div>`,

        methods: {
          buttonClick () {
            this.$parent.buttonClick()
          }
        }
      }

      var ComponentClass = Vue.extend(c)
      var instance = new ComponentClass({ parent: this })

      console.log(c)

      instance.$mount() // pass nothing
      this.$refs.container.appendChild(instance.$el)
    })
  },

  methods: {
    buttonClick () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
</style>
