<template lang="">
  <div> <div v-if='token'> <NavbarComponent /> </div> <router-view /> </div>
</template>
<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  name: "RouterComponent",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      token: "",
    };
  },
  created() {
    if (localStorage.getItem("skywalker")) {
      let user = JSON.parse(localStorage.getItem("skywalker"));
      this.token = user.id;
      console.log(this.token);
    }
  },
  beforeUpdate() {
    console.log("Before update!");
    if (localStorage.getItem("skywalker")) {
      let user = JSON.parse(localStorage.getItem("skywalker"));
      this.token = user.id;
    }
  },
};
</script>
<style lang=""></style>
