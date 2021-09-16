<template>
    <div>
        <navtag :bgcolor='"background: #ffffff"'>
           <div slot="left"></div>
           <div slot="content">我的</div>
           <div slot="right"></div>
        </navtag>
    </div>
</template>
<script>
import navtag from '../components/common/navtag.vue'


export default {
    name: 'self',
    components: {
        navtag
    }
}
</script>
<style>

</style>