<template>
  <div id="app">
    <tap-bar></tap-bar>
  </div>
</template>

<script>
import tapBar from "./components/content/tapBar.vue";

export default {
  name: 'vue',
  data() {
    return {};
  },
  components: {
    tapBar,
  },
};
</script>

<style>
@import url('./assetss/reset.css');

</style>
