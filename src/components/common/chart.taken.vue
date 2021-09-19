<template>
  <div class="chartimg">
    <div
      @touchstart="down"
      @touchmove="move"
      @touchend="up"
      ref="img"
      :class="run"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "chart",
  data() {
    return {
      runing: [], //接收字符串指定动作
      index: 1, //保存当前图片序号
      eventclient: 0,
      once: 0,
    };
  },
  computed: {
    //将runing的数组数据转为class可识别字符串
    run() {
      return this.runing.join(" ");
    },
    //图片的基础属性
    massage() {
      let img = this.$refs.img.children[0];
      return { width: img.offsetWidth };
    },
  },
  methods: {
    //主要控制函数
    taken(common) {
      switch (common) {
        case "take": {
          clearInterval(this.time);
          this.time = setInterval(() => {
            if (this.index >= this.$refs.img.children.length) {
                this.index = 0
            }
            this.$refs.img.style.marginLeft =
              -this.massage.width * this.index + "px";
            this.index++;
          }, 2000);
          break;
        }
        case "stop": {
          clearInterval(this.time);
          break;
        }
      }
    },
    //鼠标按下
    down(event) {
      this.taken("stop");
    },
    //鼠标弹起
    up() {
      //将各种状态重置
      this.eventclient = -this.massage.width * (this.index - 1);
      this.once = 0;
      this.$refs.img.style.transition = "1s";
      this.mather(this.$refs.img.style.marginLeft);
      clearTimeout(this.up.time);
      this.up.time = setTimeout(() => {
        this.taken("take");
      }, 1000);
    },
    //判断下一张，上一张或不移动
    mather(num) {
      let overnum = Number(num.substring(0, num.length - 2));
    },
    //使图片随鼠标移动
    move(event) {
      event.preventDefault();
      if (this.once == 0) {
        this.eventclient -= event.targetTouches[0].clientX;
        this.once++;
        this.$refs.img.style.transition = "";
      }
      this.$refs.img.style.marginLeft = 
        (-this.massage.width * (this.index - 1)) + (this.eventclient + event.targetTouches[0].clientX) + 'px'
      /* if (this.eventclient == -this.massage.width * this.index) {
        this.eventclient = event.targetTouches[0].clientX;
      }
      this.$refs.img.style.marginLeft =
        this.massage.width * this.index -
        this.eventclient +
        event.targetTouches[0].clientX +
        "px"; */
    },
  },
  //元素挂载完成给予轮播
  mounted() {
    this.$refs.img.style.transition = "1s";
    this.taken("take");
  },
};
</script>

<style>
.chartimg {
  width: 375px;
  overflow: hidden;
}
.chartimg div {
  display: flex;
}
.chartimg img {
  width: 375px;
  vertical-align: bottom;
}
</style>