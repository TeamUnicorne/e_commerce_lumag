<template>
  <header class="site-header" id="site-header">
    <div class="header-container">
      <div class="navigation-bar">

        <div class="logo" id="logo">
          <a href="#">
            <img src="#" alt="site logo">
          </a>
        </div>

        <div class="menu-bar">
          <div class="menu-left">
            <a href="#">Mini dumper</a>

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
  height: 80px;
  width: 100%;
  padding-left: 200px;
}

.menu-bar{
  background-color: #151000;
  height: 50px;
  line-height: 50px;
  padding-left: 6rem;
  padding-right: 6rem;
}

.menu-left{
  float: left;
  display: flex;
  flex-direction: row;
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
  float: right;
  display: flex;
  flex-direction: row;
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