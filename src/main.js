import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import "./style/common.scss";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
