<template>
	<div>
			<div class="card-product-name">{{ name }}</div>
			<img v-bind:src="image" v-bind:alt="image_alt"/>
			<div class="product-price">{{regular_price}} €</div>
			<div v-if="sale_price" class="promo-price">{{sale_price}} €</div>
			<button>ADD TO CART</button>
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

<style scoped>

</style>
