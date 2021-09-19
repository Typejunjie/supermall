<template>
  <div id="app" @touchmove="_default">
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
  methods: {
    _default(event) {
      event.preventDefault()
    }
  },
  components: {
    tapBar,
  },
};
</script>

<style>
@import url('./assets/reaset.css');
@import url('./assets/css/all.min.css');
</style>
