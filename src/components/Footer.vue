<template>
	<div class="footer">
		<div class="logo" id="logo">
		<router-link to="/"><img src="../assets/logo-microtracteur.svg" alt="site logo" width="260">
		</router-link>	
			<p class="adresse" style="margin:0px;">1 rue de l'Adresse - 44000 Nantes <br>
			Tél : 02 51 00 00 00</p>
		</div>
		<router-link class="footer-text" to="/contact">Contact</router-link>
		<router-link class="footer-text" to="/rgpd">RGPD</router-link>
		<router-link class="footer-text" to="/Cgv">Cgv</router-link>
		<div class="footer-text" style="margin-bottom:10px;">Copyright 2020 UNICKORN !</div>
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

.adresse{
	color: #FDF8E8;
}

@media (max-width: 980px) {
    .footer{
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		
	}


}

</style>
