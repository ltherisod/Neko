<template>
  <div class='log-container p-5'>
    <h2>Welcome Back!</h2>
    <h4>Let's begin our asian experience</h4>
    <div class="w-25">
    <b-form  @submit="onSubmit">
      <label for="feedback-user">E-mail</label>
      <b-form-input v-model="email" :state="validation" id="feedback-user" type="email"></b-form-input>
       <label for="feedback-user">Password</label>
      <b-form-input v-model="password" :state="validation" id="feedback-user" type="password"></b-form-input>
      <b-button class="m-3" type="submit" variant="dark">Submit</b-button>
     </b-form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
      return {
       user:{
        email:'',
        password:''
       }
      }
    },
     methods: {
      onSubmit(event) {
        event.preventDefault()
        
      },
     },
    computed: {
      // validation() {
      //   return this.user.emai
      // }
    }
}
</script>

<!-- https://i.postimg.cc/t4ghZZQP/fond2o.png -->
<style scoped>
  .log-container{
    background-image:url("https://i.postimg.cc/3wgJv96x/neko2.png");
    background-size:cover;
    width:100%;
    min-height:100vh;
  }
</style>
