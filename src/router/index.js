import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Login from '@/pages/Login'
import Page from '@/pages/Page'

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
      path: '/page/:id',
      name: 'Page',
      component: Page,
      meta: {
        layout: 'Baseline'
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
