<template>
    <div>
        <navtag>
           <div slot="left">返回</div>
           <div slot="content">中间</div>
           <div slot="right">右边</div>
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