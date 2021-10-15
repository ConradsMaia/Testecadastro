import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      dadosPessoais: {
        nome: "",
        cpf: "",
        celular: "",
        estado: "",
        cidade: "",
        parcela: '',
        especialidade: '',
        preco: ''
      }
    },
    mutations: {
        gravandoInfoNoState: (state, novoValor) => {
          Object.assign(state.dadosPessoais, novoValor)
        }
    },
    actions: {
        gravandoInfo ({ commit }, payload) {
          commit('gravandoInfoNoState', payload)
      },
    },
    getters: {
        lendoInformacao: ({ dadosPessoais }) => dadosPessoais,
    }
  })

export default store

