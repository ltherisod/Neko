<template lang="">
  <div class='admin-container'> 
      <AddProductComponent/>
    </div>

</template>
<script>
import AddProductComponent from "../components/AddProductComponent.vue";


export default {
  name: "AdminView",
  components: {
    AddProductComponent,
  },
};
</script>
<style scoped>
.admin-container {
  background-image: url("https://i.postimg.cc/QMdrYLJB/cart.png");
  background-size: cover;
  width: 100%;
  min-height: 83vh;
  
}
</style>
