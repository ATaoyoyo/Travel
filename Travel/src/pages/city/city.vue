<template>
  <div class="city">
    <city-header></city-header>
    <search></search>
    <list></list>
    <letter></letter>
  </div>
</template>
<script>
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
  }
}
</script>
