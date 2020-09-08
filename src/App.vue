<template>
  <div id="app">
    <HelloWorld msg="Bienvenue chez Lumag! 😎"/>
    <pre>{{ products[0] }}</pre>
		<ul id="products-list">
			<li class="product-card" v-for="(product, index) in products.slice(0, 4)" :key="index">
				<CardProducts v-bind:image="product.images[0].src" v-bind:image_alt="product.image_alt"
											v-bind:name="product.name"
											v-bind:regular_price="product.regular_price"
											v-bind:sale_price="product.sale_price"/>
			</li>
		</ul>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CardProducts from './components/CardProducts'
const axios = require('axios');

export default {
  name: 'App',
  components: {
    HelloWorld,
		CardProducts
  },
  data() {
    return {
      products: null
    }
  },
  mounted() {
    const fetchProducts = (async () => {
      axios
          .get(`${ApiReader.BASE_URL}${ApiReader.GET_ALL_PRODUCTS}?${ApiReader.CLIENT_KEY}&${ApiReader.SECRET_KEY}`)
          .then(response => (this.products = response.data))
    })()
    fetchProducts().await(() => {

    })
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
