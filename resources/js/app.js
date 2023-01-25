import './bootstrap';
import {createApp} from "vue"
import App from './src/App.vue'
import store from './src/store'
import router from './src/router'

createApp(App)
.use(store)
.use(router)
.mount('#app')