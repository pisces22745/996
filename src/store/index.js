import Vue from 'vue'
import Vuex from 'vuex'
import createPersisted from 'vuex-persistedstate'
import login from './modules/login'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        login
    },
    plugins: [createPersisted({
        key: 'store',
        paths: ['login']
    })]
})

export default store
