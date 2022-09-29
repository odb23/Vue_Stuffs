<template>

    <!-- <div v-if="showAddTask"> </div> -->
        <AddTask v-show="showAddTask" @add-task="addTask" />
   

    <TasksList :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" />

</template>
<script>

import TasksList from './../components/Tasks.vue'
import AddTask from './../components/AddTask.vue'

export default {
    name: "HomePage",
    props: {
        showAddTask: Boolean,
    },
    components: {
        TasksList,
        AddTask,
    },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {

        async deleteTask(id) {
            if (confirm('Are you sure')) {
                const res = await fetch('http://localhost:5031/tasks/' + id, {
                    method: 'DELETE',
                });

                res.status === 200 && (this.tasks = this.tasks.filter(task => task.id !== id));
            }
        },

        async toggleReminder(id) {
            const taskToToggle = await this.fetchTask(id)
            const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
            const res = await fetch('http://localhost:5031/tasks/' + id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updTask),
            })
            const data = await res.json()
            this.tasks = this.tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        },

        async addTask(newTask) {
            console.log(newTask)
            const res = await fetch('http://localhost:5031/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newTask)
            });

            const data = await res.json()

            if (data) {
                this.tasks = [...this.tasks, data]
                this.toggleAddTask()
            }
        },

        async fetchTasks() {
            const res = await fetch('http://localhost:5031/tasks');
            const data = await res.json();

            return data
        },

        async fetchTask(id) {
            const res = await fetch('http://localhost:5031/tasks/' + id);
            const data = await res.json();
            return data
        }
    },
    async created() {
        this.tasks = await this.fetchTasks()
    },
}
</script>