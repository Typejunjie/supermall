<template>
    <div>
        <navtag :bgcolor='"background: #bfa"'>
           <div slot="left"></div>
           <div slot="content">购物车</div>
           <div slot="right"></div>
        </navtag>
    </div>
</template>
<script>
import navtag from 'components/common/navtag.vue'

export default {
    name: 'shop',
    components: {
        navtag
    }
}
</script>
<style>

</style>