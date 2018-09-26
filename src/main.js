// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置全局的axios
import Axios from 'axios'
Vue.prototype.$axios =Axios;
//配置公共的url
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.config.productionTip = false


//配置全局mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)


// 引入自己写的组件
import MyUl from './components/common/MyUl.vue';
import MyLi from './components/common/MyLi.vue';
// 把引入的注册成全局的组件
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
