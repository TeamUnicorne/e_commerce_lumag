<template>
	<div id="header">
		<header class="site-header" id="site-header">
			<div class="header-container">
				<div class="navigation-bar">
          <div class="top-bar">
            <div class="logo" id="logo">
              <a href="#">
                <img src="../assets/logo-microtracteur.svg" alt="site logo" width="260">
              </a>
            </div>
					</div>

					<div class="menu-bar">
						<div class="menu-left">

							<router-link to="/">Home</router-link>
							<router-link to="/mini-dumper">Mini dumper</router-link>
							<router-link to="/construction">Construction</router-link>
							<router-link to="/entretien-des-terrains">Entretien des terrains</router-link>
							<router-link to="/pieces-de-rechange">Pièces de rechange</router-link>
						</div>

						<div class="menu-right">
              <router-link to="/identification">Identification</router-link>
              <router-link id="panier" to="/Panier">🛒<span class="nb-products-cart"></span></router-link>

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

.menu-bar .menu-left a:active {
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

#panier {
  font-size: 2rem;
  position: relative;
}

.menu-bar .menu-right a:active {
  color: #151000;
  background-color: #FEBE21;
  text-transform: uppercase;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: 900;
}

.nb-products-cart {
  font-size: 0.8rem;
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
}
</style>
