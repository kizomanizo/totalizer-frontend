
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

require('@/store/reports')

axios.defaults.baseURL = process.env.VUE_APP_BASEURL || 'http://myjson.dit.upm.es/api/bins'

Vue.config.productionTip = false

store.dispatch('reports/getHello', localStorage.getItem('payload')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})