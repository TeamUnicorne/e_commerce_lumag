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
import {ApiReader} from './constants'


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
        .get(`${ApiReader.BASE_URL}${ApiReader.GET_ALL_PRODUCTS}?${ApiReader.CLIENT_KEY}&${ApiReader.SECRET_KEY}`)
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
