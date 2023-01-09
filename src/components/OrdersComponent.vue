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
    <tr v-for="prod in allOrders" :key="prod.id">
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
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'OrdersComponent',
 created() {
    this.getOrders()
  },
  methods:{
    ...mapActions('ordersModule',['getOrders', 'changeState']),
     async changeState(item) {
             const product={
                    ...item,
                    state:true
              }
            this.changeState(product)
           
             this.$swal({
                position: 'top-end',
                icon: 'success',
                title: `Order :${this.oneOrder.id} was updated!`,
                showConfirmButton: false,
                timer: 1000
                })
           
        
        }
      
      
    },
     computed:{
     ...mapGetters('ordersModule',['allOrders', 'loading', 'oneOrder']),
  }
};

</script>
<style lang="">
</style>
