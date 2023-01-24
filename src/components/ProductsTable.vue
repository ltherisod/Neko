<template lang="">
    <div>
    <div v-if='isLoading' class=" d-flex justify-content-center align-items-center w-100 customdiv">
      <div class="custom spinner-grow" role="status" >
        <span class="sr-only"></span>
      </div>
    </div>
     <div v-else class=" d-flex flex-column align-items-center">
     <h5 class="">Our Products  🍣</h5>
     <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Img</th>
        <th scope="col">Name</th>
        <th scope="col">Ingredients</th>
        <th scope="col">stock</th>
        <th scope="col">Price</th>
        <th scope="col">Edit Item</th>
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
        <td>
        <button  @click="goThere({path:`/edit/${prod.id}`})" class="btn btn-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
          </svg>
        </button>
      </td>
        <td><button class="btn btn-danger" @click="showAlert(prod.id)">X</button></td>
        </tr>
    </tbody>
  </table>
     </div>
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
        goThere(url){
            this.$router.push(url);
        }
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
  .custom{
    width:5rem;
    height:5rem;
    color: #ff0101 !important;
  }
  .customdiv{
    min-height: 50vh;
  }
  h5{
     font-weight:400;
    font-size:2rem;
    letter-spacing:1px;
    padding-top:.43rem;
    align-self:flex-start;
  }
</style>