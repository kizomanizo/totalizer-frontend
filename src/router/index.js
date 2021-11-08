import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import Home from '../views/Home.vue'
import Data from '../views/Data.vue'

Vue.use(VueRouter)
    const routes = [

    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    
    {
        path: '/home',
        name: 'home',
        component: Home
    },

    {
        path: '/data',
        name: 'data',
        component: Data
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');
  
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
})

export default router