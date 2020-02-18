<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
					<!--<rotulo nome='Nome'>
						<input type='text' v-model='nome'>
					</rotulo>
					
					<rotulo nome='Sobrenome'>
						<input type='text' v-model='sobrenome'>
					</rotulo>-->

					<nome-completo v-model='nomeCompleto' />
					
					<rotulo nome='Email'>
						<input type='email' v-model='email'>
					</rotulo>
					
					<rotulo nome='Senha'>
						<input type='password' v-model='password'>
					</rotulo>

					<rotulo nome='Armazenar dados'>
						<select v-model='armazenarDados'>
							<option value='true'>Sim</option>
							<option value='false'>Não</option>
						</select>
					</rotulo>

					<button @click.prevent='enviado = true'>
						Enviar
					</button>
					<!-- Exercicio 03 -->
					<!-- Crie um componente personalizado NomeCompleto -->
					<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				
				<rotulo nome='Nome'>
					{{nomeCompleto.nome}}
				</rotulo>
				
				<rotulo nome='Sobrenome'>
					{{nomeCompleto.sobrenome}}
				</rotulo>
				
				<rotulo nome='Email'>
					{{email}}
				</rotulo>

				<rotulo nome='Senha'>
					{{password}}
				</rotulo>

				<rotulo nome='Armazenar dados'>
					{{armazenarDados}}
				</rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			nomeCompleto: {
				nome: '',
				sobrenome: '',
			},
			email: '',
			password: '',
			armazenarDados: true,
			enviado: false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
