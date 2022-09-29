<template lang="">
    <div v-for="task in tasks" :key="task.id">
        <TaskComponent :task="task" @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)"/>
    </div>
</template>

<script>
import TaskComponent from "./Task";

export default {
    name: "TasksList",
    props: ['tasks'],
    components: { TaskComponent },
    emits: ['delete-task', 'toggle-reminder']
}

</script>
<style lang="">
    
</style>