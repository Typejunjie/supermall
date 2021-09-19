<template>
  <div class="chartbox">
    <div ref="box" @touchstart="start" @touchend="end" @touchmove="move">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "chart2.0",
  data() {
    return {
      index: Number,
    };
  },
  computed: {
    box() {
      return this.$refs.box;
    },
    boxwidth() {
      return this.box.offsetWidth;
    },
    nowleft() {
      return this.boxwidth * (this.index - 1);
    },
  },
  mounted() {
    //初始化轮播图组件
    this.box.style.transition = "1s";
    this.index = 1;
    this.runing();
  },
  methods: {
    start() {},
    end() {},
    move() {},
    runing() {
      clearInterval(this.time);
      this.time = setInterval(() => {
        if (this.index + 1 > this.box.children.length) {
            this.box.style.marginLeft = 0 + 'px'
            this.index = 1
        } else {
          this.box.style.marginLeft = -(this.nowleft + this.boxwidth) + 'px';
          this.index++;
        }
      }, 2000);
    },
  },
};
</script>

<style>
.chartbox {
  background-color: #bfa;
  height: 200px;
  overflow: hidden;
}
.chartbox div {
  display: flex;
}
.chartbox img {
  width: 375px;
}
</style>
