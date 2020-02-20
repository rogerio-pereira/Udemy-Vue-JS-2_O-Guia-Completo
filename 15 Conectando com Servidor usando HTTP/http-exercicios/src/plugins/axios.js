import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-8e9a2.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios

        //Criação de uma instancia do axios, para criar mais de uma basta duplicar essas linhas, mudar o nome da variavel $http,
        //para por exemplo $api, e mudar a baseURL
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-8e9a2.firebaseio.com/',
            headers: {
                //'Authorization': 'abc123',
                get: {
                    'Accepts': 'application/json'
                }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            // if(config.method == 'post') {
            //     config.method = 'put'
            // }
            return config
        }, error => Promise.reject(error));

        Vue.prototype.$http.interceptors.response.use(response => {
            // const array = []
            // for(let chave in response.data) {
            //     array.push({
            //         id: chave,
            //         ...response.data[chave] // ... pega todos os elementos internos do array
            //     })
            // }

            // response.data = array
            return response
        }, error => Promise.reject(error));
    }
})