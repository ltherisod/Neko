<template>
  <div class="items-container">
    <ItemList title="Neko's specials" :items="items"/>
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
export default {
  name: 'ItemListContainer',
   components: {
    ItemList,
  },
  data(){
    return{
         items:[
        {id:'01',stock:45,img:'https://i.postimg.cc/SK5m4n2N/padthai.jpg',category:'woks', name:'Pad Thai', ingredients:'rice noodles, chicken, garlic, onion, pepper', price:50},
        {id:'02',stock:55,img:'https://i.postimg.cc/tTNKv7jg/yakisoba.webp',category:'woks', name:'Yakisoba', ingredients:'whole grain noodles, pork, garlic, onion, pepper', price:55},
        {id:'03',stock:65,img:'https://i.postimg.cc/qMP1n0PD/yakimeshi.webp',category:'woks', name:'Yakimeshi', ingredients:'rice, salmon, garlic, onion, pepper, eggs', price:75},
        {id:'04',stock:75,img:'https://i.postimg.cc/XJ2b7XDz/Chop-Suey.webp',category:'woks', name:'Chop Suey', ingredients:'beaf, garlic, onion, three color peppers, carrots', price:60},
        {id:'011',stock:85,img:'https://i.postimg.cc/pTgtn3Rf/Hot-Rolls.png',category:'rolls', name:'Hot Rolls', ingredients:'salmon, cucumber, avocado, panko', price:50},
        {id:'022',stock:95,img:'https://i.postimg.cc/mkfgGPzW/naruto.png',category:'rolls', name:'Konoha Roll', ingredients:'terikaki salmon, avocado, garlic crispy, cucumber', price:55},
        {id:'033',stock:54,img:'https://i.postimg.cc/fL59zjsQ/konoha.png',category:'rolls', name:'Kasai Roll', ingredients:'green onion, salmon, philadelphia cheese, panko', price:75},
        {id:'044',stock:55,img:'https://i.postimg.cc/cLmTzzkd/New-Cali-1080.png',category:'rolls', name:'Umi Roll', ingredients:'beaf, tempura shrimp, mango, cucumber, panko', price:60},
        {id:'012',stock:56,img:'https://i.postimg.cc/YCTFSfsJ/salmonahumado-247x300.jpg',category:'geishas', name:'Pink Geisha', ingredients:'salmon, avocado, philadelphia cheese', price:50},
        {id:'023',stock:57,img:'https://i.postimg.cc/4xCrGj1t/geishas1.png',category:'geishas', name:'Smoke Geisha', ingredients:'smoked salmon, avocado, philadelphia cheese', price:55},
        {id:'034',stock:58,img:'https://i.postimg.cc/jSLmztdG/geishas-chicas-2.png',category:'geishas', name:'Red Geisha', ingredients:'red tuna, avocado, philadelphia cheese', price:75},
        {id:'045',stock:59,img:'https://i.postimg.cc/prk8VwwZ/geisha3.jpg',category:'geishas', name:'Wedding Geisha', ingredients:'white salmon, avocado, philadelphia cheese', price:60},
       ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .items-container{
        width:100%;
        min-height:80vh;
        background-image:url("https://i.postimg.cc/QCvK7K5C/fondo.png");
        background-size:cover;
    }
</style>
