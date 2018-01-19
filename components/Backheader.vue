<template>
    <div>
        <div class="header_img">
            <h1>实验设备预约管理平台后台</h1>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark userLogout">
                        <div class="logout">
                            <el-button class="button_logout">退出</el-button>
                        </div>
                        <p>|</p>
                        <p>admin</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="main_nav">
            <el-row class="nav_content">
                <el-col :span="24">
                    <a href="/admin">
                        <div class="grid-content bg-purple-dark">仪器设备</div>
                    </a>
                </el-col>
            </el-row>
            <el-row class="nav_content">
                <a href="/backappoint">
                    <div class="grid-content bg-purple-dark">预约</div>
                </a>
            </el-row>
            <el-row class="nav_content">
                <a href="">
                    <div class="grid-content bg-purple-dark">公告</div>
                </a>
            </el-row>
        </div>
    </div>
</template>
<style>
    .header_img{
        width: 100%;
        min-height: 50px;
        height:auto;
        overflow: hidden;
        background: #37474F;
    }
    .header_img h1{
        float: left;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 10%;
        color: #fafafa;
        letter-spacing: 0;
        text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 ;
    }
    .userLogout{
        width: 100%;
        height:30px;
        line-height: 30px;
        background: #37474F;
        border-bottom: 1px solid #ddd;
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
        min-width: 98px;
        float: left;
        display: block;

    }
    .nav_content{
        width: 100%;
        height: 80px;
        text-align: center;
        line-height: 80px;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
    a{
        text-decoration:none;
        out-line: none;
        color: #2e2f30;
    }
</style>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>