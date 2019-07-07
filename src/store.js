import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    poc: {},
    basket: []
  },
  mutations: {
    setPoc(state, poc){
      state.poc = poc
    },
    addToBasket(state, item){
      state.basket.push(item)
    },
    removeFromBasket(state, item){
      for(let [index, value] of state.basket.entries()){
        if (value.title == item.title){
          state.basket.splice(index, 1)
          break
        }
      }
    }
  },
  actions: {

  },
  getters: {
    poc: (state) => state.poc,
    basket: (state) => state.basket
  }
})
