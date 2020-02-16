<template>
  <div class="city">
    <city-header></city-header>
    <search></search>
  </div>
</template>
<script>
import CityHeader from './components/header'
import search from './components/search'
export default {
  name: 'City',
  components: {
    CityHeader,
    search
  }
}
</script>
