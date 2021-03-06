
import Vue from 'vue';
import VueRouter from 'vue-router';
import FormDadosPessoais from './FormDadosPessoais'
import FormDadosServicos from './FormDadosServicos'
import FormRevisaoDados from './RevisaoDados'


Vue.use(VueRouter)
const route = new VueRouter ({
  mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: FormDadosPessoais
      },
      {
        path: '/dados-pessoais',
        name: 'dados-pessoais',
        component: FormDadosPessoais

      }
      ,
      {
        
        path: '/dados-servicos',
        name: 'dados-servicos',      
        component: FormDadosServicos
      },
      {
        
        path: '/revisao-dados',
        name: 'revisao-dados',      
        component: FormRevisaoDados
      }
    ]
  })
  export default route ;
  
  
