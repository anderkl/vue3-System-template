import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { loadAllPlugins } from './plugins'
import 'normalize.css'
import './assets/css/index.less'
// import myRequest from './services'

const app = createApp(App)

console.log('请求BASE_URL', process.env.VUE_APP_BASE_URL)
console.log('打包public地址', process.env.VUE_APP_PUBLIC_PATH)
// 加载所有插件
loadAllPlugins(app)
app.use(store).use(router).mount('#app')
