import { createApp } from 'vue'

import 'element-plus/theme-chalk/index.css'
import { ElImage } from 'element-plus'

import App from './App.vue'

// 构建vue实例
const app = createApp(App)
app.use(ElImage)
app.mount('#app')
