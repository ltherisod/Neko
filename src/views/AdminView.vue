<template lang="">
  <div class='admin-container'> 
  <h2 class='m-4'> Welcome Admin!</h2>
   <div>
        <ProductsTable/>
        <div class='p-3 d-flex justify-content-between align-items-start'>
                <EditOneComponent/>
                <AddProductComponent/>
        </div>
        <OrdersComponent/>
    </div>
    </div>

</template>
<script>
import AddProductComponent from "../components/AddProductComponent.vue";
import EditOneComponent from "../components/EditOneComponent.vue";
import ProductsTable from "../components/ProductsTable.vue";
import OrdersComponent from "../components/OrdersComponent.vue"
export default {
  name: "AdminView",
  components: {
    AddProductComponent,
    EditOneComponent,
    ProductsTable,
    OrdersComponent,
  },
};
</script>
<style scoped>
.admin-container {
  background-image: url("https://i.postimg.cc/QMdrYLJB/cart.png");
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  text-align: center;
}
</style>
