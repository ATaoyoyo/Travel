<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style scoped>

</style>
