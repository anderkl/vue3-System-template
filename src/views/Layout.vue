<template>
  <div class=""></div>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount, onMounted } from 'vue'
console.log(ref, reactive)
//组件挂载到节点上之前执行的函数
onBeforeMount(() => {
  console.log('组件挂载到节点上之前执行的函数')
})

//组件挂载完成后执行的函数
onMounted(() => {
  console.log('组件挂载完成后执行的函数')
})
</script>

<style lang="less" scoped></style>
