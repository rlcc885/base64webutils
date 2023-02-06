import {createRouter, createWebHistory} from 'vue-router/dist/vue-router.esm-bundler';
import HomeView from './views/HomeView.vue'
import FileView from './views/FileView.vue'

export default () => createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/file',
            component: FileView
        },
    ]
});