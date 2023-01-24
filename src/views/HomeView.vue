<template>
<div class='admin-container' v-if='isAdmin'>
  <h2 class='title'> Welcome Admin!</h2>
  <ProductsTable/>
</div>
  <div class="home" v-else>
   <ItemListContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemListContainer from '@/containers/ItemListContainer.vue'
import ProductsTable from '@/components/ProductsTable.vue'
import {mapGetters} from 'vuex'
export default {
  name: "HomeView",
  components: {
    ItemListContainer,
    ProductsTable
  },
    data() {
    return {
      isAdmin: false,
    };
  },
  created() {
    console.log(this.getUser);
    
    if (this.getUser.admin === 'true') {
      this.isAdmin=true
    }
  },
  computed:{
      ...mapGetters('usersModule',['getUser']),
  }
  
};
</script>
<style scoped>
  .title{
    font-weight:900;
    font-size:2.5rem;
    letter-spacing:1px;
    padding-top:.43rem
}
.admin-container {
  background-image: url("https://i.postimg.cc/QMdrYLJB/cart.png");
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  text-align: center;
}
</style>
