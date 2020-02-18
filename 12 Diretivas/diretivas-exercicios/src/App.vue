<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>

		<p v-text="'Usando diretivas <strong>v-text</strong>'"></p>
		<p v-html="'Usando diretivas <strong>v-text</strong>'"></p> <!--Cuidado com XSS-->
		<hr>

		<p v-destaque="'red'">Usando diretiva personalizada</p>
		<p v-destaque="cor">Usando diretiva personalizada</p>
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
