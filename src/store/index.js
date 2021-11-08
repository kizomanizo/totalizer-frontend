
import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
import { content } from './content.module'
import tokenPlugin from './bearer.subscriber'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 
    },
    mutations: {
        // 
    },
    actions: {
        // 
    },
    modules: {
        // List all your store objects here
        auth,
        content
    },
    plugins: {
        tokenPlugin
    }
})