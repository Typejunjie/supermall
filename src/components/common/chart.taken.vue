<template>
    <div class="chartimg" @loade='chart()' @mousedown="down()" @mouseup="up()">
        <slot></slot>
    </div>
</template>

<script>
export default {
   name: 'chart',
   data () {
       return {
           
       }
   },
   methods: {
       chart() {

       },
       down() {

       },
       up() {
           
       }
   }
}
</script>

<style>
   .chartimg{
       width: 100%;
       height: 200px;
       overflow: hidden;
   }
   .chartimg img{
       width: 100%;
   }
</style>