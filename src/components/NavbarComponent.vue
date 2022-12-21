<template>
     <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img  src="../assets/logo.png" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link class="nav-link active" to="/home">Home</router-link>
        </li>
         <li class="nav-item" v-if="isAdmin">
           <router-link class="nav-link active" to="/config">Config</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Vegetarian</a></li>
            <li><a class="dropdown-item" href="#">Sushi</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Woks</a></li>
          </ul>
        </li>
      </ul>
     <CartWidget/>
    </div>
  </div>
</nav>
</template>

<script>
import CartWidget from './widgets/CartWidget.vue'
export default{
    name:'NavbarComponent',
    components: {
    CartWidget
  },
   data(){
    return{
      isAdmin:false,
    }
  },
  created(){
        if(localStorage.getItem('skywalker')){
        let user = JSON.parse(localStorage.getItem('skywalker'))
         this.isAdmin=user.admin
          console.log(this.isAdmin)
        }
  },
}
</script>
<style scoped>
nav a.router-link-exact-active {
  color: #ff0101 !important;
}
img{
    width:10rem;

}

</style>