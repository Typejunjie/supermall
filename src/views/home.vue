<template>
    <div>
        <navtag :bgcolor='"background: pink"'>
           <div slot="left" class="fas fa-angle-left left"></div>
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
.left{
    font-size: 25px;
    margin-left: -10px;
}
</style>