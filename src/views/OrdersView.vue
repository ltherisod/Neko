<template>
  <div class="home">
   <OrdersComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import OrdersComponent from '@/components/OrdersComponent.vue'
export default {
  name: "DetailView",
  components: {
    OrdersComponent
  },
  
};
</script>
<style scoped>
.home {
  background-image: url("https://i.postimg.cc/QMdrYLJB/cart.png");
  background-size: cover;
  width: 100%;
  min-height: 83vh;
}
</style>