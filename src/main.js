import Vue from 'vue'
//Eklenen satır.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

//Eklenen satır.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

//Eklenen satır.
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
