<template>
  <div id='app'>
    {{titulo}}

    <button @click='titulo += "#"'>Alterar Titulo</button>
  </div>
</template>

<script>W
  export default {
    data: function() {
      return {
        titulo: 'Teste Data usando VueJS'
      }
    }
  }
</script>

<style>
  #app {
    background-color: chocolate;
    color: white;
  }
</style>