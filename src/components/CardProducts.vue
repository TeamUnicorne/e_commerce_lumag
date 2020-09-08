<template>
  <div>
    <img class="img-product" v-bind:src="image" v-bind:alt="image_alt"/>
    <h3 class="product-name">{{ name }}</h3>
    <div class="product-price">{{regular_price}} €</div>
    <div v-if="sale_price" class="promo-price">{{sale_price}} €</div>
    <button class="yellow-button">ADD TO CART</button>
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
}

.img-product{
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.products-cards .product-name h3{
  font-weight: 400;
}


.product-price p{
  font-weight: 900;
  font-size: 25px;
}

.yellow-button{
  display:block;
  background-color: #FEBE21;
  padding-left: 10px;
  padding-right: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  color:#151000 ;
  width: 150px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 900;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
}
</style>
