<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: 'Search'
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
</style>
