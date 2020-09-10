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

                <div class="burger" id="burger" v-on:click="openBurger">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="line3"></div>
                </div>


					</div>

					<div class="menu-bar" id="sousMenu">
						<div class="menu-left">
							<router-link to="/">Home</router-link>
							<router-link to="/mini-dumper">Mini dumper</router-link>
							<router-link to="/construction">Construction</router-link>
							<router-link to="/entretien-des-terrains">Entretien des terrains</router-link>
							<router-link to="/pieces-de-rechange">Pièces de rechange</router-link>
						</div>

						<div class="menu-right">
              <router-link to="/identification">Identification</router-link>
              <router-link id="panier" to="/Panier"><i class="fas fa-shopping-cart"></i></router-link>
						</div>


					</div>

				</div>
			</div> <!-- navigation bar -->
		</header>
	</div>

</template>

<script>
export default {
  name: "header",
  methods: {
    openBurger: function () {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      let x = document.getElementById("sousMenu");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }

    }
  }
}
</script>

<style>
.navigation-bar{
  background-color: #FEBE21;
  overflow: hidden;
}
.fa-shopping-cart{
  font-size: 25px;
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

.menu-right {
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

.burger div{
  width: 40px;
  height: 4px;
  background-color: #151000;
  margin: 5px;
}

.burger{
  display: none;
  cursor: pointer;
}



@media (max-width: 980px) {
    .menu-bar{
      z-index: 1;
      position: absolute;
      display:flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      left: O;
      background-color: #151000;
      display: none;
    }


    .menu-left, .menu-right{
      display:flex;
      flex-direction: column;
      align-items: left;
      padding-left: 1rem;
    }

    .burger{
      display: block;
      position: absolute;
      left:10px;
      top: 50px;
    }


}
</style>
