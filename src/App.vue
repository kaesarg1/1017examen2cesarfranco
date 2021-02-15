<template>
  <div id="app">
    <Header/>
    <Accueil/>
    <Footer/>
  </div>
</template>

<script>
import Accueil from './views/Accueil';
import Header from './components/Header';
import Footer from './components/Footer';



export default {
  
  name: 'App',
  components: {
    Accueil,
    Header,
    Footer,
    
  
  }
}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
</style>
