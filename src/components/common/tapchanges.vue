<template>
    <div class="tapbox">
        <span v-for="(iteam,index) in title" :key="index"
        @click="active(index)" :class="iteamclick(index)"
        >
            {{iteam}}
        </span>
    </div>
</template>

<script>
export default {
  name: 'tapchanges', 
  props: {
      title: Array,
  },
  data () {
      return {
          activeiteam: 0
      }
  },
  methods: {
      active(index) {
          this.activeiteam = index
      },
      iteamclick(index) {
          if(index == this.activeiteam){
              return 'active'
          }
      }
  }
}
</script>

<style>
.tapbox{
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
}
.tapbox span{
    padding: 8px;
    margin-bottom: -3px;
}
.tapbox .active{
    border-bottom: 3px solid rgb(192, 76, 76);
}
</style>
