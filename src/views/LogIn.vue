<template>
  <div class="log-container p-5">
    <h2>Welcome Back!</h2>
    <h4>Let's begin our asian experience</h4>
    <div class="w-25">
      <b-form @submit="onSubmit">
        <label for="feedback-user">E-mail</label>
        <b-form-input v-model="email" id="feedback-user" type="email"></b-form-input>
        <label for="feedback-user-pass">Password</label>
        <b-form-input
          v-model="password"
          id="feedback-user-pass"
          type="password"
        ></b-form-input>
        <b-button class="m-3" type="submit" variant="dark">Submit</b-button>
      </b-form>
      <p>
        Don't have an account?
        <router-link class="link" to="/register">Click Here!</router-link>
      </p>
      <p v-if="error" class="text-danger">Email or password are not valid data</p>
      <p v-if="invalid" class="text-danger">Please complete the form with your data</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      error: false,
      invalid: false,
    };
  },
  created() {
    this.getUsers()
  },
  methods: {
     ...mapActions('usersModule',['getUsers']),
      ...mapMutations('usersModule', ['logUser']),
    onSubmit(event) {
      event.preventDefault();
      if (this.email.length && this.password.length) {
        const user = this.getUsersData.find((data) => data.email === this.email);
        if(user === undefined){
          console.log('error')
          this.error = true;
          this.$swal({
            position: "top-end",
            icon: "error",
            title: `Invalid data`,
            showConfirmButton: false,
            timer: 1000,
          });
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }else{
             if (user.email === this.email && user.password === this.password) {
         this.logUser(user)
          this.$swal({
            position: "top-end",
            icon: "success",
            title: `Welcome back ${user.name}!`,
            showConfirmButton: false,
            timer: 1000,
          });
          this.$router.push("/home");
        } else {
          console.log('error')
          this.error = true;
          this.$swal({
            position: "top-end",
            icon: "error",
            title: `Invalid data`,
            showConfirmButton: false,
            timer: 1000,
          });
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
        }
       
      } else {
        this.invalid = true;
        setTimeout(() => {
          this.invalid = false;
        }, 2000);
      }
    },
  },
  computed: {
     ...mapGetters('usersModule',['getUsersData']),
    validation() {
      return this.user.length && this.password.length;
    },
  },
};
</script>

<!-- https://i.postimg.cc/t4ghZZQP/fond2o.png -->
<style scoped>
.log-container {
  background-image: url("https://i.postimg.cc/3wgJv96x/neko2.png");
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}
.link {
  color: #ff0101 !important;
}
</style>
