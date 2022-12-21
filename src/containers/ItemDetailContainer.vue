<template>
 <div class="item-container">
    <ItemDetail :item="item"/>
 </div>
</template>

<script>
import ItemDetail from '../components/ItemDetail.vue'
import axios from 'axios'
export default {
  name: 'ItemDetailContainer',
  components:{
    ItemDetail
  },
  props:{
    id:String
  },
   data(){
    return{
         item:{}
    }
  },
  created(){
        axios.get(`https://639f2d1e5eb8889197f64888.mockapi.io/products/${this.id}`)
            .then(data => this.item = data.data)
            .catch((error)=> console.log(error))
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-container{
        width:100%;
        min-height:80vh;
        background-image:url("https://i.postimg.cc/zGj1YBy0/fonde-Detail.png");
        background-size:cover;
    }
</style>

