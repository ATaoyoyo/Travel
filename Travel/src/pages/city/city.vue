<template>
  <div class="city">
    <city-header></city-header>
    <search :cities="cities"></search>
    <list :hotCities="hotCities" :city="cities" :letter="letter"></list>
    <letter :list="cities" @change="handleLetterChange"></letter>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/header'
import Search from './components/search'
import List from './components/list'
import Letter from './components/letter'
export default {
  name: 'City',
  components: {
    CityHeader,
    Search,
    List,
    Letter
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/city.json').then((res) => {
        // console.log(res)
        if (res.status) {
          this.getCitiesInfo(res)
        }
      })
    },
    getCitiesInfo (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (e) {
      // console.log(e)
      this.letter = e
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
