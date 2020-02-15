<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,v) of pages" :key="v">
        <div class="icon" v-for="icon of item" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-item" :src="icon.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autopaly: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((val, i) => {
        const page = Math.floor(i / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(val)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon
  position relative
  width 25%
  height 0
  float left
  padding-bottom 25%
  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    padding .1rem
    box-sizing border-box
    .icon-img-item
      display block
      width 80%
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height .44rem
    line-height .44rem
    text-align center
    color $darkTextColor
    ellipsis()
</style>
