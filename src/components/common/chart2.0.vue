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
      startclientX: Number,
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
    start(event) {
      this.box.style.transition = "";
      clearInterval(this.time);
      this.startclientX = event.targetTouches[0].clientX;
    },
    end(event) {
      this.box.style.transition = "1s";
      this.changes(event.changedTouches[0].clientX - this.startclientX);
      this.end.timeout = setTimeout(() => {
        this.runing();
      }, 1000);
    },
    move(event) {
      let movelong = event.targetTouches[0].clientX - this.startclientX;
      this.box.style.marginLeft = -(this.nowleft - movelong) + "px";
    },
    runing() {
      clearInterval(this.time);
      this.time = setInterval(() => {
        if (this.index + 1 > this.box.children.length) {
          this.box.style.marginLeft = 0 + "px";
          this.index = 1;
        } else {
          this.box.style.marginLeft = -(this.nowleft + this.boxwidth) + "px";
          this.index++;
        }
      }, 2000);
    },
    changes(num) {
      let changes = 1;
      if (num > 0) {
        changes = -1;
      }
      let newnum = Math.abs(num);
      if (newnum / this.boxwidth < 0.25) {
        changes = 0;
      }
      switch (changes) {
        case 0: {
          this.box.style.marginLeft = -this.nowleft + "px";
          break;
        }
        case 1: {
          if (this.index + 1 > this.box.children.length) {
            this.box.style.marginLeft = -this.nowleft + "px";
          } else {
            this.box.style.marginLeft = -(this.nowleft + this.boxwidth) + "px";
            this.index++;
          }
          break;
        }
        case -1: {
          if (this.index - 1 < 1) {
            this.box.style.marginLeft = -this.nowleft + "px";
          } else {
            this.box.style.marginLeft = -(this.nowleft - this.boxwidth) + "px";
            this.index--;
          }
          break;
        }
      }
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
