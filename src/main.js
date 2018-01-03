import Vue from 'vue'
import App from './APP'
let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
Vue.use({vm})
