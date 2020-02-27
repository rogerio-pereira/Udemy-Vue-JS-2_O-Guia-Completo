<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    Nome
                    <small>Preço: Preço</small>
                </strong>
            </v-card-title>
        </v-card>

        <v-card>
            <v-container fill-height>
                <v-text-field label='Quantidade' type='number' />
                <v-button class="green darken-3 white--text">Comprar</v-button>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>