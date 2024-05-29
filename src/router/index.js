import { createRouter, createWebHistory } from "vue-router";
import LayoutComponent from '../components/LayoutComponent.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: '/404',
    hidden: true,
    component: () => import("@/views/404.vue")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import("@/views/Dashboard.vue")
      },
    ],
  },
  {
    path: '/example',
    name: 'Example',
    component: LayoutComponent,
    redirect: '/example',
    children: [
      {
        path: 'form',
        name: 'Form',
        component: () => import("@/views/FromPage.vue")
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import("@/views/Dashboard.vue")
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    hidden: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});

export default router;
