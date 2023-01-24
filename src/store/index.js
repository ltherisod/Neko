import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from '@/modules/users'
import itemsModule from '@/modules/items'
import ordersModule from '@/modules/orders'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    total:0,
  },
  getters: {
   
  },
  mutations: {
    addItem(state,item){
      let isInCart = state.cart.some((prod)=> prod.id === item.id)
      if(isInCart){
          let updatedCart = state.cart.map((prod)=>{
            if(prod.id === item.id){
              return{...item, quantity: prod.quantity + item.quantity}
            }
          })
          state.cart=updatedCart
      }else{
        state.cart.push(item)
      }
    },
    removeItem(state, index) {
      state.cart.splice(index,1)         
  },
  deleteCart(state) {
    state.cart = []           
  },
  cartQuantity(state){
   let totalQuantity =  state.cart.reduce((acc, prod)=> acc + prod.quantity,0)
   console.log(totalQuantity)
   state.total = totalQuantity
  }  
  },
  actions: {
    addToCart({commit},item){
      commit('addItem', item)
    },
    removeOneItem({commit}, index){
      commit('removeItem', index)
    },
    clear({commit}){
      commit('deleteCart')
    },
    quantity({commit}){
      commit('cartQuantity')
    }
  },
  modules: {
    usersModule,
    itemsModule,
    ordersModule
  }
})
