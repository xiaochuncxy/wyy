<template>
  <div class="login" ref="login">
    <span class="iconfont icon-netease-cloud-music-fill" ref="logo"></span>
    <login/>
  </div>
</template>
<script>
  import login from './login'
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.$refs.login.style.height = document.documentElement.clientHeight + 'px'
      this.$refs.login.style.width = document.documentElement.clientWidth + 'px'
      this.$refs.logo.style.left = document.documentElement.clientWidth / 2 - 30 + 'px'
    },
    components: {
      login
    }
  }
</script>
<style lang="less" scoped>
  .login {
    background-color: rgb(223, 0, 0);
    position: relative;

    span {
      color: white;
      font-size: 60px;
      position: absolute;
      top: 120px;
    }
  }
</style>