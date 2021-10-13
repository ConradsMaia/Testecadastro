import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    dadosPessoais: []
    },
    mutations: {
        gravandoInfoNoState: (state, novoValor) => state.dadosPessoais = novoValor
    },
    actions: {
        gravandoInfo ({commit}, payload) {
        commit('gravandoInfoNoState', payload)
      },
      
    },
    getters: {
        lendoInformacao: ({ dadosPessoais }) => dadosPessoais,
    }
  })

export default store

