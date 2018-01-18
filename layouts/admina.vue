<template>
    <div>
        <my-backheader/>
        <div class="main">
            <nuxt/>
        </div>
        <div class="footer_back">
            <my-footer/>
        </div>
    </div>
</template>
<style scoped>
.main{
    width: 90%;
    float: right;
    height: 800px;
}
    .footer_back{
        width: 100%;
        display: block;
        overflow: hidden;
    }
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