<template>
    <header>
        <h1>{{name}}</h1>
        <ButtonComponent text="Add task" color="green"/>
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
        }
    },
    components: {ButtonComponent},
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