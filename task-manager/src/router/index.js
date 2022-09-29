import { createRouter, createWebHistory } from "vue-router";

import Aboutpage from "../views/About";
import HomePage from "../views/Home";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: Aboutpage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
