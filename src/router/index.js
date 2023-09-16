import Vue from "vue";
import VueRouter from "vue-router";
import ParentComponent from "../views/ParentComponent.vue";
import Task2ParentComp from "../views/Task2ParentComp.vue";
import FormComp from "../components/Task3/FormComp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ParentComponent",
    component: ParentComponent,
  },
  {
    path: "/task2",
    name: "Task2ParentComp",
    component: Task2ParentComp,
  },
  {
    path: "/task3",
    name: "FormComp",
    component: FormComp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
