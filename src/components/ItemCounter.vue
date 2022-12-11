<template>
 <div class="d-flex justify-content-start align-items-center flex-column">
  <div>
  <button class="btn btn-dark" @click="decrese" v-bind:disabled='number === 0'>-</button>
  <span class="btn btn-light">{{number}}</span>
  <button class="btn btn-dark" @click="increse" v-bind:disabled='number === stock'>+</button>
  </div>
  <button class="btn add-button  " @click="addToCart">Shop Now!</button>
 </div>
</template>

<script>
export default {
  name: 'ItemCounter',
     data(){
        return{
            number:1
        }
     },
 props:{
    stock:Number,
 },
 methods:{
        increse(){
                return this.number= this.number + 1 
        },
        decrese(){
            return this.number= this.number - 1 
        },
        addToCart(){
            alert(`You just added ${this.number} items of `)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-button{
        margin-top:.5rem;
        background-color:#ff3333 !important;
        color:white;
    }
</style>
