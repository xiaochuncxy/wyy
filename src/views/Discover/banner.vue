<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide class="swiper-list"><img src="/img/1.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/2.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/3.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/4.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/5.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/6.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/7.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/8.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/9.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-list"><img src="/img/10.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import {
    Swiper,
    SwiperSlide,
    directive
  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'banner',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          //显示分页
          pagination: {
            el: '.swiper-pagination'
          },
          //自动轮播
          autoplay: {
            delay: 2000,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false,
          },
          //开启循环模式
          loop: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      this.swiper.slideTo(3, 1000, false)

    },
    directives: {
      swiper: directive
    },

  }
</script>
<style lang="less" scoped>
  .swiper-list {
    img {
      max-width: 94%;
      border-radius: 10px;
    }
  }
</style>