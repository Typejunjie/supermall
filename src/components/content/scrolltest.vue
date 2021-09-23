<template>
    <div class="wrapper" ref="div">
        <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scrolltest',
  mounted () {
      new BScroll(this.$refs.div,{})
  }  
}

</script>

<style>
  .wrapper{
      height: 200px;
      overflow: hidden;
  }
</style>