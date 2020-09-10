<template>
  <div v-if="loading">
    <Loader v-bind:titre="titre"/>
  </div>
	<div v-else id="home">
		<section class="slider">
			<img src="../assets/entreprise.jpg" alt="Ceci est une image">
		</section>
		<section class="intro">
			<div class="intro-container">
				<div class="section-title">
					<h1>SOCIÉTÉ</h1>
				</div>

				<div class="section-text-intro">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus metus, ultricies eget iaculis et, mattis et nunc. Nam fermentum augue rutrum neque mollis vulputate. Praesent id urna sagittis, feugiat metus vitae, cursus lorem. In laoreet sem venenatis urna vehicula feugiat. Donec magna nulla, ultricies tincidunt enim suscipit, ornare mattis ex. Aliquam dictum purus ut tempus molestie. Integer bibendum finibus neque, a euismod libero posuere sit amet. In metus ipsum, facilisis et erat at, molestie ornare nisi. Nullam vitae urna id dolor tincidunt condimentum in eget neque. Praesent aliquam sem sit amet eros sollicitudin lacinia. Sed ut ornare mi. Nullam eros dolor, vehicula nec nibh sed, molestie tristique ligula.</p>
				</div>
        <router-link  class="bouton" to="/catalogue">NOTRE CATALOGUE</router-link>
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
													v-bind:sale_price="product.sale_price"
													v-bind:slug="product.slug"
						/>
					</li>
				</ul>
			</div>
		</section>

    <!-- End for WooCommerce -->

    <section class="blog">
      <div class="section-title">
        <h2>Dernières actus</h2>
      </div>

      <div class="articles-container" >
				<div class="article-container" v-for="(post, index) in posts" :key="index">
					<PostCard v-bind:image="post._embedded['wp:featuredmedia'][0].media_details.sizes['large'].source_url"
										v-bind:image_alt="post._embedded['wp:featuredmedia'][0].alt_text"
										v-bind:title="post.title.rendered"
										v-bind:excerpt="post.excerpt.rendered"
										v-bind:post_slug="post.slug"
					/>
				</div>
        <!-- Faire une boucle WP pour récupérer les articles -->
      </div>
    </section>



  </div>

</template>

<script>
import CardProducts from './CardProducts'
import PostCard from './PostCard'
import {ApiReader} from '@/constants'
import {PostsApiReader} from '@/constants'
import Loader from "@/components/Loader";

const axios = require('axios');

export default {
	name: 'Home',
	components: {
    Loader,
		CardProducts,
		PostCard
	},
	data() {
		return {
			products: null,
			posts: null,
			queryOptions: {
				_embed: true, //Response should include embedded resources.
			},
      loading: false,
      titre: "Bienvenue chez Lumag"
		}
	},
  beforeMount() {
    return this.loading = true
  },
  mounted() {
		axios
				.get(`${ApiReader.BASE_URL}${ApiReader.GET_ALL_PRODUCTS}?${ApiReader.CLIENT_KEY}&${ApiReader.SECRET_KEY}`)
				.then((response)=>{
					this.products = response.data
					this.products.forEach(p => localStorage.setItem('produit-' + p.slug, JSON.stringify(p)));
				})
		axios
				.get(`${PostsApiReader.GET_ALL_POSTS}`,{params: this.queryOptions})
				.then((response)=>{
					this.posts = response.data
					this.posts.forEach(art => localStorage.setItem('posts-' + art.slug, JSON.stringify(art)));
				})
    return this.loading = false
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
  font-family: 'Roboto',serif;
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
  color: #151000;
}

h1, h2, h3{
  font-weight: 400;
}



/* --------- Slider --------------- */

.slider img {
  width: 100%;
  height: 400px;
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
  font-size: 1.1rem;
}

.intro h1{
  color: #FEBE21;
  font-size: 30px;
  font-weight: 900;
}

.bouton{
  display:inline-block;
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
  border: 1px solid #FEBE21;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;

}

.bouton:hover{
  display:inline-block;
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
  border: 1px solid #FEBE21;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;

}

li{
  list-style: none;
}


.products-cards{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  /* background-color: #FFFFFF; */
  padding: 10px;

}
.product-card{
  padding-right:30px;
}

.products{
  padding-top: 15px;
  padding-bottom: 15px;
}

.products-container{
  width: 76%;
  margin: 0 auto;
}

@media (max-width: 1243px) {
  .products-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .product-card{
    margin-bottom: 70px;

  }
  .products-container{
    width: 96%;
    margin: 0 auto;
  }
}

@media (max-width: 764px) {
  .products-cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  .product-card{
    width: 100%;
  }

  .products-container{
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .product-card{
    text-align: center;
    margin-bottom: 70px;
    padding-right: 0;
  }
  .products-container{
    width: 96%;
    margin: 0 auto;
  }
  .yellow-button{
    position: relative;
    margin: auto;
    margin-bottom: 10px;
    
  }
  .yellow-button:hover{
    position: relative;
    margin: auto;
    margin-bottom: 10px;
  }

  .add-to-cart{
    position: relative;
    margin: auto;
    right: 0;
  }

  .add-to-cart:hover{
    position: relative;
    margin: auto;
    right: 0;
  }

}
/* --------- Actus --------------- */

.blog{
  background-color: #FFFFFF;
  padding-bottom: 2rem;
}


.section-title h2{
  text-align: center;
  text-transform: uppercase;
  color: #151000;
  font-weight: 900;
  padding-top: 20px;
}

.articles-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 76%;
  margin: 0 auto;
}

.article-container{
  max-width: 550px;
  height: auto;
  padding-right: 20px;
}

.blog-image img{
  width: 550px;
  height: 200px;
  object-fit: cover;
}

.article-container h3{
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 0;
}
.article-container p{
  margin-top: 10px;
  margin-bottom: 0px;
}

@media (max-width: 1243px) {

  .articles-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 96%;
    margin-right: 20px;
    margin-left: 20px;
  }

}



</style>
