<template>
  <div class="tabs">
    <div class="tabs-item">
      <router-link to="/discover">
        <span class="iconfont icon-netease-cloud-music-fill"></span>
        <div>发现</div>
      </router-link>
    </div>
    <div class="tabs-item">
      <router-link to="/boke">
        <span class="iconfont icon-yanhouke-shengyinyichang"></span>
        <div>播客</div>
      </router-link>
    </div>
    <div class="tabs-item">
      <router-link to="/my">
        <span class="iconfont icon-yinle"></span>
        <div>我的</div>
      </router-link>
    </div>
    <div class="tabs-item">
      <router-link to="/k-music">
        <span class="iconfont icon-maikefeng"></span>
        <div>K歌</div>
      </router-link>
    </div>
    <div class="tabs-item">
      <router-link to="/yuncun">
        <span class="iconfont icon-qunzu"></span>
        <div>云村</div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabs',
  }
</script>

<style scoped lang="less">
  .tabs {
    position: fixed;
    left: 0;
    right: 0;
    bottom: -3px;
    z-index: 999;
    height: 50px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    overflow: hidden;

    .tabs-item {
      .tabs-active {
        color: rgb(210, 0, 0);
      }

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #999;

        span {
          font-size: 24px;
        }

        div {
          font-size: 10px;
        }
      }
    }
  }
</style>