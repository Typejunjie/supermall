<template>
  <div id="app">
    <router-view></router-view>
    <tap-bar></tap-bar>
  </div>
</template>

<script>
import tapBar from "components/content/tapBar.vue";
import router from './router/index.js'

export default {
  name: 'vue',
  router,
  data() {
    return {};
  },
  components: {
    tapBar,
  },
};
</script>

<style>
@import url('./assets/reaset.css');

</style>
