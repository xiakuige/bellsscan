<template>
  <div class="container">
    <div class="product">
      <div class="title">BellsScan</div>
      <div class="remark">Coming Soon!</div>
    </div>
    <div class="address">
      <div class="logo-image-container">
        <img :src="wallet" alt="Wallet Logo" class="logo-image"/>
      </div>
      <p class="txt">BD2Mq3XQfSp1yNQEzTm87EnmpyLQjEa2t8</p>
    </div>
  </div>
</template>
<script setup>
import wallet from '@/assets/imgs/wallet.png'
</script>
<style lang="scss">
.container {
  padding: 0 70px;
  min-width: 1000px;
  max-width: 1440px;
  margin: auto;

  .product {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 80px;
      color: #fab301; /* 强调产品名称，使用黑色 */
      margin-bottom: 20px;
    }

    .remark {
      font-size: 36px;
      font-weight: bold;
      color: #333; /* 根据图片，使用了深色文字 */
      text-shadow: 2px 2px #fff; /* 添加一点文字阴影以增强效果 */
    }
  }

  .address {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .txt {
      margin-top: 20px;
    }
  }
}
</style>