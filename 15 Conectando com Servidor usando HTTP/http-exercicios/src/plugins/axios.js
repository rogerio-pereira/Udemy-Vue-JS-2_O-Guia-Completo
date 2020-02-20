import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-8e9a2.firebaseio.com/'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios

        //Criação de uma instancia do axios, para criar mais de uma basta duplicar essas linhas, mudar o nome da variavel $http,
        //para por exemplo $api, e mudar a baseURL
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-8e9a2.firebaseio.com/'
        })
    }
})