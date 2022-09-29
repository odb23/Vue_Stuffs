<template>
    <header>
        <h1>{{name}}</h1>
        <ButtonComponent :text="!showAddTask? 'Add Task' : 'Close'" :color="!showAddTask? 'green' : 'red'"
            @on-click="$emit('toggle-add-task')" />
    </header>
</template>

<script>
import ButtonComponent from "./Button.vue"

export default {
    name: "HeaderComponent",
    props: {
        name: {
            type: String,
            default: "Hello default name prop"
        },
        showAddTask: Boolean,
    },
    emits: ['toggle-add-task'],
    components: { ButtonComponent },
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>