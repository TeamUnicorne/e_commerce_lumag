<template>
    <div id="app">
    <Header/>
    <section class="slider">
      <img src="./assets/entreprise.jpg" alt="Ceci est une image">
    </section>
    <section class="intro">
      <div class="intro-container">
        <div class="section-title">
          <h1>SOCIÉTÉ</h1>
        </div>

        <div class="section-text-intro">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus metus, ultricies eget iaculis et, mattis et nunc. Nam fermentum augue rutrum neque mollis vulputate. Praesent id urna sagittis, feugiat metus vitae, cursus lorem. In laoreet sem venenatis urna vehicula feugiat. Donec magna nulla, ultricies tincidunt enim suscipit, ornare mattis ex. Aliquam dictum purus ut tempus molestie. Integer bibendum finibus neque, a euismod libero posuere sit amet. In metus ipsum, facilisis et erat at, molestie ornare nisi. Nullam vitae urna id dolor tincidunt condimentum in eget neque. Praesent aliquam sem sit amet eros sollicitudin lacinia. Sed ut ornare mi. Nullam eros dolor, vehicula nec nibh sed, molestie tristique ligula.</p>
        </div>
      </div>
    </section>
      <section class="products">
        <h2>Produits</h2>
        <div class="products-container">
          <ul class="products-cards">
            <li class="product-card" v-for="(product, index) in products.slice(0, 4)" :key="index">
              <CardProducts v-bind:image="product.images[0].src" v-bind:image_alt="product.image_alt"
                            v-bind:name="product.name"
                            v-bind:regular_price="product.regular_price"
                            v-bind:sale_price="product.sale_price"/>
            </li>
          </ul>
        </div>
      </section>

      <!-- End for WooCommerce -->

      <section class="blog">
        <div class="section-title">
          <h2>Dernières actus</h2>
        </div>

        <div class="article-container">
          <div class="blog-image"> <img src=""></div>

          <div class="blog-title">
            <h2>Lorem ipsum dolor </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id diam porta massa vulputate pharetra. Nullam id gravida mi. Donec ultrices risus a nunc rhoncus, in gravida lorem finibus. Vivamus ac sollicitudin ligula, a bibendum mi. Vivamus at nulla auctor, imperdiet leo in, imperdiet lacus. Morbi porta dapibus diam, id accumsan urna.</p>
          </div>


          <!-- Faire une boucle WP pour récupérer les articles -->


        </div>
      </section>
	</div>
</template>

<script>
import CardProducts from './components/CardProducts'
import Header from './components/Header'
import {ApiReader} from './constants'
const axios = require('axios');

export default {
  name: 'App',
  components: {
    Header,
		CardProducts
  },
  data() {
    return {
      products: null
    }
  },
  mounted() {
      axios
          .get(`${ApiReader.BASE_URL}${ApiReader.GET_ALL_PRODUCTS}?${ApiReader.CLIENT_KEY}&${ApiReader.SECRET_KEY}`)
          .then(response => (this.products = response.data))
  }
}
</script>

<style>
html, body{
  padding: 0;
  margin:0;
}

body {
  width: 100%;
  min-height: 100vh;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: .9rem;
  background-color: #F8F8F8;
  color: #151000;
}

ul{
  padding: 0;
}


a{
  list-style: none;
  text-decoration: none;
}

#app {
  color: #2c3e50;
}

/* --------- Slider --------------- */

.slider img {
  width: 100%;
  height: auto;
  object-fit: cover;

}

/* --------- Intro --------------- */
.intro{
  background-color: #151000;
  color: #FDF8E8;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 10px;
  margin-top:-4px;
}

.intro p{
  width: 76%;
  margin: 0 auto;
}

.intro h1{
  color: #FEBE21;
  font-size: 30px;
}

li{
  list-style: none;
}


.products-cards{
  display: flex;
  flex-direction: row;
  max-width: 250px;
  height: auto;
  /* background-color: #FFFFFF; */
  padding: 10px;
}

.products{
  padding-top: 15px;
  padding-bottom: 15px;
}

.products-container{
  width: 76%;
  margin: 0 auto;
}


</style>
