<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //     }
    // },

    //Mapeia o metodo velorTotal, nesse caso a propriedade computada vai chamar valorTotal
    // computed: mapGetters(['valorTotal'])

    //Mapeia o método valorTotal para uma propriedade computada chamada total
    computed: mapGetters('carrinho', { total: 'valorTotal'})
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
