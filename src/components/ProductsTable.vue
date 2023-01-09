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
    <tr v-for="prod in products" :key="prod.id">
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
import { mapGetters, mapActions} from 'vuex'
export default {
    name:'ProductTable',
     
  created(){
       this.getProducts()
    },
    methods:{
       ...mapActions('itemsModule',['getProducts', 'deleteOneProduct']),
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
           this.deleteOneProduct(id)
        this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
})
    },
    },
    computed:{
     ...mapGetters('itemsModule',['products', 'isLoading']),
  }
}
</script>
<style scoped>
    .img{
    width:8rem;
  }
</style>