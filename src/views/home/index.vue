<template>
  <div class="container">
    <div class="banner">
      <a-row class="contain" :guter="24" justify="space-around">
        <a-col :span="12" class="left">
          <p class="txt">Bellscoin Blockchain Explorer</p>
          <a-input class="search" placeholder="Search for block height,hash,transaction,or address"/>
        </a-col>
        <a-col :span="12">
          <div style="width: 400px;margin-top: 10vh;margin-left: auto">
            <a-carousel autoplay>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </a-carousel>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="stats">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Dashboard">
          <dash/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Blocks" force-render>
          <dash/>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Transactions">
          <dash/>
        </a-tab-pane>
        <a-tab-pane key="4" tab="Pools">
          <dash/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import dash from "./modules/board/index.vue"

const activeKey = ref("1")
</script>
<style lang="scss">
.container {
  margin: auto;

  .banner {
    width: 100%;
    background: linear-gradient(to right, #fff9db, #fff1c2, #ffecb3);

    .contain {
      padding: 0 70px;
      min-width: 1000px;
      max-width: 1440px;
      margin: auto;
      height: 35vh;

      .left {
        margin-top: 12vh;
        flex-direction: column;
        align-items: center;
        height: 100%;

        .txt {
          font-size: 36px;
          font-weight: bold;
          color: #fea90b
        }

        .search {
          height: 55px;
        }
      }
    }
  }

  .stats {
    padding: 0 70px;
    min-width: 1000px;
    max-width: 1440px;
    margin: auto;
    height: 35vh;
  }
}
</style>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>