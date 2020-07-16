import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path:'/Home',
      name:'Home',
      component: Home
    },
    {  //首次进入页面/需要重定向
      path: '/',            
      redirect: '/Login' 
    }
  ]
})
