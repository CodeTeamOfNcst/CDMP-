<template>
    <div>
        <div class="header_img">
            <h1>实验设备预约管理平台后台</h1>
            <div class="grid-content bg-purple-dark userLogout">
                <div class="logout">
                    <el-button class="button_logout">退出</el-button>
                </div>
                <p>|</p>
                <p>admin</p>
            </div>
        </div>
        <div class="main_nav">
            <el-row class="nav_content">
                <nuxt-link to="/admin">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-menu icon"></i>设备管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/order">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-edit icon"></i>预约管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/user">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-setting icon"></i>用户管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/announce">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-view icon"></i>公告管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/message">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-message icon"></i>消息管理</div>
                </nuxt-link>
            </el-row>
        </div>
    </div>
</template>
<style>
    .icon{
        margin-right: 5px;
    }
    .header_img{
        width: 100%;
        min-height: 60px;
        height:auto;
        overflow: hidden;
        background: #44679F;
    }
    .nuxt-link-exact-active{
        color: #3498db;
    }
    .header_img h1{
        float: left;
        line-height: 60px;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 10%;
        color: #fafafa;
        letter-spacing: 0;
        text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 ;
    }
    .userLogout{
        width: 50%;
        min-width: 206px;
        float: right;
        height:60px;
        line-height: 60px;
        background:#44679F;
    }
    .userLogout p{
        padding-left: 20px;
        text-align: right;
        float: right;
        color:#fff;
    }
    .logout{
        height:100%;
        text-align: left;
        float: right;
        padding-left:20px;
        padding-right:20px ;
    }
    .button_logout{
        padding: 5px 20px;
    }
    .main_nav{
        width: 9%;
        min-height: 800px;
        height:auto;
        /*background: #F0F0F0;*/
        /*min-width: 98px;*/
        float: left;
        display: block;
        border-right: 1px solid #ddd;
    }
    .nav_content{
        width: 100%;
        min-height: 80px;
        height:auto;
        text-align: center;
        line-height: 80px;
        /*border-right: 1px solid #ddd;*/
        border-bottom: 1px solid #ddd;
    }
    a{
        text-decoration:none;
        out-line: none;
        color: #2e2f30;
    }
</style>

<script>
    import  NuxtLink  from '../.nuxt/components/nuxt-link'

    export default {
      components: { NuxtLink },
      methods: {
//            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
//            },
//            handleClose(key, keyPath) {
//                console.log(key, keyPath);
//            }
        }
    }
</script>