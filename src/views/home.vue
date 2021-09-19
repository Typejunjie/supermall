<template>
    <div>
        <navtag :bgcolor='"background: #bfa"'>
           <div slot="left"></div>
           <div slot="content">聚划算</div>
           <div slot="right"></div>
        </navtag>
        <chart>
            <img src="~assets/img/dier.jpg" alt="">
            <img src="~assets/img/diyi.jpg" alt="">
        </chart>
    </div>
</template>

<script>
import navtag from 'components/common/navtag.vue'
import chart from 'components/common/chart2.0.vue'

export default {
    name: 'home',
    components: {
        navtag,
        chart
    }
}
</script>

<style>

</style>