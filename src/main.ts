import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { router } from '@/router';

import highcharts from '@/directive/highcharts'

createApp(App).use(highcharts).use(router).use(store).mount('#app');
