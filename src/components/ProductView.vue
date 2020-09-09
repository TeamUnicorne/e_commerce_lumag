<template>
	<div class="product-container">
		<div class="product-container-top">
			<div class="images-product block-left">
				<slider animation="fade" width="auto" height="550px">
					<slider-item  v-for="(i, index) in produit.images" :key="index">
						<img v-if="produit.images" :src="i.src" >
					</slider-item>
				</slider>
			</div>
			<div class="infos-product block-right">
				<h1>{{produit.name}}</h1>
				<p>{{produit.price}} € TTC</p>
				<p v-if="produit.sale_price">{{produit.sale_price}} € TTC</p>
				<div class="stock">Reférence : {{produit.sku}}</div>
				<div class="sku">Stock : {{produit.stock_quantity}}</div>
				<div v-html="produit.short_description"></div>

				<button class="yellow-button">AJOUTER AU PANIER</button>
			</div>
		</div>

		<div class="product-container-bottom">
			<div v-html="produit.description"></div>
			<pre>{{produit}}</pre>
		</div>

	</div>
</template>

<script>

export default {
	name: 'ProductView',
	// data () {
	//   return {
	//   }
	// },
	computed: {
		produit() {
			let produit = localStorage.getItem('produit-' + this.$route.params.slug)
			produit = JSON.parse(produit)
			return produit
		}
	},

};
</script>
<style>
.product-container-top{
	display: flex;
	flex-direction: row;
}
.product-container-top .block-left,.product-container-top .block-right{
	flex: 1;
}
</style>
