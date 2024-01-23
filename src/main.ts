import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { loadAllPlugins } from './plugins'
import requestA from './services'

const app = createApp(App)

console.log('请求BASE_URL', process.env.VUE_APP_BASE_URL)
console.log('打包public地址', process.env.VUE_APP_PUBLIC_PATH)
// 加载所有插件
loadAllPlugins(app)
app.use(store).use(router).mount('#app')
requestA.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      config.headers['wpqToken'] = 'wpqToken'
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})
