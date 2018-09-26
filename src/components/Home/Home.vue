<template>
  <div class="hello">
    {{msg}}
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img">
      </mt-swipe-item>
    </mt-swipe>
    <my-ul>
      <my-li v-for="(grid,index) in grids" :key="index">
          <img src="../../assets/logo.png" alt="">
          <span :class="grid.className">{{grid.text}}</span>
      </my-li>
    </my-ul>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data () {
    return {
      msg: 'home',
      imgs:[],
      grids:[
        {className:"red",text:"新闻"},
        {className:"blue",text:"热点"},
        {className:"red",text:"新闻"},
        {className:"blue",text:"热点"},
        {className:"red",text:"新闻"},
        {className:"blue",text:"热点"},
        {className:"red",text:"新闻"},
        {className:"blue",text:"热点"},
        {className:"red",text:"新闻"}
      ]
    }
  },
  // 创建组件的生命周期中可操作数据，发请求
   created(){
      this.$axios.get('getlunbo').then(res=>{
        console.log(res.data.message)
        this.imgs=res.data.message
      })
      .catch(err=>{
          console.log("轮播图获取异常",err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.mint-swipe{
  height: 200px;
  background: red;
}
img{
  width: 100%;
}
li img{
  display: block;
  width: 40px;
  margin:  0 auto;
}
.red{
  color: red;
}
.blue{
  color: blue
}
</style>
