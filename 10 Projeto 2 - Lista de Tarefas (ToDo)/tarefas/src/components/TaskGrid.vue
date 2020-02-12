<template>
    <div class='task-grid'>
        <template>
            <task v-for='task in tasks' :key='task.name' :task='task' />
        </template>
    </div>
</template>

<script>
    import Task from '@/components/Task'
    export default {
        components: {
            Task,
        },
        props: {
            tasks: {type: Array, required: true}
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>