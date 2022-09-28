<template lang="">
    <div v-for="task in tasks" :key="task.id">
        <TaskComponent :task="task" @delete-task="$emit('delete-task', task.id)"/>
    </div>
</template>

<script>
import TaskComponent from "./Task";

export default {
    name: "TasksList",
    props: ['tasks'],
    components: { TaskComponent },
    emits: ['delete-task']
}

</script>
<style lang="">
    
</style>