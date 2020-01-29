new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta()
        {
            alert('clicou');
        },
        getValue(evt) {
            this.valor = evt.target.value;
        },
        getValueSegundoInput(evt) {
            this.valor = evt.target.value;
        }
    }
})