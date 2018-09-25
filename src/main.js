// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import * as WPAPI from 'wpapi'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.css'

import Config from './config'

import vc_row from './pages/visual_composer/vc_row'
Vue.component('vc_row', vc_row)
import vc_column from './pages/visual_composer/vc_column'
Vue.component('vc_column', vc_column)

// -------------------
//  extra
// -------------------
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

Vue.use(Vuetify, {
  // theme: {
  //   primary: '#2C3E4F',
  //   secondary: '#92A2A3',
  //   accent: '#00BC9D'
  // }
  // iconfont: 'fa'
})

// -------------------
//  wordpress
// -------------------
import _ from 'lodash'

Vue.config.productionTip = false
require('./lib/shortcode.js')

const wpapi = new WPAPI({ endpoint: Config.wordpress.api_entry })
Vue.prototype.$wpapi = wpapi

// -------------------
//  router rules
// -------------------
sync(store, router, { moduleName: 'route' })
router.beforeEach((to, from, next) => {
  // if ((!store.state.user.user || !store.state.user.user.name) &&
  //   to.matched.some(record => record.meta.requiresAuth)) {
  //   next('/auth/login')
  //   return
  // }

  var layout
  to.matched.forEach(record => {
    if (record.meta && record.meta.layout) {
      layout = record.meta.layout
    }
  })
  store.commit('ui/SET_LAYOUT', layout)

  next()
})
router.afterEach((to, from) => {})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
