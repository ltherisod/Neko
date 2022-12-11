<template>
  <div class='log-container p-5 d-flex justify-content-between align-items-center '>
    <div></div>
    <div>
    <h2>Welcome to Neko!</h2>
    <h4>Let's begin our asian experience</h4>
    <p>Please complete the folowing form</p>
    <div>
    <b-form  @submit="onSubmit">
      <label for="feedback-user">Complete Name</label>
      <b-form-input v-model="name" :state="validation" id="feedback-user" type="text"></b-form-input>
      <label for="feedback-user">E-mail</label>
      <b-form-input v-model="email" :state="validation" id="feedback-user" type="email"></b-form-input>
      <label for="feedback-user">Address</label>
      <b-form-input v-model="address" :state="validation" id="feedback-user" type="text"></b-form-input>
      <label for="feedback-user">Cel phone</label>
      <b-form-input v-model="telefone" :state="validation" id="feedback-user" type="number"></b-form-input>
      <label for="feedback-user">Profile picture</label>
      <b-form-input v-model="img" :state="validation" id="feedback-user" type="url"></b-form-input>
       <label for="feedback-user">Password</label>
      <b-form-input v-model="password" :state="validation" id="feedback-user" type="password"></b-form-input>
      <b-button class="m-3" type="submit" variant="dark">Submit</b-button>
     </b-form>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterUser',
  data() {
      return {
       user:{
        name:'',
        email:'',
        address:'',
        telefone:'',
        img:'',
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

    <!--https://i.postimg.cc/wv0dTsrw/fondo-Recuperado.png-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .log-container{
    background-image:url("https://i.postimg.cc/8cckJGMh/neko.png");
    background-size:cover;
    width:100%;
    min-height:100vh;
  }
</style>