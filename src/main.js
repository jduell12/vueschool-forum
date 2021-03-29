/* eslint-disable */

import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import ThreadShow from "./components/ThreadShow";
import { createRouter, createWebHistory } from "vue-router";

//define routes which map to a component
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true
  }
];

//create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount("#app");
