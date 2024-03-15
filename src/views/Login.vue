<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box-title">欢迎登录</div>
      <div class="line"></div>
      <el-input
        class="login-input"
        v-model="account.name"
        size="large"
        placeholder="账号"
        :prefix-icon="Avatar"
      />
      <el-input
        class="login-input"
        v-model="account.password"
        type="password"
        size="large"
        placeholder="密码"
        :prefix-icon="Lock"
        show-password
      />
      <el-checkbox
        class="login-checkbox"
        v-model="isRememberPassword"
        label="记住密码"
        size="large"
      />
      <br />
      <el-button type="primary" size="large" class="login-btn" @click="handleLogin"
        >登 录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Lock } from '@element-plus/icons-vue'
import { ref, reactive, onBeforeMount, onMounted } from 'vue'
import Cache from '@/utils/cache'
import { CacheType } from '@/typings/types'
interface User {
  name: string
  password: string
}

const account = reactive<User>({
  name: Cache.getCache('name', CacheType.Cookie) ?? '',
  password: Cache.getCache('password', CacheType.Cookie) ?? ''
})
const isRememberPassword = ref<boolean>(true)
//组件挂载到节点上之前执行的函数
onBeforeMount(() => {
  console.log('组件挂载到节点上之前执行的函数')
})
//组件挂载完成后执行的函数
onMounted(() => {
  console.log('组件挂载完成后执行的函数')
})
const handleLogin = () => {
  if (isRememberPassword.value) {
    Cache.setCache('name', account.name, CacheType.Cookie)
    Cache.setCache('password', account.password, CacheType.Cookie)
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url('~@/assets/images/login-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .login-box {
    position: fixed;
    top: 50%;
    right: 12%;
    transform: translateY(-50%);
    background: rgba(70, 97, 131, 0.5);
    padding: 80px 40px;

    backdrop-filter: blur(8px);
    // border: 3px #5a7189 solid;
    border: 3px solid;
    border-image: linear-gradient(to bottom, #e6f3ff42, #e5eeff26) 1;
    // border-radius: 15px;
    .login-box-title {
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
      line-height: 33px;
      width: fit-content;
      text-align: left;
    }
    .line {
      width: 40px;
      height: 6px;
      background: #0c66e4;
      margin: 8px 0 40px;
    }
    .login-btn {
      width: 100%;
      height: 48px;
      margin-top: 50px;
    }
    .login-checkbox {
      padding-top: 4px;
    }
    /deep/ .el-checkbox__label {
      color: #fff;
    }
  }
  .login-input {
    margin-top: 20px;
    font-size: 16px;
    width: 360px;
    display: flex;

    /deep/ .el-input__wrapper {
      background-color: #e8f0fe;
    }
  }
}
</style>
