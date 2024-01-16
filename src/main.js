// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'  // Import Restaurantes component or replace with the correct path
import Restaurantes from './components/Restaurantes.vue'  // Import Restaurantes component or replace with the correct path

Vue.config.productionTip = false

Vue.use(VueRouter);  // Don't forget to use VueRouter as a plugin

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/restaurantes', component: Restaurantes },
    // Add more routes as needed
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // Use the router here
  components: { App },
  template: '<App/>',
  data: {
    seen: false
  }
})