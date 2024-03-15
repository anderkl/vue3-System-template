<template>
  <router-view />
</template>
<script lang="ts">
import myRequest from './services'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // myRequest.get({ url: '/home/multidata' })
    myRequest
      .request({
        url: '/home/multidata',
        method: 'GET',
        showLoading: true,
        interceptors: {
          requestInterceptor: (config) => {
            console.log(config)
            config.headers['wpqToken'] = 'wpqToken'
            return config
          },
          responseInterceptor: (res) => {
            return res
          }
        }
      })
      .then((res) => {
        console.log(res)
      })
  }
})
</script>

<style lang="less"></style>
