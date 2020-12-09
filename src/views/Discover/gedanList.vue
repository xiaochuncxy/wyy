<template>
  <div>
    <el-row type="flex" justify="space-around" class="Row" v-if="loading">
      <el-col :span="7" v-for="(ele, index) in gdList" :key="index" class="Col">
        <el-card :body-style="{ padding: '0px' }">
          <a href="http://localhost:8080/#/detial"><img :src="ele.picUrl" class="image"></a>
          <div class="name">
            <span>{{ele.name | lve()}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <Loadings v-else />
  </div>
</template>
<script>
  import {
    getGdList
  } from '../../api/gedanList.js'
  import Loadings from '../../components/component/Loading'
  export default {
    name: 'gedanList',
    data() {
      return {
        gdList: [],
        loading: false
      }
    },
    filters: {
      lve(a) {
        return a = a.slice(0, 4) + '...'
      }
    },
    created() {
      getGdList().then((res) => {
        this.loading = false
        this.gdList = res.data
        this.loading = true
      })
    },
    components: {
      Loadings
    }
  }
</script>
<style lang="less" scoped>
  .Row {
    // flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;

    .Col {
      margin: 10px 0;

      .image {
        width: 100%;
        display: block;
      }

      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }

      .clearfix:after {
        clear: both
      }

      .name {
        padding: 10px 0;
        height: 20px;
      }
    }
  }
</style>