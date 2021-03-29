/* eslint-disable */

import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import * as VueRouter from "vue-router";

//define routes which map to a component
const routes = [{ path: "/", component: Home }];

//create router instance
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount("#app");
