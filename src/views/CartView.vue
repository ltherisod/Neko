<template>
  <div class="cart-container">
    <h2>Your Cart</h2>
     <table class="table">
    <thead>
      <tr>
        <th scope="col">🍣</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="prod in cart" :key="prod.id">
    <td><img :src="prod.img" :alt="prod.name" class='img-cart'></td>
    <td>{{prod.name}}</td>
    <td>{{prod.quantity}}</td>
    <td>$ {{prod.price}}</td>
    <td><button class="btn btn-danger">X</button></td>
    </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-between align-item-center p-3 w-25">
  <button class="clear-button btn ">Clear</button>
  <button class="btn btn-dark">Purchase</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  data(){
    return{
      cart:[
        {id:'01',quantity:2,stock:45,img:'https://i.postimg.cc/SK5m4n2N/padthai.jpg',category:'woks', name:'Pad Thai', ingredients:'rice noodles, chicken, garlic, onion, pepper', price:50},
        {id:'02',quantity:2,stock:55,img:'https://i.postimg.cc/tTNKv7jg/yakisoba.webp',category:'woks', name:'Yakisoba', ingredients:'whole grain noodles, pork, garlic, onion, pepper', price:55},
        {id:'03',quantity:2,stock:65,img:'https://i.postimg.cc/qMP1n0PD/yakimeshi.webp',category:'woks', name:'Yakimeshi', ingredients:'rice, salmon, garlic, onion, pepper, eggs', price:75},
        {id:'04',quantity:2,stock:75,img:'https://i.postimg.cc/XJ2b7XDz/Chop-Suey.webp',category:'woks', name:'Chop Suey', ingredients:'beaf, garlic, onion, three color peppers, carrots', price:60},
        {id:'011',quantity:2,stock:85,img:'https://i.postimg.cc/pTgtn3Rf/Hot-Rolls.png',category:'rolls', name:'Hot Rolls', ingredients:'salmon, cucumber, avocado, panko', price:50},
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .cart-container{
    background-image:url("https://i.postimg.cc/QMdrYLJB/cart.png");
    background-size:cover;
    width:100%;
    min-height:100vh;
  }
  .img-cart{
    width:10rem;
  }
  .clear-button{
     background-color:#ff3333 !important;
     color:white;
  }
</style>
