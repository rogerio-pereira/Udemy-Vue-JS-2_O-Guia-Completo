<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>

		<p v-text="'Usando diretivas <strong>v-text</strong>'"></p>
		<p v-html="'Usando diretivas <strong>v-text</strong>'"></p> <!--Cuidado com XSS-->
		<hr>

		<p v-destaque:fundo.atrasar="'red'">Usando diretiva personalizada</p>
		<p v-destaque.atrasar="cor">Usando diretiva personalizada</p>

		<!--
			Estrutura de uma diretiva
			<p v-teste:argumento.modificador1.modificador2.modificador3="'valor'"></p>
		-->
		<hr>

		<p v-destaque-local:fundo.atrasar.alternar="'red'">Usando diretiva personalizada</p>
		<p v-destaque-local.atrasar="cor">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo')
						el.style.backgroundColor = cor;
					else
						el.style.color = cor;
				}

				let atraso = 0;
				if(binding.modifiers['atrasar'])
					atraso = 3000;

				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1;

				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1 //Se for cor 1 recebe cor 2, senão recebe cor 1
							aplicarCor(corAtual)
						}, 1000)
					} 
					else 
						aplicarCor(binding.value)
				}, atraso);
			}
		}
	},
	data () {
		return {
			cor: 'green'
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
