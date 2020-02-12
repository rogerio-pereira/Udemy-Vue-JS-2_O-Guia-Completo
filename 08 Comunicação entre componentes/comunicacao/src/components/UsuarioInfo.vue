<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario: <strong>{{inverterNome()}}</strong></p>
        <p>Idade do usário: <strong>{{idade}}</strong></p>
        <button @click='reiniciarNome()'>Reiniciar nome</button>
        <button @click='reiniciarFn()'>Reiniciar nome (callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        //nome: String //Validação somente de string
        nome: {
            type: String,
            //required: true,
            default: 'Anônimo',
            /*default: function() {
                return Array(10).fill(0).join(',');
            }*/
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nome
            //this.nome = 'Pedro';
            /*this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
            })*/
            this.$emit('nomeMudou', 'Pedro')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
