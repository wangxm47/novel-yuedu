import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      mode: 'sun',
      edit: false
  },
  mutations: {
      changeMode: function(state){
          if(state.mode == "sun"){
              state.mode = "night";
          } else{
              state.mode = "sun"
          }
      },
      setMode: function(state,mode){
          if(mode!="sun"&&mode!="night"){
              state.mode = "sun";
          } else {
              state.mode = mode;
          }
      },
      editBook: function(state){
          if(!state.edit){
              state.edit = true;
          }
      },
      cancelEdit: function(state){
          if(state.edit){
              state.edit = false;
          }
      }
  },
  actions: {
  },
  modules: {
  }
})
