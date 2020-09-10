<template>
	<div class="footer">
		<div class="logo" id="logo">
			<a href="#">
				<img src="../assets/logo-microtracteur.svg" alt="site logo" width="180">
			</a>
		</div>
		<router-link to="/mentions-légales">CGV</router-link>
		<div class="footer-text">Copyright 2020 UNICKORN !</div>
	</div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style >
.footer{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	background-color: #151000;
}
.footer-text{
	color: white;
}

</style>
