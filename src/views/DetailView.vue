<template>
  <div class="home">
   <ItemDetailContainer :id="id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemDetailContainer from '@/containers/ItemDetailContainer.vue'
export default {
  name: "DetailView",
  components: {
    ItemDetailContainer
  },
  data(){
    return{
        id:this.$route.params.id
    }
  }
};
</script>
