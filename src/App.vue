<template>
  <div id="app">
    <component :is="layout"/>
  </div>
</template>

<script>
// pre-defined layouts
import Baseline from '@/layout/Baseline'
import Centered from '@/layout/Centered'
import Simple from '@/layout/Simple'
import Google from '@/layout/Google'
import Header from '@/layout/Header'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    layout () {
      if (!this.$store.state || !this.$store.state.ui.layout) {
        return 'Simple'
      }
      return this.$store.state.ui.layout
    }
  },
  components: {
    Baseline,
    Centered,
    Simple,
    Google,
    Header
  },
  mounted () {
    window.$app = this
  }
}
</script>

<style>
.application.theme--light {
  background-color: #fafafa !important;
}
</style>
