<template>
  <div v-if="loading">
    <Loader/>
  </div>
  <div v-else id="calatogue">
    <section class="products">
      <h2>Produits</h2>
      <div class="products-container">
        <ul class="products-cards">
          <li class="product-card" v-for="(product, index) in products" :key="index">
            <CardProducts v-bind:image="product.images[0].src" v-bind:image_alt="product.image_alt"
                          v-bind:name="product.name"
                          v-bind:regular_price="product.regular_price"
                          v-bind:sale_price="product.sale_price"
                          v-bind:slug="product.slug"/>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import CardProducts from "@/components/CardProducts";
import {ApiReader} from "@/constants";
import Loader from "@/components/Loader";
const axios = require('axios');
export default {
  name: 'Catalogue',
      components: {
      Loader,
      CardProducts
    },
  data() {
      return {
            products: null,
            loading: false
      }
    },
  beforeMount() {
      this.loading = true
        },
  mounted() {
      this.loading = false
          axios
              .get(`${ApiReader.BASE_URL}${ApiReader.GET_ALL_PRODUCTS}?${ApiReader.CLIENT_KEY}&${ApiReader.SECRET_KEY}`)
          .then(response => (this.products = response.data))
    }
}
</script>

<style scoped>

li {
  list-style: none;
}


.productscards {
  display: flex;
  flex-direction: row;
  max-width: 250px;
  height: auto;
  /* backgroundcolor: #FFFFFF; */
  padding: 10px;
}

.products {
  padding-top: 15px;
  padding-bottom: 15px;
}

.productscontainer {
  width: 76%;
  margin: 0 auto;
}
</style>
