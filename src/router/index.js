import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
// import BuefyTable from '@/pages/BuefyTable'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        layout: 'Baseline'
      }
    },
    {
      path: '/page1',
      name: 'Page1',
      component: HelloWorld,
      meta: {
        layout: 'Header'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        layout: 'Centered'
      }
    }
  ]
})
