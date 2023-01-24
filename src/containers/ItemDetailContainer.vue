<template>
<div>
 <div class='catneo-container' v-if='isLoading'>
 <LoadingCat/>
 </div>
 <div v-else class="item-container">
    <ItemDetail :item="product"/>
 </div>
</div>
</template>

<script>
import ItemDetail from '../components/ItemDetail.vue'
import LoadingCat from '../components/LoadingCat.vue'
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'ItemDetailContainer',
  components:{
    ItemDetail,
    LoadingCat
  },
  props:{
    id:String
  },
  created(){
    this.getOneProduct(this.id)
  },
  methods:{
     ...mapActions('itemsModule',['getOneProduct']),
  },
  computed:{
     ...mapGetters('itemsModule',['product', 'isLoading']),
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-container{
        width:100%;
        min-height:83vh;
        background-image:url("https://i.postimg.cc/zGj1YBy0/fonde-Detail.png");
        background-size:cover;
    }
    .catneo-container{
        width:100%;
        min-height:83vh;
        background-color:black;
    }
</style>

