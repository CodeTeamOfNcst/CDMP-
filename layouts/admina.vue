<template>
    <div>
        <my-backheader/>
        <div class="main_right">
            <nuxt/>
        </div>
        <my-footer/>
    </div>
</template>
<style scoped>
/*.main_right{*/
    /*width: 90%;*/
    /*height: auto;*/
    /*min-height: 800px;*/
    /*float: right;*/
/*}*/
</style>

<script>
    import MyBackheader from '../components/Backheader.vue'
    import MyFooter from '../components/Footer.vue'

    export default {
        components: {
            MyBackheader,
            MyFooter
        }
    }
</script>