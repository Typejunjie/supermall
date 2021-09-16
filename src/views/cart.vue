<template>
    <div>
        <navtag :bgcolor='"background: pink"'>
           <div slot="left"></div>
           <div slot="content">个人档案</div>
           <div slot="right"></div>
        </navtag>
    </div>
</template>
<script>
import navtag from 'components/common/navtag'

export default {
    name: 'cart',
    components: {
        navtag
    }
}
</script>
<style>

</style>
