<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <h2>{{ item.name }}</h2>
    <div class="d-flex justify-content-around align-items-center">
      <div class="text-container">
        <p><strong>Ingredients:</strong> {{ item.ingredients }}</p>
        <p><strong>Stock:</strong>{{ item.stock }} units</p>
        <p><strong>Price:</strong>$ {{ item.price }}</p>
        <ItemCounter :stock="item.stock" :item="item" />
      </div>
      <div>
        <img :src="item.img" :alt="item.name" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "./ItemCounter.vue";
export default {
  name: "ItemDetail",
  props: {
    item: Object,
  },
  components: {
    ItemCounter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-container {
  padding: 1rem;
  /* background-color:#fafafb78; */
  font-size: 1.5rem;
  color: #6e6d7a;
}
</style>
