import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaPalavras', function(str){
	let palavras = str.split(' ')

	for(let i=0; i<palavras.length; i++) {
		palavras[i] = palavras[i]+ " ("+palavras[i].length+") "
	}

	return palavras.join('')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
