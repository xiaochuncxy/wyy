<template>
  <div>
    <aplayer :autoplay="true" class="autoplay" :music="musicArr?musicArr[0]:{url:' '}" :list="musicArr"
      v-if="musicArr[0]" mode="circulation" ref="player" listFolded theme="red" slot="display" />

  </div>
</template>
<script>
  import aplayer from 'vue-aplayer'
  aplayer.disableVersionBadge = true
  export default {
    props: ['musicArr'],
    data() {
      return {

      }
    },
    components: {
      aplayer
    },
    methods: {

    },
  }
</script>
<style lang="less" scoped>
  .autoplay {
    position: fixed;
    bottom: 42px;
    right: 0px;
    left: 0px;
    z-index: 999;
  }
</style>