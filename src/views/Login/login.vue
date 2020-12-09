<template>
  <div class="login">
    <el-input placeholder="请输入账号" v-model="username" clearable></el-input>
    <div class="ge"></div>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    <div class="ge"></div>
    <el-button type="primary" @click="loginWyy">登录</el-button>
    <el-button @click="reset">重置</el-button>
    <div class="ge"></div>
    <div class="ge"></div>
    <div class="ge"></div>
    <p>开心听音乐，开心每一天</p>
  </div>
</template>
<script>
  import {
    userLogin
  } from '../../api/login'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      loginWyy() {
        userLogin().then(response => {
          if (response.data[0].username === this.username && response.data[0].password === this.password) {
            localStorage.setItem('token', response.data[0].token)
            location.href = 'http://localhost:8080/#/discover'
          }
        })
      },
      reset() {
        this.username = ''
        this.password = ''
      }
    }
  }
</script>
<style lang="less" scoped>
  .login {
    width: 75%;
    position: absolute;
    top: 255px;
    left: 13%;
    text-align: center;

    .ge {
      width: 100%;
      height: 20px;
    }

    p {
      color: white;
      font-size: 20px;
      font-family: '楷体';
    }
  }
</style>