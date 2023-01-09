<template>
  <div class="log-container p-5 d-flex justify-content-between align-items-start">
    <div></div>
    <div style="width: 35%">
      <h2>Welcome to Neko!</h2>
      <h5>Let's begin your asian adventure!</h5>
      <p>Please complete the following form</p>
      <div class="d-flex flex-column align-items-strech">
        <b-form @submit="onSubmit">
          <div class="my-4">
            <b-form-input
              v-model="name"
              id="name"
              type="text"
              placeholder="Complete Name"
            ></b-form-input>
            <small class="text-danger position-absolute" v-if="error.name.length !== 0">{{
              error.name
            }}</small>
          </div>
          <div class="my-4">
            <b-form-input
              v-model="email"
              id="email"
              type="email"
              placeholder="E-mail"
            ></b-form-input>
            <small
              class="text-danger position-absolute"
              v-if="error.email.length !== 0"
              >{{ error.email }}</small
            >
          </div>
          <div class="my-4">
            <b-form-input
              v-model="img"
              id="img"
              type="url"
              placeholder="Profile picture url"
            ></b-form-input>
            <small class="text-danger position-absolute" v-if="error.img.length !== 0">{{
              error.img
            }}</small>
          </div>
          <div class="my-4">
            <b-form-input
              v-model="password"
              id="pass"
              type="password"
              placeholder="Password"
            ></b-form-input>
            <small
              class="text-danger position-absolute"
              v-if="error.password.length !== 0"
              >{{ error.password }}</small
            >
          </div>
          <div class="my-4">
            <b-form-input
              v-model="secondpassword"
              id="secondpass"
              type="password"
              placeholder="Please repeat your password"
            ></b-form-input>
            <small
              class="text-danger position-absolute"
              v-if="error.secondpass.length !== 0"
              >{{ error.secondpass }}</small
            >
          </div>
          <div class="my-4 d-flex">
            <b-form-checkbox
              id="checkbox-1"
              v-model="admin"
              name="checkbox-1"
              value='true'
              unchecked-value="false"
            >
            </b-form-checkbox>
            <label class="mx-2" for="checkbox-1">Check for admin user</label>
          </div>
          <div class="d-flex justify-content-end">
            <b-button class="my-3 align-self-end" type="submit" variant="dark"
              >Submit</b-button
            >
          </div>
        </b-form>
        <p class="align-self-end">
          All ready have an account?
          <router-link class="link" to="/">Click Here!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
  name: "RegisterUser",
  data() {
    return {
      name: "",
      email: "",
      img: "",
      password: "",
      secondpassword: "",
      admin: false,
      error: {
        name: "",
        password: "",
        secondpass: "",
        email: "",
        img: "",
      },
    };
  },
  methods: {
    ...mapActions('usersModule',['postUsers']),
    ...mapMutations('usersModule', ['logUser']),
    async onSubmit(event) {
      event.preventDefault();
      if (
        this.name.length > 6 &&
        this.email.length &&
        this.password.length > 8 &&
        this.password === this.secondpassword
      ) {
        const user = {
          name: this.name,
          email: this.email,
          img: this.img,
          password: this.password,
          admin: this.admin,
        };
        this.postUsers(user)
        this.logUser(user)
        Object.assign(this.$data, this.$options.data());
        this.$swal({
          position: "top-end",
          icon: "success",
          title: `Welcome to Neko ${user.name}!`,
          showConfirmButton: false,
          timer: 1000,
        });
        this.$router.push("/home");
      } else {
        if (!this.name) {
          {
            this.error.name = "Please complete with your full name";
          }
        }
        if (!this.email) {
          {
            this.error.email = "Please complete a valid email";
          }
        }
        if (!this.img) {
          {
            this.error.img = "Please complete a valid image url";
          }
        }
        if (!this.password.length) {
          {
            this.error.password = "Your password must be completed";
          }
        }
        if (this.password && this.password.length < 8) {
          {
            this.error.password = "Your password is too short";
          }
        }
        if (this.password !== this.secondpassword) {
          {
            this.error.secondpass = "Your passwords doesn't match";
          }
        }
      }
    },
  },
  computed: {},
};
</script>

<!--https://i.postimg.cc/wv0dTsrw/fondo-Recuperado.png-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log-container {
  background-image: url("https://i.postimg.cc/8cckJGMh/neko.png");
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}
.link {
  color: #ff0101 !important;
}
</style>
