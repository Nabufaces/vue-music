import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/findMusic'
    },
    {
    	path: '/myMusic',
    	component: resolve => {require(['@/components/myMusic/myMusic'],resolve)}
    },
    {
      path: '/findFriends'
    },
    {
      path: '/userAccount'
    }
  ]
})
