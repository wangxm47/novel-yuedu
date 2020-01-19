import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      mode: 'sun'
  },
  mutations: {
      changeMode: function(state){
          if(state.mode == "sun"){
              state.mode = "night";
          } else{
              state.mode = "sun"
          }
      }
  },
  actions: {
  },
  modules: {
  }
})
