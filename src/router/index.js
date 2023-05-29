import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeRoute',
    component: () => import('@/views/tabbar/home/home.vue')
  },
  {
    path: '/cart',
    name: 'CartRoute',
    component: () => import('@/views/tabbar/cart/cart.vue')
  },
  {
    path: '/order',
    name: 'OrderRoute',
    component: () => import('@/views/tabbar/order/order.vue')
  },
  {
    path: '/profile',
    name: 'ProfileRoute',
    component: () => import('@/views/tabbar/profile/profile.vue')
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
