<template lang="">
          <div class='container'>
          <h5>Do you want tu update a product? 🍜</h5>
          <b-form  @submit="onSubmit"  >
          <div class='my-4'>
                <b-form-input v-model="id"  id="name" type="text" placeholder="Please complete with the id of the product you want to edit"></b-form-input>
                <small class="text-danger position-absolute" v-if="error.id.length !== 0" >{{error.id}}</small>
            </div>
            <div class='my-4'>
                <b-form-input v-model="name"  id="name" type="text" placeholder="Complete product name"></b-form-input>
                <small class="text-danger position-absolute" v-if="error.name.length !== 0" >{{error.name}}</small>
            </div>
            <div class='my-4'>
              <b-form-input v-model="ingredients"  id="ingredients" type="text" placeholder="Ingredients..."></b-form-input>
              <small class="text-danger position-absolute" v-if="error.ingredients.length !== 0" >{{error.ingredients}}</small>
            </div>
            <div class='my-4'>
              <b-form-input v-model="img"  id="img" type="url" placeholder="Picture url"></b-form-input>
                <small class="text-danger position-absolute" v-if="error.img.length !== 0" >{{error.img}}</small>
            </div>
            <div class='my-4'>
              <b-form-input v-model="stock"  id="stock" type="number" placeholder="Stock available"></b-form-input>
              <small class="text-danger position-absolute" v-if="error.stock.length !== 0" >{{error.stock}}</small>
            </div>
            <div class='my-4'>
              <b-form-input v-model="price"  id="price" type="number" placeholder="Price of the product"></b-form-input>
              <small class="text-danger position-absolute" v-if="error.price.length !== 0" >{{error.price}}</small>
            </div>
             <div class='my-4'>
             <select
            v-model="category"
            name="categorySelector"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected></option>
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
           <small class="text-danger position-absolute" v-if="error.category.length !== 0" >{{error.category}}</small>
            </div>
            <div class="d-flex justify-content-end">
                <b-button class="my-3 align-self-end" type="submit" variant="dark">Edit</b-button>
            </div>
          </b-form>
          </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"AddProductComponent",
     data() {
      return {
        stock:"",
        img: "",
        category: "",
        name: "",
        ingredients: "",
        price: "",
        id:'',
        categories:[
            'woks',
            'rolls',
            'geishas'
        ],
        error:{
          name:'',
          category:'',
          stock:'',
          ingredients:'',
          img:'', 
          price:'',
          id:''

        }
      }
    },
     methods: {
      ...mapActions('itemsModule',['editProduct']),
      async onSubmit(event) {
        event.preventDefault()
        if(this.name.length > 6 &&
            this.stock > 1 &&
            this.category.length  &&
            this.ingredients.length > 10 &&
            this.price > 0 && 
            this.id.length){
             const product={
                    id: this.id,
                    name:this.name,
                    category:this.category,
                    stock:this.stock,
                    ingredients:this.ingredients,
                    img:this.img, 
                    price:this.price
              }
              this.editProduct(product)
             this.$swal({
                position: 'top-end',
                icon: 'success',
                title: `${product.name} was updated!`,
                showConfirmButton: false,
                timer: 1000
                })
            Object.assign(this.$data, this.$options.data());
        }else{
         if (!this.name) {
            { this.error.name = "Please complete this field"}
          }
          if(!this.category){
             { this.error.category = "Please choose one category"}
          }
          if(!this.img){
             { this.error.img = "Please complete a valid image url"}
          }
          if(!this.ingredients.length){
             { this.error.ingredients = "Ingredients must be completed"}
          }
          if(this.ingredients && this.ingredients.length < 10){
             { this.ingredients.password = "Please check this field, there must be more ingredients"}
          }
          if(this.stock < 1){
             { this.error.stock = "We need more stock to sell this product"}
          }
          if(this.price === 0){
             { this.error.price = "The price is incorrect, please check this field"}
          }
     
        }
      },
      
     },
}
</script>
<style lang="">
    
</style>