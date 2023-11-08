import './assets/main.css'
import App from './App.vue'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import VueSpeech from 'vue-speech'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueSpeech)
app.mount('#app')
