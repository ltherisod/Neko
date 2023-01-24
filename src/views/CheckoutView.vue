<template>
  <div class="cart-container">
    <div class='text-container'>
      <h1 class='title'><span class='color-text'>Thank you </span> for trusting in us!</h1>
      <h2>Your order was succesfully generated.</h2>
      <h2>Our kitchen is working on it, it will be done aprox 30 minutes.</h2>
      <h2> 🥡 Order id number is #0{{ this.$route.params.id }}</h2>
      <router-link class="btn btn-dark" to="/home">Go Back Home</router-link>
    </div>
    <img src='https://i.postimg.cc/bvhFRM4g/nekocaja.png' alt='box'/>
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
  min-height: 83vh;
  display:flex;
  justify-content:space-between;
  align-items:center
}
img {
  width: 30rem;
}
.clear-button {
  background-color: #ff3333 !important;
  color: white;
}
.text-container{
  padding:2rem;
  align-self: flex-start;
  width:50%
   
}
.title{
    font-weight:900;
    font-size:3.5rem;
    letter-spacing:1px;
    padding-top:.43rem;
    margin-bottom:1em;
}
h2{
  font-weight:400;
  letter-spacing:1.5px;
  font-size:2rem;
  margin-bottom:1em;
}
.color-text{
  color:#ff0101;
}
</style>
