<template>
  <div class="main" ref="main">
    <div>
      <div class="ge"></div>
      <Banner />
      <Nav />
      <div class="recommend">
        <h2>推荐歌单</h2>
        <a>更多></a>
      </div>
      <GdList />
    </div>
  </div>
</template>
<script>
  import Banner from './banner'
  import Nav from './nav'
  import GdList from './gedanList'
  export default {
    components: {
      Banner,
      Nav,
      GdList,
    }
  }
</script>
<style lang="less" scoped>
  .main {
    text-align: center;
    overflow-y: scroll;
  
    .ge {
      height: 10px;
    }

    .recommend {
      height: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      h2 {
        display: inline-block;
        font-weight: 900;
      }

      a {
        display: inline-block;
        border: 1px solid #ccc;
        height: 20px;
        width: 56px;
        line-height: 20px;
        border-radius: 14px;
        font-size: 14px;
        padding-left: 2px;
      }
    }
  }
</style>