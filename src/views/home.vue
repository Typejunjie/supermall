<template>
    <div>
        <navtag :bgcolor='"background: #bfa"'>
           <div slot="left"></div>
           <div slot="content">聚划算</div>
           <div slot="right"></div>
        </navtag>
    </div>
</template>

<script>
import navtag from '../components/common/navtag.vue'

export default {
    name: 'home',
    components: {
        navtag,
    }
}
</script>

<style>

</style>