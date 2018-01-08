<template>
  <div class="about container">
    <h1 class="page-header">ABOUT</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
