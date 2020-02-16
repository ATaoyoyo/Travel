<template>
  <div class="list" ref="wrapper">
    <div class="wrapper">
      <div class="area">
      <div class="title border-bottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
      </div>
      <div class="area">
        <div class="title border-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  data () {
    return {}
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {})
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.border-bottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.list
  // overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  height 100%
.title
  line-height .44rem
  background-color #eeeeee
  padding-left .2rem
  font-size .26rem
.button-list
  padding .1rem .6rem .1rem .1rem
  overflow  hidden
  .button-wrapper
    float left
    width 33.33%
    .button
      padding .1rem 0
      margin .1rem
      text-align center
      border .02rem solid #cccccc
      border-radius .05rem
.item-list
  .item
    line-height .64rem
    color #666
    padding-left .2rem
</style>
