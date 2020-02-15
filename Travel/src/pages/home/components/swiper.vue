<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 27%
  background-color #eeeeee
  .swiper-img
    width 100%
</style>
