import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import userInfo from '@/components/userInfo/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: userInfo
    }
  ]
})
