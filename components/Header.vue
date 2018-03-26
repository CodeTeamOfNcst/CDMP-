<template>
    <div class="header">
        <div class="header-img">
            <!--<img src="../assets/img/r_bg.jpg"/>-->
            <h1>云计算及设备资源管理平台</h1>
        </div>
        <div class="header-list">
            <el-row>
                <el-col :span="3"><div class="header-item grid-content bg-purple"><nuxt-link class="button" to="/">首页</nuxt-link></div></el-col>
                <el-col :span="3"><div class="header-item grid-content bg-purple-light"><nuxt-link class="button" to="/clcresources">云计算资源</nuxt-link></div></el-col>
                <el-col :span="3"><div class="header-item grid-content bg-purple-light"><nuxt-link class="button" to="/device">仪器列表</nuxt-link></div></el-col>
                <el-col :span="3"><div class="header-item grid-content bg-purple"><nuxt-link class="button" to="/notice">通知公告</nuxt-link></div></el-col>
                <el-col :span="3"><div class="header-item grid-content bg-purple-light"><nuxt-link class="button" to="/usedirection">平台介绍及使用 </nuxt-link></div></el-col>
                <el-col :span="3"><div class="header-item grid-content bg-purple-light"><nuxt-link class="button" to="/personal">个人中心</nuxt-link></div></el-col>
                <el-col :span="3"><div class="header-item grid-content bg-purple-light"><nuxt-link class="button" to="/download">下载中心</nuxt-link></div></el-col>
                <el-col :span="3"><div class="header-item grid-content bg-purple-light"><nuxt-link class="button" to="/contact">联系我们</nuxt-link></div></el-col>
            </el-row>
            <!--<nuxt-link class="button page" to="/">首页</nuxt-link>-->
            <!--<nuxt-link class="button page" to="/device">仪器列表</nuxt-link>-->
            <!--<nuxt-link class="button page" to="/notice">通知公告</nuxt-link>-->
            <!--<nuxt-link class="button page" to="/personal">个人中心</nuxt-link>-->
        </div>
    </div>
</template>
<style scoped>
    .header {
        background-color: #fff;
    }
    .header-img {
        width: 70%;
        margin-left:15%;
        height: 100px;
        /* background: url("~assets/img/bg2.png") no-repeat left 100%; */
    }
    .header-img h1 {
        float: left;
        margin-left: 10%;
        color: #fafafa;
        letter-spacing: 0;
        text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 ;
    }
    .nuxt-link-exact-active {
        background: #6b8db4;
        color: #fff;

    }
    .header-list {
        background-color:#063961;
    }
    .header-list .el-row {
        width: 70%;
        margin-left: 15%;
    }
    .header-list .button {
        width: 95%;
        font-family: SimHei;
        text-align: center;
    }
    .header-item{
        text-align: center;
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
