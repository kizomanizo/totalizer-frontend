import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Total from '../views/Total.vue'
import Other from '../views/Other.vue'
import Errorer from '../views/Error.vue'

Vue.use(VueRouter)
    const routes = [
    {
        path: '/hello',
        name: 'hello',
        component: Hello
    },

    {
        path: '/total',
        name: 'total',
        component: Total,
    },

    {
        path: '/other',
        name: 'other',
        component: Other,
    },

    {
        path: '/error',
        name: 'error',
        component: Errorer,
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router