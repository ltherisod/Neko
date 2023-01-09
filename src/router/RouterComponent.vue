<template lang="">
  <div> <div v-if='getUser'> <NavbarComponent /> </div> <router-view /> </div>
</template>
<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import { mapGetters} from 'vuex'
export default {
  name: "RouterComponent",
  components: {
    NavbarComponent,
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
