<template>
  <div class="about container">
    <h1 class="page-header">ABOUT</h1>
    <p>{{msg}}</p>
    <p>Version: {{version}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Det här är ett verktyg för att administrera användare och roller skrivet med hjälp av Vue.js',
      version: '0.1.0-SNAPSHOT'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
