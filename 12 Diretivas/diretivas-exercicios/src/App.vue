<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>

		<p v-text="'Usando diretivas <strong>v-text</strong>'"></p>
		<p v-html="'Usando diretivas <strong>v-text</strong>'"></p> <!--Cuidado com XSS-->
		<hr>

		<p v-destaque:fundo="'red'">Usando diretiva personalizada</p>
		<p v-destaque="cor">Usando diretiva personalizada</p>

		<!--
			Estrutura de uma diretiva
			<p v-teste:argumento.modificador1.modificador2.modificador3="'valor'"></p>
		-->
	</div>
</template>

<script>
export default {
	data () {
		return {
			cor: 'blue'
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
