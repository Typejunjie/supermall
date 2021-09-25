<template>
    <div class="wrapper" ref="div">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scrolltest',
  props: {
      BScroll: {
          type: Object,
      }
  },
  mounted () {
      new BScroll(this.$refs.div,this.BScroll)
  },
}

</script>

<style>
  .wrapper{
      height: 100vh;
      overflow: hidden;
  }
</style>