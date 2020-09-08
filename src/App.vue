<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App batard"/>
    <p>{{ products }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const axios = require('axios');

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      products: null
    }
  },
  mounted() {
    axios
        .get("https://unick-orn-lumag.go.yj.fr/index.php/wp-json/wc/v3/products?consumer_key=ck_ae09e58398fd465b7d796fa9713b55b3061c9575&consumer_secret=cs_45bc57883d05452f4bb658450a0e7d517ab1af0d")
        .then(response => (this.products = response))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
