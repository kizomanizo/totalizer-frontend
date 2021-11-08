class CommitHelper {
    async auth ({ commit }, token, user, alert, message) {
        try {
            commit('SET_TOKEN', token)
            commit('SET_USER', user)
            commit('SET_ALERT', alert)
            commit('SET_MESSAGE', message)
        } catch (error) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
            commit('SET_ALERT', true)
            commit('SET_MESSAGE', error.message)
        }
    }
    
    async content ({ commit }, title, content) {
        try {
            commit('SET_TITLE', title)
            commit('SET_CONTENT', content)
        } catch (error) {
            commit('SET_TITLE', 'Error')
            commit('SET_CONTENT', error.message)
        }
    }
}

export default new CommitHelper();