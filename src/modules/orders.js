import axios from 'axios'
export default{
    namespaced:true,
    state:{
        orders:[],
        order:{},
        loader:true
    },
    getters:{
        allOrders(state){
            return state.orders;
        },
        oneOrder(state){
            return state.order;
        },
        loading(state){
            return state.loader
        }
    },
    mutations:{
        setOrders(state, data){
            state.orders=data;
        },
        setLoading(state, data){
            state.loader=data
        },
        setOrder(state, data){
            state.order = data
        }
    },
    actions:{
        getOrders: async function({commit}){
            try{
                commit('setLoading', true)
                const res = await axios.get("https://639f2d1e5eb8889197f64888.mockapi.io/orders")
                const result = res.data
                commit('setOrders', result)
            }catch(error){
                console.log(error)
            }finally{
                commit('setLoading', false)
            }
            
        },
        changeState: async function({commit}, product){
            try{
                commit('setLoading', true)
                const res = await axios.put(`https://639f2d1e5eb8889197f64888.mockapi.io/orders/${product.id}`,{...product})
                const result = res.data
                commit('setOrder', result)
            }catch(error){
                console.log(error)
            }finally{
                commit('setLoading', false)
            }
        }
    }
}