<template>
  <div>
<Tabs />
  </div>
</template>
<script>
 import Tabs from '../../components/component/tabs'
  export default {
    components: {
      Tabs
    },
    created() {
      if (!localStorage.getItem('token')) {
        location.href = 'http://localhost:8080/#/login'
      }
    },
  }
</script>