<template>
    <v-layout row wrap>
        <stock v-for='stock in stocks' :key='stock.id' />
    </v-layout>
</template>

<script>
    import Stock from './Stock'
    export default {
        components: {
            Stock
        },
        data() {
            return {
                stocks: [
                    {id: 1, name: 'BMW', preco: 110},
                    {id: 2, name: 'Google', preco: 200},
                    {id: 3, name: 'Apple', preco: 280},
                    {id: 4, name: 'Twitter', preco: 83},
                ]
            }
        }
    }
</script>

<style scoped>

</style>