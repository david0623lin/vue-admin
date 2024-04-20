import { createRouter, createWebHistory } from "vue-router";

const constantRoutes = [
  {
    path: "/",
    name: "DASHBOARD",
    component: () => import("@/views/Dashboard.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    hidden: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

export default router;
