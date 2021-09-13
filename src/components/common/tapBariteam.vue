<template>
  <div class="iteam" @click="iteamclick()">
    <slot name="iteamimg"></slot>
    <slot name="iteamtext"></slot>
  </div>
</template>

<script>
export default {
  name: "tapBariteam",
  data() {
    return {};
  },
  props: {
    'path': ''
  },
  methods: {
    iteamclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
@import url("~@/assets/css/all.min.css");

.iteam {
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
}
.iteam :first-child {
  font-size: 22px;
  margin-bottom: 5px;
}
</style>