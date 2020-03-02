<template>
    <div class="calculator">
        <display></display>
        <Button></Button>
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
        data() {
            return {

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