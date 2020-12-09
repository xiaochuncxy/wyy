<template>
  <div class="nav">
    <a href="http://localhost:8080/#/detial" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-xiaochengxu_tubiao"></span>
      </div>
      <p>每日推荐</p>
    </a>
    <a href="javascript:;" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-shouyinji"></span>
      </div>
      <p>私人FM</p>
    </a>
    <a href="http://localhost:8080/#/detial" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-gedan"></span>
      </div>
      <p>歌单</p>
    </a>
    <a href="http://localhost:8080/#/detial" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-paixingbang"></span>
      </div>
      <p>排行榜</p>
    </a>
    <a href="javascript:;" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-zhibo"></span>
      </div>
      <p>直播</p>
    </a>
    <a href="http://localhost:8080/#/detial" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-zhuanji"></span>
      </div>
      <p>数字专辑</p>
    </a>
    <a href="javascript:;" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-xingqiu"></span>
      </div>
      <p>唱聊</p>
    </a>
    <a href="javascript:;" class="pink-box">
      <div class="pink">
        <span class="iconfont icon-94"></span>
      </div>
      <p>游戏</p>
    </a>
  </div>
</template>

<style lang="less" scoped>
  .nav {
    height: 78px;
    // border: 1px solid red;
    white-space: nowrap;
    overflow-x: auto;
    padding-top: 8px;

    .pink-box {
      display: inline-block;
      text-decoration: none;

      p {
        margin-top: 8px;
        font-size: 14px;
        color: black;
      }

      .pink {
        background-color: pink;
        border-radius: 50%;
        height: 44px;
        width: 44px;
        margin: 0 20px;
        display: inline-block;
        text-align: center;
        line-height: 44px;

        span {
          font-size: 24px;
          color: #FE2E2E;
        }
      }
    }

  }
</style>