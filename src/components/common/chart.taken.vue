<template>
    <div class="chartimg">
        <div @mousedown="down" @mouseup="up" ref="img" :class="run"><slot></slot></div>
    </div>
</template>

<script>
export default {
   name: 'chart',
   data () {
       return {
           runing: []//接收字符串指定动作
       }
   },
   computed: {
       //将runing的数组数据转为class可识别字符串
       run() {
           return this.runing.join(' ')
       },
       //图片的基础属性
       massage() {
           let img = this.$refs.img.children[0]
           return {width: img.offsetWidth}
       }
   },
   methods: {
       //主要控制函数
       taken(common) {
           switch(common) {
               case 'take': {
                   this.time = setInterval(()=>{
                       this.$refs.img.style.marginLeft = -this.massage.width + 'px'
                       this.$refs.img.style.transition = '1s'
                   },2000);break;
               }
               case 'stop': {
                   clearInterval(this.time)
               }
           }
       },
       //鼠标按下
       down(event) {
           this.taken('stop')
       },
       //鼠标弹起
       up(event) {

       }
   },
   created () {
   },
   //元素挂载完成给予轮播
   mounted () {
       this.taken('take')
   }
}
</script>

<style>
   .chartimg{
       width: 375px;
       overflow: hidden;
   }
   .chartimg div{
       display: flex;
   }
   .chartimg img{
       width: 375px;
       vertical-align: bottom;
   }
</style>