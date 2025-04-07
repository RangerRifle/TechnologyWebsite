import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import Download from './components/Download.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/download', component: Download}
    ]
})

const app = createApp(App);

app.use(router);
app.component('spaider-download');

app.mount('#app');
