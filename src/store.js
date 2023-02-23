import axios from 'axios';
import Vuex from "vuex";


const headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
    'key': 'aHllcnl1bmh5ZXJ5dW5oeWVyeXVuMw=='
}
export default new Vuex.Store({
    state: {
        token: null,
        // store.state.token으로 접근함.
    },
    getters: {
        isLogin(state){
            return state.token == null? false : true;
        }
    },
    mutations: {
        // commit으로 부름
        SET_USER_DATA(state, data){
            console.log('mutations', data)
            state.token = data;
        }
    },
    actions: {
        // dispatch로 부름
        getToken({commit}, credentials){
            axios.defaults.headers.post=null
            return axios
            .post('/api/create/token',credentials, {headers})
            .then(({data})=>{
                console.log('data',data)
                commit('SET_USER_DATA',data)
            })
        }
    }
})

// 뷰에서 dispatch를 사용해서 actions를 호출,
// actions 내부에서 mutations 호출.