<template lang="">
     <div class="m-5 d-flex flex-column align-items-center">
     <h5 class="text-align-center">Our Product List 🍣</h5>
     <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Img</th>
        <th scope="col">Name</th>
        <th scope="col">Ingredients</th>
         <th scope="col">stock</th>
        <th scope="col">Price</th>
        <th scope="col">Delete Item</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="prod in items" :key="prod.id">
     <td>{{prod.id}}</td>
    <td><img :src="prod.img" :alt="prod.name" class='img'></td>
    <td>{{prod.name}}</td>
    <td>{{prod.ingredients}}</td>
     <td>{{prod.stock}}</td>
    <td>$ {{prod.price}}</td>
    <td><button class="btn btn-danger" @click="showAlert(prod.id)">X</button></td>
    </tr>
    </tbody>
  </table>
     </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'ProductTable',
     data(){
    return{
         items:[]
    }
  },
  created(){
        axios.get('https://639f2d1e5eb8889197f64888.mockapi.io/products')
            .then(data => this.items = data.data)
    },
    methods:{
        showAlert(id) {
      // Use sweetalert2
      this.$swal({title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'}).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`https://639f2d1e5eb8889197f64888.mockapi.io/products/${id}`)
        this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
})
    },
    }
}
</script>
<style scoped>
    .img{
    width:8rem;
  }
</style>