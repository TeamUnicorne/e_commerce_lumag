<template>
  <div id="app">
    <pre>{{ products[0] }}</pre>

	<!--	<CardProducts name="{{products[].name}}" image="" price=""/>-->
		<ul id="products-list">
			<li class="product-card" v-for="(product, index) in products.slice(0, 4)" :key="index">
				<CardProducts v-bind:image="product.images[0].src" v-bind:image_alt="product.image_alt"
											v-bind:name="product.name"
											v-bind:regular_price="product.regular_price"
											v-bind:sale_price="product.sale_price"
				></CardProducts>
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
    axios
        .get("https://unick-orn-lumag.go.yj.fr/index.php/wp-json/wc/v3/products?consumer_key=ck_ae09e58398fd465b7d796fa9713b55b3061c9575&consumer_secret=cs_45bc57883d05452f4bb658450a0e7d517ab1af0d")
        .then(response => (this.products = response.data))
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
