<template>
  <div id="app">
    <!-- <NavbarComponent/> -->
    <RegisterUser/>
    <LogIn/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    <CartView/>
  </div>
</template>

<script>
// import NavbarComponent from './components/NavbarComponent.vue'
import ItemListContainer from './containers/ItemListContainer.vue'
import ItemDetailContainer from './containers/ItemDetailContainer.vue'
import LogIn from './components/LogIn.vue'
import RegisterUser from './components/RegisterUser.vue'
import CartView from './components/CartView.vue'
export default {
  name: 'App',
  components: {
    // NavbarComponent,
    ItemListContainer,
    ItemDetailContainer,
    LogIn,
    RegisterUser,
    CartView
  }
}
</script>

<style>
#app {
 
 
}
</style>
