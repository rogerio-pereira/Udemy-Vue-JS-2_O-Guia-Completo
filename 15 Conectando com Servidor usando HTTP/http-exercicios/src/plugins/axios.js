import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-8e9a2.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})