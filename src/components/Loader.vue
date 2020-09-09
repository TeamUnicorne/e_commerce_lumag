<template>
<div id="container">
  <div id="loader_container">
    <h1>{{titre}}</h1>
    <span>Chargement en cours...</span>
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
  }
  span {
    color: #F8F8F8;
    letter-spacing: .4rem;
  }
</style>
