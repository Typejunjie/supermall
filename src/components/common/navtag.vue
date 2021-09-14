<template>
  <div class="navtag">
    <div class="left"><slot name="left"></slot></div>
    <div class="content"><slot name="content"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navtag",
};
</script>

<style>
.navtag{
    display: flex;
    line-height: 44px;
    text-align: center;
}
.left{
    width: 20%;
}
.content{
    width: 60%;
}
.right{
    width: 20%;
}
</style>
