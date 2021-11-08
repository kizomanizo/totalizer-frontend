import axios from 'axios'
import CommitHelper from '../helpers/commits.helper'

export default ({
    namespaced: true,

    state: {
        // Initiate stored objects
        title: null,
        content: null
    },

    mutations: {
        // Set your object changes here
        SET_TITLE(state, title) {
            state.title = title
        },
        SET_CONTENT(state, content) {
            state.content = content
        }
    },

    getters: {
        // title (state) {
        //     return state.title
        // },
        // content (state) {
        //     return state.content
        // }

    },

    actions: {
        async getHome () {
            let response = await axios.get('/users/goals/')
            await CommitHelper.content(response.data.payload, 'Home Page')
        },
        async getData () {
            let response = await axios.get('/users/data/')
            await CommitHelper.content(response.data.payload, 'Data Page')
        },
    },
})
