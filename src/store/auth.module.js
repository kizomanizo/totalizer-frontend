import axios from 'axios'
import CommitHelper from '../helpers/commits.helper'

export default ({
    namespaced: true,

    state: {
        // Initiate stored objects
        token: null,
        alert: null,
        message: null,
        user: null,
    },

    mutations: {
        // Set your object changes here
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_ALERT(state, alert) {
            state.alert = alert
        },
        SET_MESSAGE(state, message) {
            state.message = message
        },
        SET_USER(state, user) {
            state.user = user
        }
    },

    getters: {
        // authenticated (state) {
        //     return state.token && state.user
        // },
        // alert (state) {
        //     return state.alert
        // },
        // message (state) {
        //     return state.message
        // },
        // user (state) {
        //     return state.user
        // }
    },

    actions: {
        async signIn (credentials) {
            let response = await axios.post('/users/login/', credentials)
            localStorage.removeItem('token') 
            await CommitHelper.auth(response.data.payload.access, response.data.payload.id, false, 'Login successful')
        },
    
        async signOut () {
            localStorage.removeItem('token')
            await CommitHelper.auth(null, null, true, 'Signed out!')
        }
    },
})
