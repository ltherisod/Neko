<template>
  <div class="cart-container">
    <div class="p-5" v-if="!this.$store.state.cart.length">
      <h2>Your Cart is empty!</h2>
      <router-link class="btn btn-dark" to="/home">Check our meals!</router-link>
    </div>
    <div v-else>
      <CartComponent />
    </div>
  </div>
</template>

<script>
import CartComponent from "../components/CartComponent.vue";
export default {
  name: "CartView",
  components: {
    CartComponent,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-container {
  background-image: url("https://i.postimg.cc/QMdrYLJB/cart.png");
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}
.img-cart {
  width: 10rem;
}
.clear-button {
  background-color: #ff3333 !important;
  color: white;
}
</style>
