<template>
  <div class="city-header">
    <router-link to="/" tag="i" class="iconfont iconzuo back"></router-link>
    <span class="title">城市选择</span>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.city-header
  position relative
  height $headerHeight
  line-height $headerHeight
  font-size .32rem
  text-align center
  color #fff
  background $bgColor
  .back
    position absolute
    left 0
    font-size .5rem
    width .86rem
</style>
