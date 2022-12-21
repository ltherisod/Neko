import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
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
    }
  },
  modules: {
  }
})
