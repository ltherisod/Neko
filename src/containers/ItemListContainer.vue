<template>
  <div class="items-container">
    <ItemList title="Neko's specials" :items="items" />
  </div>
</template>

<script>
import axios from "axios";
import ItemList from "../components/ItemList.vue";
export default {
  name: "ItemListContainer",
  components: {
    ItemList,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios
      .get("https://639f2d1e5eb8889197f64888.mockapi.io/products")
      .then((data) => (this.items = data.data))
      .catch((error) => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items-container {
  width: 100%;
  min-height: 80vh;
  background-image: url("https://i.postimg.cc/QCvK7K5C/fondo.png");
  background-size: cover;
}
</style>
