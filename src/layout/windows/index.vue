<template>
  <nav-bar/>
  <a-row :gutter="24" class="app-main">
    <a-col>
      <router-view/>
    </a-col>
  </a-row>
  <footer-bottom/>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import FooterBottom from './components/Bottom.vue'
</script>