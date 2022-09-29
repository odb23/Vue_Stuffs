<template>
  <main class="container">
    <HeaderComponent name="Task Tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask"/>

    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>

    <TasksList :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" />
  </main>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import TasksList from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    TasksList,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {

    deleteTask(id) {
      if (confirm('Are you sure')) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    },

    toggleReminder(id) {
      console.log("Just got here")
      this.tasks = this.tasks.map(t => t.id === id ? { ...t, reminder: !t.reminder } : t)
    },

    addTask(newTask) {
      this.tasks = [...this.tasks, newTask]
      this.toggleAddTask()
    },

    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctor's Appointment",
        day: 'March 1st at 2:30pm',
        reminder: true,
      }
    ]
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
