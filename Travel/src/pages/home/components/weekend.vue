<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img class="item-img" src="https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">, adipisicing elit.</p>
          <p class="item-desc">Lorem ipsum dolor sr adipisicing.</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Weekend'
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.recommend-title
  margin-top .2rem
  line-height .4rem
  background #eeeeee
  text-indent .2rem
.item-img-wrapper
  height 0
  overflow hidden
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>
