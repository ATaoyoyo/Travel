<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.recommend-title
  margin-top .2rem
  line-height .4rem
  background #eeeeee
  text-indent .2rem
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img-wrapper
    width 1.7rem
    height 1.7rem
    padding .1rem
    .item-img
      width 100%
  .item-info
    min-width 0
    flex 1
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      color #ffffff
      background #ff9300
      padding 0 .1rem
      line-height .44rem
      margin-top .1rem
      border-radius .03rem
</style>
