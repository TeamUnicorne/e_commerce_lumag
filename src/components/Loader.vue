<template>
	<div id="container">
		<div id="loader_container">
			<h1>{{titre}}</h1>
			<span>Chargement en cours...</span>
			<img src="../assets/lumag-yellow-logo.svg" alt="Ceci est une image">
		</div>
	</div>
</template>

<script>
export default {
name: "Loader",
  props: {
    titre: String
  }
}
</script>

<style scoped>

#container {
  background: #151000;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

}
  h1 {
    font-family: 'Roboto',serif;
    color: #FEBE21;
    padding: 0;
    margin: auto;
    font-size: 3rem;
    letter-spacing: .1rem;
    font-weight: 900;
  }
  span {
    color: #F8F8F8;
    letter-spacing: .4rem;
  }
</style>
