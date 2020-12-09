<template>
  <div class="header ">
    <span class="iconfont icon-liebiao"></span>

    <input type="text" placeholder="要不要买菜" v-model="searchInp" @keydown.enter="search(searchInp)">

    <span class="iconfont icon-maikefeng1"></span>
  </div>
</template>
<script>
  import {
    searchMusic,
  } from '../../api/searchMusic.js'
  export default {
    data() {
      return {
        searchInp: '',
        musicArr: [],
        load: false
      }
    },
    methods: {
      search(input) {
        localStorage.setItem('inp', input)
        let input2 = localStorage.getItem('inp')
        this.$emit('lod',this.load)
        searchMusic(input2).then(response => {
          this.musicArr = response.data.result.songs
          this.$emit('musicList', this.musicArr)
        })
        if (location.href != 'http://localhost:8080/#/detial') {
          location.href = 'http://localhost:8080/#/detial'
        }
      }
    },
    created() {
      if (localStorage.getItem('inp')) {
        let input2 = localStorage.getItem('inp')
        searchMusic(input2).then(response => {
          this.musicArr = response.data.result.songs
          this.$emit('musicList', this.musicArr)
        })
        localStorage.removeItem('inp')
      }
    },
  }
</script>
<style lang="less" scoped>
  .header {
    height: 49px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;

    input {
      width: 180px;
      height: 24px;
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 3px;
      outline-style: none;
      padding: 0px 8px;
    }

    input:focus {
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
    }

    span {
      font-size: 26px;
      margin: 0 10px;
    }
  }
</style>