<template>
  <div class="home">
    <div class='add'>
      <h2>Neko Project</h2>
      <div class='text-container'>
        <p>Neko is a study proyect developed with Vue 2 JS.</p>
        <p>Studied in CoderHouse, the final project had to be a food ecommerce, so as a cat and asian food lover I designed Neko.</p>
        <p>An online restaurant, in which you can buy delicious foods and be accompanied by our main character Neko, a lucky chubby cat in all of its versions.</p>
        <p>The language chosen was english for my personal practice in writing.<span class='italic-text'>Still practicing, my english it's a little rusty.</span></p>
        <p>It's a single page application with two types of users (admin and regular).</p>
        <p>The chosen functionalities are simple for the first approach in vue.</p>
        <p>I hope you enjoy my fist vue app.</p>
        <p>Greetings, Laura.</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutView",
  components: {},
};
</script>
<style scoped>
.home {
  background-image: url("https://i.postimg.cc/QM6P6P0G/marcelacustom.png");
  background-size: cover;
  width: 100%;
  min-height: 86vh;
}
h2{
    font-weight:900;
    font-size:2.5rem;
    letter-spacing:1px;
    padding-top:.43rem
  }
  .add{
    padding:2rem;
  }
  p{
    font-weight:400;
    letter-spacing:1.5px;
    font-size:1.3rem;
    margin-bottom:1em;
    text-align:justify;
    color:#343739;
  }
  .text-container{
    width:50%;
    padding:1rem;
  }
  .italic-text{
     font-weight:300;
    font-style:italic;
    font-family: 'Poppins', sans-serif;
  }
</style>
