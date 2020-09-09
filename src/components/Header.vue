<template>
	<div id="header">
		<header class="site-header" id="site-header">
			<div class="header-container">
				<div class="navigation-bar">

					<div class="logo" id="logo">
						<a href="#">
							<img src="../assets/logo.png" alt="site logo" width="64">
						</a>
					</div>

					<div class="menu-bar">
						<div class="menu-left">
							<a href="">Mini dumper</a>
							<router-link to="/">Home</router-link>
							<a href="#">Construction</a>

							<a href="#">Entretien des terrains</a>

							<a href="#">Pièces de rechange</a>
						</div>

						<div class="menu-right">
							<a href="#">identification</a>

							<a href="#">Panier</a>
						</div>
					</div>

				</div>
			</div> <!-- navigation bar -->
		</header>
	</div>

</template>

<script>
export default {
  name: "header"
}
</script>

<style>
.navigation-bar{
  background-color: #FEBE21;
  overflow: hidden;
}


.logo{
  height: auto;
  padding-bottom: 20px;
  padding-top: 20px;
}

.top-bar{
  display: flex;
  justify-content: center;
}

.menu-bar{
  display: flex;
  justify-content: center;
  background-color: #151000;
  height: 50px;
  line-height: 50px;
  }

.menu-left{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.menu-bar .menu-left a {
  color: #FDF8E8;
  text-transform: uppercase;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 20px;
  font-weight: 400;
  display: block;
}

.menu-bar .menu-left a:hover {
  color: #151000;
  background-color: #FEBE21;
  text-transform: uppercase;
  line-height: 50px;
  font-weight: 900;

}

.menu-right{
  display: flex;
  flex-direction: row;
  padding-left: 2rem;
}

.menu-bar .menu-right a {
  color: #FEBE21;
  text-transform: uppercase;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 20px;
  font-weight: 400;
}

.menu-bar .menu-right a:hover {
  color: #151000;
  background-color: #FEBE21;
  text-transform: uppercase;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: 900;

}
</style>
