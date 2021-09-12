<template>
  <div class="tapBar">
    <tap-bariteam :path="'/home'">
      <div class="fas fa-home" slot="iteamimg"></div>
      <div slot="iteamtext">首页</div>
    </tap-bariteam>
    <tap-bariteam :path="'/cart'">
      <div class="fas fa-folder" slot="iteamimg"></div>
      <div slot="iteamtext">档案</div>
    </tap-bariteam>
    <tap-bariteam :path="'/shop'">
      <div class="fas fa-shopping-cart" slot="iteamimg"></div>
      <div slot="iteamtext">购物车</div>
    </tap-bariteam>
    <tap-bariteam :path="'/self'">
      <div class="fas fa-user-tie" slot="iteamimg"></div>
      <div slot="iteamtext">我的</div>
    </tap-bariteam>
  </div>
</template>

<script>
import tapBariteam from '../common/tapBar-iteam.vue'

export default {
  name: "tapBar",
  components: {
    tapBariteam
  },
};
</script>

<style>
.tapBar {
  height: 49px;
  width: 100%;
  background-color: rgb(240, 239, 239);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -2px 10px #d4d3d3;
  display: flex;
  justify-content: space-around;
}
</style>