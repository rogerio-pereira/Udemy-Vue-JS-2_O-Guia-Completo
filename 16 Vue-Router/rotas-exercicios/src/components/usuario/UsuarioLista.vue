<template>
    <div class="usuario-list">
        <h3>
            Lista de Usuarios
        </h3>

        <ul class="lista">
            <router-link tag='li' to='/usuario/1' class="item-lista">Usuario 1</router-link>
            <router-link tag='li' to='/usuario/2' class="item-lista">Usuario 2</router-link>
            <router-link tag='li' to='/usuario/3' class="item-lista">Usuario 3</router-link>
            <router-link tag='li' to='/usuario/4' class="item-lista">Usuario 4</router-link>
        </ul>
    </div>
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