export default {
	data() {
		return {
			fraseMixin: 'Frase de exemplo Mixin'
		}
	},
	computed: {
		espacoPorVirgulaMixinComputed() {
			return this.fraseMixin.split(' ').join(',');
		},
		contaPalavrasMixinComputed() {
			let palavras = this.fraseMixin.split(' ')

			for(let i=0; i<palavras.length; i++) {
				palavras[i] = palavras[i]+ " ("+palavras[i].length+") "
			}

			return palavras.join('')
		}
	}
}