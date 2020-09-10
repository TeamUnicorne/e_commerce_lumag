<template>
  <div>
    <img class="img-product" v-bind:src="image" v-bind:alt="image_alt"/>
    <h3 class="product-name">{{ name }}</h3>
    <div class="product-price">{{regular_price}} €</div>
    <div v-if="sale_price" class="promo-price">{{sale_price}} €</div>
    <router-link class="yellow-button" :to="'/produit/' + slug">+ D'INFO</router-link>
    <button class="add-to-cart"> AU PANIER ! </button>
  </div>
</template>

<script>
export default {
name: "CardProducts",
	props: {
		products : [],
		image : String,
		image_alt : String,
		name : String,
		slug : String,
		sale_price : String,
		regular_price : String
	}
}
</script>

<style>
/* --------- Product --------------- */
.products h2{
  text-align: center;
  text-transform: uppercase;
  color: #151000;
  font-weight: 900;
}

.img-product{
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.product-name{
  min-height: 40px;
}


.products-cards .product-name h3{
  font-weight: 400;
}

.product-card{
    position: relative;

}

.products-cards .product-card {
  max-width: 250px;
  height: 425px;
}

.product-price {
  font-weight: 900;
  font-size: 25px;
}

.yellow-button{
  display:block;
  background-color: #FEBE21;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color:#151000 ;
  width: auto;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  border: 0;
  position: absolute;
  bottom: 0px;
  left: 0;

}

.yellow-button:hover{
  display:block;
  background-color: #151000;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #FEBE21;
  width: auto;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  border: 0;
    position: absolute;
  bottom: 0px;
  left: 0;
}

.add-to-cart{
  position: absolute;
  bottom: 0px;
  right: 30px;
  display:block;
  
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #151000;
  width: auto;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  border: 1px solid #151000;
}

.add-to-cart:hover{
  position: absolute;
  bottom: 0px;
  right: 30px;
  display:block;
  background-color: #151000 ;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color:#FDF8E8;
  width: auto;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  border: 1px solid #151000;
}



</style>
