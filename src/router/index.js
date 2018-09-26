import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Mumber from '@/components/Mumber/Mumber'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
// 注册全局组件Router-view router-link
// 挂载vue.prototype.$router||$route
// 未来所有的组件中的this对象，就具备该属性，
// 所以的this，其实就是vue子类对象
export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Mumber',
      name: 'Mumber',
      component: Mumber
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    }
  ]
})
