<template>
  <div class="error-container">
    <h3 class='title'>Error!</h3>
    <p >The page you requested could not be found, please try again later</p>
    <img src='https://i.postimg.cc/WpkmXbFX/caterror.png' alt='error'/>
    <router-link class="btn btn-dark" to="/">Go Back!</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ErrorView",
  components: {},
  data(){
    return{
       
    }
  }
};
</script>
<style scoped>
.error-container {
  width: 100%;
  min-height: 100vh;
  background-color:#fcb82f;
  display:flex;
  justify-content:center;
  align-items:center;
 flex-direction:column;
}
.title{
    font-weight:900;
    font-size:4rem;
    color:white;
}
p{
     font-size:1.5rem;
        color:white;
}

</style>
