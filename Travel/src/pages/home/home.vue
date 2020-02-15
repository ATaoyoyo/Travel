<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <icons :list="iconList"></icons>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    Recommend,
    Weekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/index.json').then((res) => {
        console.log(res)
        if (res.status === 200) {
          res = res.data
          this.getHomeInfo(res)
        }
      })
    },
    getHomeInfo (res) {
      if (res.ret) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped>

</style>
