import axios from 'axios'
export default{
    namespaced:true,
    state:{
        users:[],
        user:null
    },
    getters:{
        getUsersData(state){
            return state.users;
          },
          getUser(state){
            return state.user
          }
    },
    mutations:{
        setUsers(state, data){
            state.users=data;
          },
          addUser(state, user){
            state.users.push(user)
          },
          logUser(state, data){
            state.user=data
          },
          logOutUser(state){
            state.user=null
          }
    },
    actions:{
        getUsers: async function({commit}){
            const res = await axios("https://639f2d1e5eb8889197f64888.mockapi.io/users");
            const result=res.data
            commit('setUsers',result)
          },
          postUsers : async function({commit},user){
            const res = await  axios.post("https://639f2d1e5eb8889197f64888.mockapi.io/users",{...user})
            commit('addUser',res.data)
            commit('logUser', res.data) 
          }
    }
}