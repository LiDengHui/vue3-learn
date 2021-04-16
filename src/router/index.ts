import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/page/Home.vue';
const ChartDemo = () => import('@/components/ChartDemo.vue');
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/chart', component: ChartDemo }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})