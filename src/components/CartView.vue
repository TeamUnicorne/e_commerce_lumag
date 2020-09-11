<template>
  <div>
    <div class="product-card" v-for="(product, index) in panier" :key="index">
      <img class="img-product" v-bind:src="product.images[0].src"
           v-bind:alt="product.images[0].alt"/>
      <h3 class="product-name">{{ product.name }}</h3>
			<div>{{product.regular_price}}</div>
			<div>{{product.regular_price }}</div>
  </div>
    <button @click="postOrder">Valider</button>
</div>
</template>

<script>
import {ApiReader} from '@/constants'
const axios = require('axios');
let panier
export default {
  name: 'CartView',
  components: {
  },
  data () {
    return {
      loading: false,
      titre: "Chargement de votre produit !",
      panier: [],
      panierreview: [],
      order: null
    }
  },
  mounted() {
    this.$root.panier.forEach(el => (
        this.panier.push(JSON.parse(localStorage.getItem('produit-' + el.slug )))
    ))
    panier = this.panier
    console.log(panier)
  },
  methods: {
    postOrder: () => {
      axios
          .post(`${ApiReader.BASE_URL}${ApiReader.GET_URL_ORDER}?${ApiReader.CLIENT_KEY}&${ApiReader.SECRET_KEY}`,
              {
                body: panier
              })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    }
  }
};
</script>
<style>
.product-container{
  background: white;
}
.container-bottom{
  width: 100%;
  background: #F8F8F8;
}
.product-container-top{
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
}
.product-container-top .block-left,.product-container-top .block-right{
  flex: 1;
  margin: 2rem;
}
.product-container-top .block-right h1{

}
.product-container-top .block-right .yellow-button{
  position: relative;
  cursor: pointer;
}
.product-container-bottom{
  width: 80%;
  margin: auto;
  position: relative;
  margin: auto;
  overflow: hidden;
}
.description{
  margin: 2rem;
}
.slider-btn-left,.slider-btn-right{
  background: #F8F8F8;
}
</style>
