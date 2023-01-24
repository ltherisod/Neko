<template lang="">
  <div> <div v-if='getUser'> <NavbarComponent /> </div> <router-view /> <div v-if='getUser'> <FooterComponent /> </div></div>
</template>
<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { mapGetters} from 'vuex'
export default {
  name: "RouterComponent",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
     
    };
  },
  created() {
    this.getUser
  },
  computed:{
     ...mapGetters('usersModule',['getUser']),
  }
 

};
</script>
<style lang=""></style>
