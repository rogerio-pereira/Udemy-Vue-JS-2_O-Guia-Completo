<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		
		<p>{{usuarioLogado}}</p>
		<p>{{cpf | cpf | inverter}}</p> <!-- | serve para aplicar o filtro, o primeiro parametro é o valor o segundo o nome do filtro -->
		<input type='text' :value='cpf | cpf | inverter'>
		<!-- v-model não suporta filtros -->

		<hr>
		<frutas />

		<hr>

		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
			</ul>

			<input v-model='fruta' @keydown.enter="add">
		</div>
	</div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'
import Frutas from '@/Frutas'

export default {
	components: {
		Frutas
	},
	mixins: [
		frutasMixin,
		usuarioMixin
	],
	filters: {
		cpf(valor) {
			const arr = valor.split('');
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('');
		}
	},
	data() {
		return {
			cpf: '12345678925',
            frutas: ['abacate']
		}
	},
    created() {
        console.log('created - app')
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

input {
	font-size: 2.5rem;
}
</style>
