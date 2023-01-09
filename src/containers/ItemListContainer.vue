<template>
<div>
  <div class='catneo-container' v-if='isLoading'>
  <LoadingCat/>
  </div>
  <div v-else class="items-container">
      <ItemList title="Neko's specials" :items="products" />
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import ItemList from "../components/ItemList.vue";
import LoadingCat from '../components/LoadingCat.vue';
export default {
  name: "ItemListContainer",
  components: {
    ItemList,
    LoadingCat
  },
  created() {
    this.getProducts()
  },
  methods:{
     ...mapActions('itemsModule',['getProducts']),
  },
  computed:{
     ...mapGetters('itemsModule',['products', 'isLoading']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items-container {
  width: 100%;
  min-height: 80vh;
  background-image: url("https://i.postimg.cc/QCvK7K5C/fondo.png");
  background-size: cover;
}
.catneo-container{
        width:100%;
        min-height:80vh;
        background-color:black;
    }
</style>
