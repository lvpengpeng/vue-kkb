<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name:"my-li",
  data () {
    return {
      msg: 'shopcart'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul li{
    width: 33.3%;
    float: left;
    background: rebeccapurple;
    list-style: none;
    height: 100px;
    line-height: 40px;
    text-align: center
    }
</style>