// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  // theme: {
  //   primary: '#2C3E4F',
  //   secondary: '#92A2A3',
  //   accent: '#00BC9D'
  // }
  // iconfont: 'fa'
})

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
router.afterEach((to, from) => {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
