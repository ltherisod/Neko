<template>
  <div class="cart-container">
    <h2>Your order id number: {{ this.$route.params.id }} was generated!</h2>
    <router-link class="btn btn-dark" to="/home">Go Back Home</router-link>
  </div>
</template>

<script>
export default {
  name: "CheckoutView",

  data() {
    return {};
  },
  created() {},
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
