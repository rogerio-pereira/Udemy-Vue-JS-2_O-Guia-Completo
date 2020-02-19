<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{'Esse filtro troca espaços por virgulas' | espacoPorVirgula}}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{'Pedro é legal' | contaPalavras}}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{espacoPorVirgulaComputed}}</p>
		<p>{{contaPalavrasComputed}}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{espacoPorVirgulaMixinComputed}}</p>
		<p>{{contaPalavrasMixinComputed}}</p>
	</div>
</template>

<script>
import palavrasMixin from './palavrasMixin'

export default {
	mixins: [
		palavrasMixin
	],
	data() {
		return {
			frase: 'Frase de exemplo'
		}
	},
	filters: {
		espacoPorVirgula(str) {
			return str.split(' ').join(',');
		}
	},
	computed: {
		espacoPorVirgulaComputed() {
			return this.frase.split(' ').join(',');
		},
		contaPalavrasComputed() {
			let palavras = this.frase.split(' ')

			for(let i=0; i<palavras.length; i++) {
				palavras[i] = palavras[i]+ " ("+palavras[i].length+") "
			}

			return palavras.join('')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
