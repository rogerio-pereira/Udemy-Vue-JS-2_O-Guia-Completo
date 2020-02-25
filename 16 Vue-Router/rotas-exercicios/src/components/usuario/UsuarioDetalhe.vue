<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>

        <p><strong>Codigo:</strong> {{id}}</p>
        <!-- <router-link tag='button' :to="`/usuario/${id}/editar`" primario> -->
        <router-link 
            tag='button' 
            :to="{
                name: 'editarUsuario', 
                params: {id}, 
                query: {completo: true, lingua: 'pt-br', nome: 'Rogerio'},
                hash: '#rodape'
            }" 
            primario
        >
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        props: [
            'id'
        ],
        beforeRouteEnter (to, from, next) {
            //console.log(this.id) //Vai gerar um erro pq nesse momento o componente ainda nao foi instanciado
            // Forma correta de acessar as propriedades do componente, usando uma função callback
            // next(vm => {
            //     console.log(vm.id)
            // })
            
            // const autenticado = true
            // autenticado ? next() : next(false)

            console.log('dentro do componete usuario detalhe')
            next()
        }
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     $route(to, from) {
        //         this.id = to.params.id
        //     }
        // },
    }
</script>

<style scoped>

</style>