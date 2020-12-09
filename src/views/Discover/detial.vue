<template>
  <div class="detial">
    <div class="con" ref="con">
      <Header @lod="loadFn" @musicList="getMusicList" />
      <div v-if="loading">
        <div class="ge2">歌曲列表</div>
        <div class="list" v-for="(ele,index) in musicList" :key="index" @click="playMusic(ele)">
          <div class="_left">
            <p>{{index + 1}}</p>
            <div class="h">
              <h4>{{ele.name}}</h4>
              <h5>{{ele.artists | getActor}} <span v-if="ele.alias[0]">{{ ' - ' + ele.alias[0]}}</span></h5>
            </div>
          </div>
          <div class="_right">
            <span class="iconfont icon-iconset0481"></span>
          </div>
        </div>
      </div>
      <Loadings v-else />
    </div>
    <AutoPlay :musicArr="resMusicArr" ref="autoPlay1" v-if="xian" />
    <Tabs />
  </div>
</template>
<script>
  import Header from './header'
  import Tabs from '../../components/component/tabs'
  import AutoPlay from '../../components/Y-component/autoplay'
  import Loadings from '../../components/component/Loading'
  import {
    musicUrl,
    musicDetial
  } from '../../api/searchMusic'
  export default {
    data() {
      return {
        musicList: [],
        musicObj: null,
        resMusicArr: [],
        xian: false,
        loading: true,
      }
    },
    components: {
      Header,
      AutoPlay,
      Tabs,
      Loadings
    },
    created() {
      if (!localStorage.getItem('token')) {
        location.href = 'http://localhost:8080/#/login'
      }

    },
    methods: {
      playMusic(ele) {
        this.xian = true
        this.$refs.con.style.height = document.documentElement.clientHeight - 123 + 'px'
        this.musicObj = {
          'title': ele.name,
        }
        let actorArr = []
        ele.artists.forEach(val => {
          actorArr.push(val.name)
        })
        this.musicObj.author = actorArr.join(' | ')
        musicUrl(ele.id).then(response => {
          this.musicObj.url = response.data.data[0].url
        })
        musicDetial(ele.id).then(response => {
          this.musicObj.pic = response.data.songs[0].al.picUrl
          console.log(this.musicObj);
          let repeat = this.resMusicArr.find(value => {
            return value.title === this.musicObj.title
          })
          if (!repeat) {
            this.resMusicArr.unshift(this.musicObj)
          }
          console.log(this.resMusicArr);
          // this.$refs.autoplay1.autoplay = true

        })
      },
      loadFn(data) {
        this.loading = data
      },
      getMusicList(data) {
        console.log(this.loading);
        this.musicList = data
        this.loading = true
        console.log(this.loading);
      },

    },
    mounted() {
      this.$refs.con.style.height = document.documentElement.clientHeight - 50 + 'px'
    },
    filters: {
      getActor(arr) {
        let actor = []
        arr.forEach(val => {
          actor.push(val.name)
        })
        return actor.join(' | ')
      }
    }
  }
</script>
<style lang="less" scoped>
  .list {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .con {
      overflow-y: scroll;

    }

    ._left {
      display: flex;
      align-items: center;


      p {
        margin: 0 20px;
        display: inline-block;
        width: 20px;
        text-align: center;
        color: #999;
      }

      h4 {
        font-size: 16px;
        margin-bottom: 5px;

      }

      h5 {
        font-size: 12px;
        color: #888;
      }

    }

    ._right {
      span {
        font-size: 24px;
        margin-right: 20px;
      }
    }

  }

  .ge2 {
    background-color: #ccc;
    height: 18px;
    font-size: 10px;
    line-height: 18px;
    padding-left: 12px;
  }
</style>