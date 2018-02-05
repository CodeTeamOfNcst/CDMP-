import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      authUser: null
    },
    mutations,
    actions : {
        nuxtServerInit({ commit }, { req }) {
            if(req.headers.cookie && req.headers.cookie.indexOf('authUser') > -1){
                commit('SET_USER', req.headers.cookie.split('=')[1] );
            }else{
                commit('SET_USER', null );
            }      
        }
    }
  })
}

export default createStore