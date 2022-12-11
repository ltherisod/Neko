<template>
  <div class='d-flex justify-content-center flex-column align-items-center'>
    <h2>{{title}}</h2>
  <div class='d-flex justify-content-around flex-wrap align-items-center'>
    <ItemComponent  v-for="prod in this.items" :key="prod.id" :prod="prod"/>
  </div>
  </div>
</template>

<script>
import ItemComponent from './ItemComponent.vue'
export default {
  name: 'ItemList',
  components:{
    ItemComponent
  },
  props:{
        title:String,
        items:Array,
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
