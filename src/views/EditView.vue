<template>
  <div class="admin-container">
   <div v-if='isLoading' class="d-flex justify-content-center align-items-center w-100 customdiv">
            <div class="custom spinner-grow" role="status" >
                <span class="sr-only"></span>
            </div>
        </div>
        <div v-else> 
            <EditOneComponent :item="product"/>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EditOneComponent from '@/components/EditOneComponent.vue'
import { mapGetters, mapActions} from 'vuex'
export default {
  name: "EditView",
  components: {
    EditOneComponent
  },
  created(){
    this.getOneProduct(this.$route.params.id)
  },
  methods:{
     ...mapActions('itemsModule',['getOneProduct']),
  },
  computed:{
     ...mapGetters('itemsModule',['product', 'isLoading']),
  }
};
</script>
<style scoped>
.admin-container {
  background-image: url("https://i.postimg.cc/QMdrYLJB/cart.png");
  background-size: cover;
  width: 100%;
  min-height: 80vh;
}
.custom{
    width:5rem;
    height:5rem;
    color: #ff0101 !important;
  }
  .customdiv{
    min-height: 50vh;
  }
</style>