<template>
  <section class="layout-container">
    <div class="head">
      <nav-bar/>
    </div>
    <div class="middle">
      <router-view/>
    </div>
    <!--    <footer-bottom/>-->
  </section>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
// import FooterBottom from './components/Bottom.vue'
</script>
<style lang="scss" scoped>

.layout-container {
  .head {
    background: white;
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  background-color: #f6f6f6;

  .middle {
    padding-top: 64px;
    min-height: 90vh;
    width: 100%;
  }
}
</style>