<template>
  <div>
    <Header />
    <Main />
    <!-- <AutoPlay /> -->

    <Tabs />
  </div>
</template>
<script>
  import Tabs from '../../components/component/tabs'
  import Header from './header'
  import Main from './main'

  // import AutoPlay from '../../components/Y-component/autoplay'
  export default {
    components: {
      Tabs,
      Header,
      Main,
      // AutoPlay,
    },
    created() {
      if (!localStorage.getItem('token')) {
        location.href = 'http://localhost:8080/#/login'
      }
    },
  }
</script>
<style lang="less">
</style>