new Vue({
    el: '#desafio',
    data: {
        nome: 'Rogerio Pereira',
        idade: '28',
        imageUrl: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        aleatorio (){
            return Math.random();
        },
        alteraNome(event){
            this.nome = event.target.value
        }
    }
})