<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配结果</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((val, i) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              result.push(val)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.search
  height .72rem
  background-color $bgColor
  padding 0 .1rem
  .search-input
    color #666
    height .62rem
    width 100%
    text-align center
    line-height .62rem
    border-radius .05rem
    padding 0 .1rem
    box-sizing border-box
.search-content
  z-index 99
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  height 100%
  background-color #eee
  .search-item
    line-height .76rem
    background-color #ffffff
    padding-left .2rem
</style>
