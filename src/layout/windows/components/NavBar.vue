<template>
  <div class="navbar">
    <Logo/>
    <div class="navs">
      <div class="navlist">
        <div class="navitem">
          <p>Home</p>
        </div>
      </div>
      <div class="navlist">
        <div class="navitem">
          <p>Donate</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from '@/components/Logo/index.vue'
</script>
<style lang="scss" scoped>

.an3 {
  transition: 0.3s;
}

.navbar {
  padding: 0 70px;
  min-width: 1000px;
  max-width: 1440px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border-bottom: 1px solid #E6EAF0;

  .logo {
    height: 33px;
    width: auto;
  }

  .navs {
    display: flex;
    align-items: center;

    .navlist {
      display: flex;
      height: 44px;

      .navitem {
        margin-right: 48px;
        position: relative;

        &.has {
          & > p {
            display: flex;
            align-items: center;

            &::after {
              content: '';
              width: 6px;
              height: 6px;
              margin-top: -3px;
              transform: rotate(45deg);
              margin-left: 7px;
              border-bottom: 1px solid #404040;
              border-right: 1px solid #404040;
            }
          }
        }

        & > p {
          line-height: 44px;
          text-align: center;
          margin: 0;
          padding: 0;
          cursor: pointer;

          &:hover {
            color: #0AD8A7;
          }
        }

        &:hover {
          .childs {
            opacity: 1;
            visibility: visible;
            transform: translateY(0px);
          }
        }

        .childs {
          position: absolute;
          width: 200%;
          margin-left: -50%;
          text-align: center;
          line-height: 44px;
          background: white;
          height: 88px;
          visibility: hidden;
          opacity: 0;
          overflow: hidden;
          transition: all .5s;
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          transform: translateY(20px);

          div {
            cursor: pointer;

            &:hover {
              color: #0AD8A7;
            }
          }
        }
      }
    }


  }
}

.header-container {
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  .center {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-menu {
      border: none;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .el-menu-item {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0 15px !important;
        letter-spacing: 3px;
        font-size: 18px;
        border-bottom: 4px solid transparent;
        transition: all 0.3s;

        &:hover {
          border-color: #2ddd9d;
          background-color: rgba(#ccc, 0.1);
        }
      }

      .el-sub-menu {
        height: 100%;
        border-bottom: 4px solid transparent;

        &:hover {
          border-bottom: 4px solid #2ddd9d !important;
          background-color: rgba(#ccc, 0.1);
        }

        :deep(.el-sub-menu__title) {
          letter-spacing: 3px;
          font-size: 18px;
          border: none;

          &:hover {
            background-color: rgba(#ccc, 0.1);
          }
        }
      }

      .is-active {
        background-color: rgba(255, 255, 255, 0);
        border-bottom: 4px solid #2ddd9d !important;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .member {
      display: flex;
      align-items: center;
      margin-right: 15px;

      .el-button {
        height: 30px;
      }
    }

    .user-avatar-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      cursor: pointer;

      .name-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }
    }
  }
}

</style>
<style lang="scss">
.navbar-popper-box {
  overflow: hidden;
  border: none;

  .el-menu {
    padding: 0;
    min-width: 134px;

    .el-menu-item {
      height: 50px;
      font-size: 14px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 2px;
    }
  }
}
</style>
<style lang="scss">
.user-dropdown {
  .btn {
    width: 126px;
    height: 40px;
    border: 1px solid #0AD8A7;
    border-radius: 20px;
    color: #0AD8A7;
    text-align: center;
    line-height: 40px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #0AD8A7;
      color: #ffff;
    }
  }
}
</style>

