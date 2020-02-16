<template>
  <ul class="letter">
    <li class="letter-item" v-for="(item, i) of getLetterList" :key="i">{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'Letter',
  props: {
    list: Object
  },
  data () {
    return {
      letterList: []
    }
  },
  computed: {
    getLetterList () {
      const list = []
      for (let i in this.list) {
        list.push(i)
      }
      return list
    }
  }
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
    line-height .45rem
</style>
