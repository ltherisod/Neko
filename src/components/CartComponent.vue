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
      <button class="clear-button btn" @click="clear">Clear</button>
      <button class="btn btn-dark">Purchase</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
  data() {
    return {};
  },
  methods: {
    clear() {
      this.$store.dispatch("clear");
    },
    deleteItem(i) {
      this.$store.dispatch("removeOneItem", i);
    },
  },
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
