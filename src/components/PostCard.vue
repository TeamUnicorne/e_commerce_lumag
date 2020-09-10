<template>
	<div >
		<div class="blog-image"> <img v-bind:src="image" v-bind:alt="image_alt"/></div>
		<div class="blog-content">
			<h3>{{title}}</h3>
			<p>{{excerpt}}</p>
			<router-link :to="'/post/' + post_slug" class="button">EN SAVOIR +</router-link>
		</div>
	</div>

</template>

<script>
export default {
name: "PostCard",
	props: {
		posts : [],
		image : String,
		image_alt : String,
		title : String,
		excerpt : String,
		post_slug : String,
	}
}
</script>

<style scoped>
.button{
	display: block;
	margin: 1rem 0;
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
