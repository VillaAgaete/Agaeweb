import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'), // Replace with the correct path
  },
  {
    path: '/restaurantes',
    name: 'Restaurantes',
    component: () => import('@/views/Restaurantes.vue'), // Replace with the correct path
  },
  // Add more routes as needed
];

export default new Router({
  routes,
})
