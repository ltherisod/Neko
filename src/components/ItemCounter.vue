<template>
  <div v-if="buy" class="d-flex justify-content-between align-items-center">
    <router-link class="btn btn-dark" to="/home">Keep Shopping!</router-link>
    <router-link class="btn btn-dark" to="/cart">Check The Cart</router-link>
  </div>
  <div v-else class="d-flex justify-content-start align-items-center flex-column">
    <div>
      <button class="btn btn-dark" @click="decrese" v-bind:disabled="number === 0">
        -
      </button>
      <span class="btn btn-light">{{ number }}</span>
      <button class="btn btn-dark" @click="increse" v-bind:disabled="number === stock">
        +
      </button>
    </div>
    <button class="btn add-button" v-bind:disabled="number === 0" @click="shop">
      Shop Now!
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  data() {
    return {
      number: 1,
      buy: false,
    };
  },
  props: {
    stock: Number,
    item: Object,
  },
  methods: {
    increse() {
      return (this.number = this.number + 1);
    },
    decrese() {
      return (this.number = this.number - 1);
    },
    shop() {
      let purchase = { ...this.item, quantity: this.number };
      this.$store.dispatch("addToCart", purchase);
      this.$store.dispatch('quantity')
      this.$swal({
        position: "top-end",
        icon: "success",
        title: `${this.item.name} was added!`,
        showConfirmButton: false,
        timer: 1000,
      });
      console.log(this.$store.state.cart);
      this.buy = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-button {
  margin-top: 0.5rem;
  background-color: #ff3333 !important;
  color: white;
}
</style>
