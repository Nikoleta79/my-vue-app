<template>
  <div id="app">
    <img alt="Real Estate Care Logo" src="./assets/Text.png">
    <HelloWorld msg="Hello World en Welcome to Real Estate Care !" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld!
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: rgba(71, 94, 108, 1); 
  margin-top: 60px;
  background-color: rgba(0, 170, 162, 1); 
}
</style>


