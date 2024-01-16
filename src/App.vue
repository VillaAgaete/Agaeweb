<template>
  <div id="app">
    <Navbar/>
    <router-view/> <!-- contenido del router -->
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar, // Register the Navbar component
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
}
body{
  background-color: #fff59d;
}
</style>