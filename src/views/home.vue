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
        <tapchanges :title="['精品','最新','潮流']"></tapchanges>
        <scrolltest></scrolltest>
    </div>
</template>

<script>
import navtag from 'components/common/navtag.vue'
import chart from 'components/common/chart2.0.vue'
import tapchanges from 'components/common/tapchanges'
import Scrolltest from 'components/content/scrolltest.vue'

export default {
    name: 'home',
    components: {
        navtag,
        chart,
        tapchanges,
        Scrolltest,
    }
}
</script>

<style>

</style>