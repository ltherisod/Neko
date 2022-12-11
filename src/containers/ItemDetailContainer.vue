<template>
 <div class="item-container">
    <ItemDetail :item="item"/>
 </div>
</template>

<script>
import ItemDetail from '../components/ItemDetail.vue'
export default {
  name: 'ItemDetailContainer',
  components:{
    ItemDetail
  },
   data(){
    return{
         item:{
         id:'022',
         img:'https://i.postimg.cc/mkfgGPzW/naruto.png',
         category:'rolls',
         name:'Konoha Roll',
         ingredients:'terikaki salmon, avocado, garlic crispy, cucumber',
         price:55,
         stock:45,
        },
        
    }
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

