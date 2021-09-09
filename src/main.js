import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//IMPORTING SlOTS
// import TheMaibbtn from './components/slots/TheMainbtn.vue'

Vue.config.productionTip = false

const vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// vm.component('MainBtn',TheMaibbtn)
