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
  mounted () {
      new BScroll(this.$refs.div,{
          click: true
      })
  }  
}

</script>

<style>
  .wrapper{
      height: 100vh;
      overflow: hidden;
  }
</style>