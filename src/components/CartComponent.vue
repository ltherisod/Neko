<template>
  <div class='cart-container'>
    <h2 class='title'><span class='color-text'>Your</span> Cart</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">🍣</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prod, i) in this.$store.state.cart" :key="prod.id" >
          <td><img :src="prod.img" :alt="prod.name" class="img-cart" /></td>
          <td>{{ prod.name }}</td>
          <td> 
              <div >
              <button class='btn btn-dark' v-bind:disabled='prod.quantity === 1' @click='prod.quantity--'>-</button>
              <input type="text"  v-model="prod.quantity">
              <button class='btn btn-dark' v-bind:disabled='prod.quantity === prod.stock' @click='prod.quantity++'>+</button>
              </div> 
          </td>
          <td>$ {{ prod.price }}</td>
          <td>$ {{getPartialPrice(prod)}}</td>
          <td><button class="btn btn-danger" @click="deleteItem(i)">X</button></td>
        </tr>
      </tbody>
    </table>
    <p><strong>Final Price to pay is </strong>:${{getTotalPayment(this.$store.state.cart)}},00</p>
    <div class="d-flex justify-content-between align-item-center p-3 w-lg-25 ">
      <router-link class="btn btn-dark" to="/home">Keep Shopping!</router-link>
      <button class="clear-button btn" @click="clear">Clear</button>
      <button class="btn btn-dark" @click="purchase">Purchase</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "CartComponent",
  methods: {
    clear() {
      this.$store.dispatch("clear");
      this.$store.dispatch("quantity");
    },
    deleteItem(i) {
      this.$store.dispatch("removeOneItem", i);
    },
     getTotalPayment(cart) {
        let total = 0
       
        cart.forEach((item) => {
          total += (item.quantity * item.price)
        });

        return total
      },
      getPartialPrice(item) {
        let partial = item.price * item.quantity

        return partial
      },
     ...mapActions('ordersModule',['postOrder']),
    async purchase() {
     
      let order = {
        user:this.getUser.name,
        cart: this.$store.state.cart,
        date: new Date(),
        status: false,
      };
      const res = await this.postOrder(order)
      
      this.$swal({
        position: "top-end",
        icon: "success",
        title: `${this.getUser.name} your order was generated!`,
        showConfirmButton: false,
        timer: 1000,
      });
      this.clear();
      this.$router.push(`/checkout/${res.id}`);
    },
  },
  computed:{
     ...mapGetters('usersModule',['getUser']),
     ...mapGetters('ordersModule',['oneOrder']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-cart {
  width: 10rem;
}
.clear-button {
  background-color: #ff3333 !important;
  color: white;
}
input{
  border:none;
  text-align:center;
  width:35px
}
.title{
  font-weight:700;
  letter-spacing:1px;
}
.color-text{
  color:#ff0101;
}
.cart-container{
  padding:2rem;
}
</style>
