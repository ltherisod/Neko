<template>
  <div class="home">
   <ItemListContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemListContainer from '@/containers/ItemListContainer.vue'
export default {
  name: "HomeView",
  components: {
    ItemListContainer
  },
};
</script>
