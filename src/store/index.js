import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    safelyStoredNumber: 0
  },
  getters: {
    safelyStoredNumber: state => state.safelyStoredNumber,
    storedNumberMatches(state) {
      return matchNumber => {
        return state.safelyStoredNumber === matchNumber;
      }
    }
    // Shorthand:
    // storedNumberMatches: state => matchNumber => state.safelyStoredNumbers === matchNumber
  },
  mutations: {
    incrementStoredNumber(state) {
      state.safelyStoredNumber++;
    },
    setStoredNumber(state, newNumber) {
      // newNumber is the payload passed in.
      state.safelyStoredNumber = newNumber;
    }
  },
  actions: {
    increment ({ commit }) {
        commit('incrementStoredNumber')
    },
    actionA ({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('incrementStoredNumber')
                resolve()
            }, 1000)
        })
    },
    async actionB ({ dispatch, commit }) {
        await dispatch('actionA') // wait for `actionA` to finish
        alert('End of actionB')
        // commit('gotOtherData', await getOtherData())
    }
  }
});