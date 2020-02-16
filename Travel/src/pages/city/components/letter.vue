<template>
  <ul class="letter">
    <li class="letter-item">A</li>
    <li class="letter-item">A</li>
    <li class="letter-item">A</li>
    <li class="letter-item">A</li>
    <li class="letter-item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'Letter'
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.letter
  position fixed
  display flex
  flex-direction column
  align-items center
  justify-content center
  right 0
  bottom 0
  height 100%
  width .3rem
  text-align center
  color $bgColor
  .letter-item
    line-height .35rem
</style>
