<template>
  <router-link class="nav-link active" to="/cart">
    <div class='d-flex align-items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff0000" class="bi bi-bag-fill ml-2" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
    </svg>
    <span class='counter' v-if='this.$store.state.total > 0'><small>{{this.$store.state.total}}</small></span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CartWidget',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter{
    background-color:#ffda80f5;
    color:#141414d4;
    width:1.05rem;
    height:1.05rem;
    border-radius:100%;
    margin-right:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    right:8px
  
  }
</style>
