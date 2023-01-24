<template >
    <div class='cat-container' >
        <img  src='../assets/loaderneo.gif' alt='loader'/>
    </div>
</template>
<script>
export default {
    name:'LoadingCat'
}
</script>
<style scoped>
    .cat-container{
        width: 100%;
        min-height: 83vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    img{
        align-self:center
    }
    p{
        color:#55c2be
    }
</style>