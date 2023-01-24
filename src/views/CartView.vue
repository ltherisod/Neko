<template>
  <div class="cart-container">
    <div class="empty" v-if="!this.$store.state.cart.length">
      <h2 class='title'>Your Cart is <span class='color-text'>empty</span>!</h2>
      <img src='https://i.postimg.cc/RVbhb7cx/neko-empty.png' alt='empty'/>
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
  min-height: 90vh;
}
.img-cart {
  width: 10rem;
}
.clear-button {
  background-color: #ff3333 !important;
  color: white;
}
.empty{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:1rem;
}
.title{
  font-weight:700;
  letter-spacing:1px;

}
.color-text{
  color:#ff0101;
}
</style>
