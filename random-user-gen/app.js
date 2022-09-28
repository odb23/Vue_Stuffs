const app = Vue.createApp({
//   template: `
//   <div id="app">
//         <img
//           v-bind:src="picture" || :src="picture"
//           :alt="{{firstName}}  {{lastName}}"
//           :class="gender"
//         />
//         <h1>{{firstName}} {{lastName}}</h1>
//         <h3>Email: {{email}}</h3>
//         <button :class="gender" @click="getUser() || v-on:click="getUser()" ">Get Random User</button>
//       </div>

//       <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//       <script src="app.js"></script>
//   `,

  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
