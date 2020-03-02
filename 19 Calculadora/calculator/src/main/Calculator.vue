<template>
    <div class="calculator">
        <display value='1000' />

        <Button label='AC' triple @onClick="clearMemory"/>
        <Button label='/' operation @onClick='setOperation'/>
        <Button label='7' @onClick='addDigito'/>
        <Button label='8' @onClick='addDigito'/>
        <Button label='9' @onClick='addDigito'/>
        <Button label='*' operation @onClick='setOperation'/>
        <Button label='4' @onClick='addDigito'/>
        <Button label='5' @onClick='addDigito'/>
        <Button label='6' @onClick='addDigito'/>
        <Button label='-' operation @onClick='setOperation'/>
        <Button label='1' @onClick='addDigito'/>
        <Button label='2' @onClick='addDigito'/>
        <Button label='3' @onClick='addDigito'/>
        <Button label='+' operation @onClick='setOperation'/>
        <Button label='0' double @onClick='addDigito'/>
        <Button label='.' @onClick='addDigito'/>
        <Button label='=' operation @onClick='setOperation'/>
    </div>
</template>

<script>
    import Display from '../components/Display'
    import Button from '../components/Button'

    export default {
        components: {
            Display,
            Button
        },
        methods: {
            clearMemory () {
                
            },
            setOperation(operation) {
                
            },
            addDigito(n) {
                
            }
        }
    }
</script>

<style scoped>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>