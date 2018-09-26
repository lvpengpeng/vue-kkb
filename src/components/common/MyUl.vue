<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name:"my-ul",
  data () {
    return {
      msg: 'shopcart'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>