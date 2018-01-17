<template>
    <div>
        <div class="header_img">
            <!--<img src="../assets/img/r_bg.jpg"/>-->
            <h1>实验设备预约管理平台</h1>
        </div>
        <center class="headerlist">
            <nuxt-link class="button page" to="/">首页</nuxt-link>
            <nuxt-link class="button page" to="/lists">仪器列表</nuxt-link>
            <nuxt-link class="button page" to="/bulletin">通知公告</nuxt-link>
            <nuxt-link class="button page" to="/contact">联系我们</nuxt-link>
        </center>
    </div>
</template>
<style scoped>
    .header_img{
        width: 100%;
        height: 100px;
        background-image: url("../assets/img/r_bg.jpg");
        background-size: 100% 100%;
    }
    .header_img h1{
        float: left;
        margin-left: 10%;

    }
    .nuxt-link-exact-active{
        background: #063961;
        color:white;
    }
    .headerlist{
        background-color:#063961;
    }
</style>

<script>
    export default {
        data() {
            return {
                isActive: true,
                hasError: false
            };
        }
    }
</script>
