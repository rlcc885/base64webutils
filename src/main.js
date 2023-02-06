import { createApp } from 'vue'
import createRouter from './router'
import App from './App.vue'

import 'bootstrap'
// Import Bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(createRouter()).mount('#app')
