<template>
    <nav class='menu'>
        <ul>
            <!-- Exact diz que a rota deve ser exatamente igual a rota especificada -->
            <router-link to='/' tag='li' active-class='active' exact>
                <a>Inicio</a>
            </router-link>
            <!-- Não usamos o exact aqui pq uma rota /usuario/1/editar ficará ativo do mesmo modo -->
            <router-link to='/usuario/1' tag='li' active-class='active'>
                <a>Usuario1</a>
            </router-link>
            <router-link to='/usuario/2' tag='li' active-class='active'>
                <a>Usuario2</a>
            </router-link>
        </ul>
    </nav>
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