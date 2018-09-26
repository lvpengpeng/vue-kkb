<template>
<div>
  <mt-header title="固定在顶部"></mt-header>
  <div>{{msg}}</div>
  <router-view/>
  <mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon" src="./assets/logo.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="mumber">
    <img slot="icon" src="./assets/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="./assets/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="shopcart">
    <img slot="icon" src="./assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>
</div>
</template>

<script>
import { Header ,Tabbar, TabItem} from 'mint-ui';
export default {
  data(){
    return {
      msg:"woshiapp",
      selected:""
    }
  },
  watch:{
    // 这里是简单是监视，所以是函数，深度监视是一个对象。
    selected(newV, oldV) {
      this.$router.push(newV)
      // console.log(newV)
    }
  }
}
</script>

<style>
</style>
