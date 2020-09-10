
<template>
	<div class="post-container">
<!--		<div class="post-container-top">-->
		<div class="post-container-top">

							<img  v-bind:src="post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url" v-bind:alt="post._embedded['wp:featuredmedia'][0].alt_text">
				</div>
				<div class="post-block">
						<h1>{{post.title.rendered}}</h1>
						<div v-html="post.content.rendered"></div>
					<div class="author-infos">
						<img v-bind:src="post._embedded['author'][0].avatar_urls[48]">
						<div>{{post._embedded['author'][0].name}}</div>
					</div>
					<router-link :to="'/'" class="button">Retour</router-link>
				</div>
	</div>

</template>

<script>
export default {
name: "Postview",
	computed: {
		post() {
			let post = localStorage.getItem('posts-' + this.$route.params.slug)
			post = JSON.parse(post)
			return post
		}
	},
}
</script>

<style scoped>
.post-block{
	margin: 2rem auto;
	width: 80%;
}
.author-infos{
	display: flex;
	align-items: center;
}
.post-container-top img{
	object-fit: cover;
	height: 400px;
	width: 100%;
}
.button{
	display: block;
	margin: 3rem auto;
	width: 150px;
	background-color: #FEBE21;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	color:#151000 ;
	text-transform: uppercase;
	font-size: 15px;
	font-weight: 900;
	border-radius: 3px 3px 3px 3px;
	-moz-border-radius: 3px 3px 3px 3px;
	-webkit-border-radius: 3px 3px 3px 3px;
	border: 1px solid #FEBE21;
	text-align: center;
}
.button:hover{
	background-color: #151000;
	color: white;
}
</style>
