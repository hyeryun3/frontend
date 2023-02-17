import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        token: null,
    },
    getters: {
        isLogin(state){
            return state.token == null? false : true;
        }
    },
    mutations: {
        // commit으로 부름
        setToken(state, _token){
            state.token = _token;
        }
    },
    actions: {
        // dispatch로 부름
        setToken:({commit}, _token) => {
            console.log(_token)
            commit('setToken',_token);

        }
        

    }
})

// 뷰에서 dispatch를 사용해서 actions를 호출,
// actions 내부에서 mutations 호출.