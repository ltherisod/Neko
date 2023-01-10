<template>
  <div>
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
        <tr v-for="(prod, i) in this.$store.state.cart" :key="prod.id">
          <td><img :src="prod.img" :alt="prod.name" class="img-cart" /></td>
          <td>{{ prod.name }}</td>
          <td>{{ prod.quantity }}</td>
          <td>$ {{ prod.price }}</td>
          <td><button class="btn btn-danger" @click="deleteItem(i)">X</button></td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between align-item-center p-3 w-25">
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
    },
    deleteItem(i) {
      this.$store.dispatch("removeOneItem", i);
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
</style>
