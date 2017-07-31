<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header.vue'
  import Tab from 'components/tab/tab.vue'

  export default {
    components: {
      MHeader,
      Tab
    }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import "~common/stylus/variable"

</style>
