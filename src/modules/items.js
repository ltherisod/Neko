import axios from 'axios'
export default{
    namespaced:true,
    state:{
        items:[],
        item:{},
        loading:true
    },
    getters:{
        products(state){
            return state.items;
        },
        product(state){
            return state.item
        },
        isLoading(state){
            return state.loading
        }
    },
    mutations:{
        setProducts(state, data){
            state.items=data;
        },
        setNewProduct(state, product){
            state.items.push(product)
        },
        setProduct(state, data){
            state.item=data
        },
        setIsLoading(state, data){
            state.loading=data
        }
    },
    actions:{
        getProducts: async function({commit}){
            try{
                commit('setIsLoading', true)
                const res = await axios.get("https://639f2d1e5eb8889197f64888.mockapi.io/products");
                const result=res.data
                commit('setProducts',result)
            }catch(error){
                console.log(error)
            }finally{
                commit('setIsLoading', false)
            }
          },
          postProduct: async function({commit}, product){
           try{
            commit('setIsLoading', true)
            const res = await axios.post('https://639f2d1e5eb8889197f64888.mockapi.io/products',{
                ...product
              })
              const result = res.data
              commit('setNewProduct', result)
           }catch(error){
            console.log(error)
           }finally{
            commit('setIsLoading', false)
           }
          },
          editProduct: async function ({commit}, product){
            try{
                commit('setIsLoading', true)
                const res = await axios.put(`https://639f2d1e5eb8889197f64888.mockapi.io/products/${product.id}`,{...product})
                const result = res.data
                commit('setProduct', result)
            }catch(error){
                console.log(error)
            }finally{
                commit('setIsLoading', false)
            }
          },
          getOneProduct: async function({commit},id){
            try{
                commit('setIsLoading', true)
                const res = await  axios.get(`https://639f2d1e5eb8889197f64888.mockapi.io/products/${id}`)
                const result = res.data
                commit('setProduct', result)
            }catch(error){
                console.log(error)
            }finally{
                commit('setIsLoading', false)
            }
          },
          deleteOneProduct:async function ({commit}, id){
            try{
                commit('setIsLoading', true)
                const res = await   axios.delete(`https://639f2d1e5eb8889197f64888.mockapi.io/products/${id}`)
                const result = res.data
                commit('setProduct', result)
            }catch(error){
                console.log(error)
            }finally{
                commit('setIsLoading', false)
            }
          }
    }
}