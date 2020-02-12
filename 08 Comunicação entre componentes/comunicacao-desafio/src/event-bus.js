import Vue from 'vue';

export default new Vue({
    methods: {
        selectUser(usuario) {
            this.$emit('selectUser', usuario) 
        },
        userSelected(callback) {
            this.$on('selectUser', callback)
        }
    }
})