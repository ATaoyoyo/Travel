<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont iconzuo"></i>
    </div>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link tag="span" to="/city">重庆</router-link>
      <i class="iconfont iconxiala"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/common.styl';
  .header:after
    conten ''
    clear both
  .header
    display flex
    align-items center
    width 100%
    height $headerHeight
    color #ffffff
    background-color $bgColor
    .header-left
      width .64rem
      height 100%
      float left
      .iconzuo
        display inline-block
        width $headerHeight
        height $headerHeight
        text-align center
        font-size 0.5rem
        line-height $headerHeight
    .header-input
      display flex
      align-items center
      flex 1
      height .64rem
      margin 0 .2rem
      color #eee
      background-color #ffffff
      border-radius .1rem
    .header-right
      width 1.24rem
      float right
</style>
