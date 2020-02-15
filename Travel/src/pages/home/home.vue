<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
    <recommend></recommend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    Recommend
  }
}
</script>

<style scoped>

</style>
