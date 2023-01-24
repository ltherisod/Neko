<template>
  <div class="d-flex justify-content-center align-items-center flex-column pt-4">
    <h2 class='title'><span class='color-text'>Details of</span> {{ item.name }}</h2>
    <div class="d-flex flex-md-row flex-column-reverse md-justify-content-around align-items-center p-5">
      <div class="text-container">
        <p><strong>Category:</strong> {{ item.category }}</p>
        <p><strong>Ingredients:</strong> {{ item.ingredients }}</p>
        <p><strong>Stock:</strong>{{ item.stock }} units</p>
        <p><strong>Price:</strong>${{ item.price }},00</p>
        <ItemCounter :stock="item.stock" :item="item" />
      </div>
      <div>
        <img :src="item.img" :alt="item.name" class='w-100' />
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
  font-size: 1.5rem;
  color: #6e6d7a;
  align-self:flex-start;
}
.color-text{
  color:#ff0101;
}
.title{
    font-weight:900;
    font-size:3rem;
    letter-spacing:1px;
    padding-top:.43rem;
    
}
img{
  border-radius:3%
}
p{
  text-transform:capitalize;
}
</style>
