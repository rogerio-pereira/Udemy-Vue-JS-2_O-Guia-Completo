<template>
    <div class="usuario">
        <h2>Usuarios</h2>

        <hr>
        <button sucesso @click='irParaInicio'>Voltar</button>
        <router-view /> 
    </div>
</template>

<script>
    export default {
        methods: {
            irParaInicio() {
                // this.$router.push('/')
                this.$router.push({ path: '/' })
            }
        }
    }
</script>

<style scoped>

</style>