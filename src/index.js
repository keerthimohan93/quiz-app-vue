import Vue from 'vue';
import App from './app.vue';
import './../node_modules/bulma/css/bulma.css';
import VueRouter from 'vue-router';
import { store } from './store/store.js';
import moment from 'vue-moment';

Vue.use(VueRouter);

// const routes = [
//   { path: '/foo', name: 'foo', component: foo },
//   { path: '/details', name: 'Details', component: Details }
// ];

// const router = new VueRouter({
//   routes,
//   mode: process.env.NODE_ENV !== 'production' ? 'history' : 'hash'
// });

new Vue({
  el: '#app',
  store: store,
  moment,
  render: h => h(App)
});
