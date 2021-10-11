import Vue from 'vue'
import router from './routers.js'
import App from './App.vue'
// import  Rev from './Rev.vue'
// import botao from './BotãoH.vue';
import bootstrap from './bootstrap'
import VueMask from 'v-mask';

import store from '/store';


Vue.use(VueMask);
Vue.config.productionTip = false
Vue.use(bootstrap);
Vue.use(App);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')



