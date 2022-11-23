<template>
  <div>
    <button @click="btn">测试</button>
  </div>
</template>

<script>
import { sysLogin } from '@/api/text'
export default {
  methods: {
    async btn() {
      const res = await sysLogin()
      console.log(res)
    }
  }
}
</script>

<style></style>
