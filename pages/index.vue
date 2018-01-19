<template>

    <div class="all">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-top">
                    <el-row>
                        <el-col :span="8"><div class="grid-content bg-purple">
                                <div class="orderbefore"></div>
                                <span class="order"> <i class="el-icon-d-arrow-right"></i> 通知公告</span>
                                <el-row class="headerline">
                                    <el-col :span="24"></el-col>
                                </el-row>
                            </div>

                            <div >
                                <el-row class="mt-lcontent">
                                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">学校关于放假期间仪器归还问题（2018.01.15）</a></div></el-col>
                                </el-row>
                                <el-row class="strip">
                                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">关于大型仪器共享方案（2018.01.01）</a></div></el-col>
                                </el-row>
                                <el-row class="strip">
                                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">我就发发公告（2017.08.29）</a></div></el-col>
                                </el-row>
                                <el-row class="strip">
                                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">你猜这条公告是啥（2017.02.09）</a></div></el-col>
                                </el-row>
                                <el-row class="strip">
                                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">大型仪器使用流程培训（2017.01.28）</a></div></el-col>
                                </el-row>
                                <el-row class="strip">
                                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">特大型仪器使用流程培训（2017.01.26）</a></div></el-col>
                                </el-row>


                            </div>
                        </el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light">
                            <div class="orderbefore"></div>
                            <span class="order"> <i class="el-icon-d-arrow-right"></i> 图片展示</span>
                            <el-row class="headerline">
                                <el-col :span="24"></el-col>
                            </el-row>
                        </div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple">
                            <div class="orderbefore"></div>
                            <span class="order"> <i class="el-icon-d-arrow-right"></i> 登录注册</span>
                            <el-row class="headerline">
                                <el-col :span="24"></el-col>
                            </el-row>
                        </div></el-col>
                    </el-row>



                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-middle">

                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-footer">
                    <div class="mf-top">
                        <el-row>
                            <el-col :span="16">
                          <div class="orderbefore"></div>
                          <span class="order"> <i class="el-icon-d-arrow-right"></i> 仪器排行</span>
                            </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple inputCont">
                                <div>
                                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                                            <el-option label="设备名称" value="1"></el-option>
                                            <el-option label="设备分类" value="2"></el-option>
                                        </el-select>
                                        <el-button slot="append" icon="el-icon-search"></el-button>
                                    </el-input>
                                </div>
                            </div>
                        </el-col>
                        </el-row>
                    </div>

                    <el-row class="headerline">
                        <el-col :span="24"></el-col>
                    </el-row>
                    <div class="eqimg">
                        <!--<div class="ribbon"><span class="ribbon2">No.1</span></div>-->
                        <img src="../assets/img/equipment1.png" class="mf-img">
                        <p><a>仪器名称</a></p>
                    </div>
                    <div class="eqimg">
                        <!--<div class="ribbon"><span class="ribbon2">No.1</span></div>-->
                        <img src="../assets/img/equipment1.png" class="mf-img">
                        <p><a>仪器名称</a></p>
                    </div>
                    <div class="eqimg">
                        <!--<div class="ribbon"><span class="ribbon2">No.1</span></div>-->
                        <img src="../assets/img/equipment1.png" class="mf-img">
                        <p><a>仪器名称</a></p>
                    </div>
                    <div class="eqimg">
                        <img src="../assets/img/equipment1.png" class="mf-img">
                        <p><a>仪器名称</a></p>
                    </div>
                    <div class="eqimg">
                        <img src="../assets/img/equipment1.png" class="mf-img">
                        <p><a>仪器名称</a></p>
                    </div>
                    <div class="eqimg">
                        <img src="../assets/img/equipment1.png" class="mf-img">
                        <p><a>仪器名称</a></p>
                    </div>

                </div>
            </el-col>
        </el-row>
    </div>


</template>

<style scoped>
    a{
        text-decoration: none;
        color:black;
    }
    .all{
        width:100%;
        /*background-color: #41B883;*/
        height:auto;
        min-height: 600px;
    }
    .main-top{
        height:300px;
    }
    .main-middle{
        height:300px;
    }
    .main-footer{
        height:300px;
    }
    .mf-top{
        width:100%;
        height:50px;
        /*border-bottom: 1px solid #ececec;*/

    }
    .orderbefore{
        width: 5px;
        height:30px;
        float: left;
        margin-top:10px;
        background: #2e2f30;
    }
    .order{
        display:block;
        float:left;
        margin:12px 0 0 20px;
    }
    .eqimg{
        width:15%;
        float:left;
        margin-left: 1%;
        text-align:center;
    }
    .mf-img{
        border-radius:10px;
        border:2px solid #3675a8;
        margin:45px 0 0 10px;
    }
    .el-select{
        width: 130px;
    }
    /*.ribbon2 {*/
        /*display: inline-block;*/
        /*width: 36px;*/
        /*padding: 5px 0;*/
        /*background: #7495B7;*/
        /*top: 95px;*/
        /*left: 60px;*/
        /*position: absolute;*/
        /*text-align: center;*/
        /*font-size: 13px;*/
        /*border-top-left-radius: 3px;*/
        /*float:left;*/
         /**/
    /*}*/

    /*.ribbon2:after {*/
        /*content: "";*/
        /*position: absolute;*/

    /*}*/
    /*.ribbon2:after {*/
        /*height: 0;*/
        /*width: 0;*/
        /*border-left: 18px solid #7495B7;*/
        /*border-right: 18px solid #7495B7;*/
        /*border-bottom: 16px solid transparent;*/
        /*bottom: -16px;*/
        /*left: 0;*/

    /*}*/
    .mt-lcontent{
        margin:20px 0 0 5px;
    }

</style>
<script>
    export default {
        data() {
            return {
                input5: '',
                select: ''
            }
        }
    }
</script>