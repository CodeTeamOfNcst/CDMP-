<template>
    <div>
        <div class="header_img">
            <!--<img src="../assets/img/r_bg.jpg"/>-->
            <h1>实验设备预约管理平台</h1>
        </div>
        <div class="headerlist">
            <el-row>
                <el-col :span="6"><div class="headerEle grid-content bg-purple"><nuxt-link class="button page" to="/">首页</nuxt-link></div></el-col>
                <el-col :span="6"><div class="headerEle grid-content bg-purple-light"><nuxt-link class="button page" to="/device">仪器列表</nuxt-link></div></el-col>
                <el-col :span="6"><div class="headerEle grid-content bg-purple"><nuxt-link class="button page" to="/bulletin">通知公告</nuxt-link></div></el-col>
                <el-col :span="6"><div class="headerEle grid-content bg-purple-light"><nuxt-link class="button page" to="/personal">个人中心</nuxt-link></div></el-col>
            </el-row>
            <!--<nuxt-link class="button page" to="/">首页</nuxt-link>-->
            <!--<nuxt-link class="button page" to="/device">仪器列表</nuxt-link>-->
            <!--<nuxt-link class="button page" to="/bulletin">通知公告</nuxt-link>-->
            <!--&lt;!&ndash;<nuxt-link class="button page" to="/rules">规章制度</nuxt-link>&ndash;&gt;-->
            <!--<nuxt-link class="button page" to="/personal">个人中心</nuxt-link>-->


            <!--<nuxt-link class="button page" to="/rules">规章制度</nuxt-link>-->

        </div>
    </div>
</template>
<style scoped>
    .header_img{
        width: 70%;
        margin-left:15%;
        height: 100px;
        background: url("../assets/img/bg2.png") no-repeat left 100%;
        /*background-size: 100% 100%;*/
    }
    .header_img h1{
        float: left;
        margin-left: 10%;
        color: #fafafa;
        letter-spacing: 0;
        text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 ;
    }
    .page{
        width: 277px;
        font-family: SimHei;
        text-align: center;
    }
    .nuxt-link-exact-active{
        background: #6b8db4;
        color:white;

    }
    .headerlist{
        background-color:#063961;
        width: 70%;
        margin-left:15%;
    }
    .headerEle{
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
