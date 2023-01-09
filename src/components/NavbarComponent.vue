<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand"  to="/home">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Vegetarian</a></li>
              <li><a class="dropdown-item" href="#">Sushi</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Woks</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex justify-content-around align-items-center" style="width: 15%">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div
                class="user-profile"
                v-bind:style="{ 'background-image': 'url(' + getUser.img + ')' }"
              ></div>
            </a>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" @click="logOut">Log out</button></li>
            </ul>
          </li>
          <CartWidget />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CartWidget from "./widgets/CartWidget.vue";
import { mapGetters, mapMutations} from 'vuex'
export default {
  name: "NavbarComponent",
  components: {
    CartWidget,
  },
  data() {
    return {
      isAdmin: false,
    };
  },
  created() {
    console.log(this.getUser);
    if (this.getUser.admin === 'true') {
      this.isAdmin=true
    }
  },
  methods: {
      ...mapMutations('usersModule',['logOutUser']),
    logOut() {
      this.logOutUser()
      this.$router.push("/");
    },
  },
  computed:{
      ...mapGetters('usersModule',['getUser']),
  }
};
</script>
<style scoped>
nav a.router-link-exact-active {
  color: #ff0101 !important;
}
img {
  width: 10rem;
}
.user-profile {
  background-position: 50%;
  width: 2em;
  height: 2em;
  background-size: cover;
  border-radius: 100%;
}
</style>
