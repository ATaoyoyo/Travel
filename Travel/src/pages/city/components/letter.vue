<template>
  <ul class="letter">
    <li class="letter-item"
      v-for="(item, i) of getLetterList"
      :key="i"
      :ref="item"
      @click="handleClick"
      @touchstart="handleStart"
      @touchmove="handleMove"
      @touchend="handleEnd"
    >
        {{item}}
      </li>
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
      letterList: [],
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleStart () {
      this.touchStatus = true
    },
    handleMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clienY
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.getLetterList.length) {
            this.$emit('change', this.getLetterList[index])
          }
        }, 16)
      }
    },
    handleEnd () {
      this.touchStatus = false
    }
  },
  update () {
    this.startY = this.$refs['A'][0].offsetTop
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
