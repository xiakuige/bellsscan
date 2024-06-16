<template>
  <div class="logo" @click="toHome">
    <a-image width="40px" class="logo-image" :src="logo"/>
    <span class="title">
      {{ settingConfig.title }}
    </span>
  </div>
</template>
<script setup>
import logo from '@/assets/logo/logo.png'
import {settingConfig} from '@/config/setting.config.ts'
import {useRouter} from 'vue-router'

const router = useRouter()

const emit = defineEmits(null)

const toHome = () => {
  router.push('/')
  emit('removeMenuActive')
  scrollTo(0, 800)
}
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo-image {
    line-height: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }

  .title {
    margin-left: 10px;
    font-size: 22px;
    background: linear-gradient(to right, #fea90b, #fab301, #fed60b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    vertical-align: middle;
  }
}
</style>
