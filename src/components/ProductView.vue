<template>
	<div v-if="loading">
		<Loader v-bind:titre="titre"/>
	</div>
	<div v-else class="product-container">
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
				<p class="product-price">{{produit.price}} € TTC</p>
				<p v-if="produit.sale_price">{{produit.sale_price}} € TTC</p>
				<div class="stock">Reférence : {{produit.sku}}</div>
				<div class="sku">Stock : {{produit.stock_quantity}}</div>
				<div v-html="produit.short_description"></div>

				<button class="yellow-button">AJOUTER AU PANIER</button>
			</div>
		</div>

		<div class="container-bottom">
			<div class="product-container-bottom">
				<div class="description" v-html="produit.description"></div>
<!--				<pre>{{produit.related_ids}}</pre>-->
			</div>
		</div>
	</div>
</template>

<script>
import Loader from "@/components/Loader";
export default {
	name: 'ProductView',
	components: {
		Loader
	},
	data () {return {
		loading: false,
		titre: "Chargement de votre produit !"
	}
	},
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
