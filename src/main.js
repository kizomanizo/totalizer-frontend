
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuex from 'vuex'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

axios.defaults.baseURL = process.env.VUE_APP_LOCALURL

Vue.config.productionTip = false

// store.dispatch('auth/login', localStorage.getItem('token')).then(() => {
//     new Vue({
//         router,
//         store,
//         render: h => h(App)
//     }).$mount('#app')
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')