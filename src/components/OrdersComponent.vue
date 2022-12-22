<template lang="">
    <div> 
        <h2>Our Orders 🥡</h2>
         <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Date</th>
                <th scope="col">Buyer</th>
                <th scope="col">Order</th>
                <th scope="col">Delivered</th>
                <th scope="col">Change State</th>
            </tr>
        </thead>
    <tbody>
    <tr v-for="prod in items" :key="prod.id">
        <td>{{prod.id}}</td>
        <td>{{prod.date}}</td>
        <td>{{prod.user?.name}}</td>
        <td>
            <ul>
                <li v-for='(order, i) in prod.cart' :key='i'>{{order.name}}</li>
            </ul>
        </td>
        <td v-if='prod.state'>✔️</td>
        <td v-else>❌</td>
        <td><button class="btn btn-dark" @click='changeState(prod)'>🗘</button></td>
    </tr>
    </tbody>
  </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'OrdersComponent',
  data(){
    return{
        items:''
    }
  },
 created() {
    axios
      .get("https://639f2d1e5eb8889197f64888.mockapi.io/orders")
      .then((data) => (this.items = data.data))
      .catch((error) => console.log(error));
  },
  methods:{
     async changeState(item) {
             const product={
                    ...item,
                    state:true
              }
            const res = await axios.put(`https://639f2d1e5eb8889197f64888.mockapi.io/orders/${product.id}`,{...product})
           
             this.$swal({
                position: 'top-end',
                icon: 'success',
                title: `Order :${res.data.id} was updated!`,
                showConfirmButton: false,
                timer: 1000
                })
           
        
        }
      
      
    }
};

</script>
<style lang="">
</style>
