import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from "@/views/CatalogView.vue";
import CarsView from "@/views/CarsView.vue";
import GruzView from "@/views/GruzView.vue";
import AuthorizationView from "@/views/AuthorizationView.vue";
import RegistrationView from "@/views/RegistrationView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  },
  {
    path: '/gruz',
    name: 'gruz',
    component: GruzView
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: AuthorizationView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
