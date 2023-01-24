<template>
  <div id="app">
    <RouterComponent/>
  </div>
</template>

<script>
import RouterComponent from './router/RouterComponent.vue'
export default {
  name: 'App',
  components: {
    RouterComponent,
  },
}
</script>

<style>
#app {
 font-family: 'Poppins', sans-serif;
}
</style>
