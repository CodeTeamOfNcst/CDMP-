<template>

    <div class="all">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-top">
                    <el-row class="top-content">
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
                            <div class="login">
                                <el-tabs v-model="activeName"  @tab-click="handleClick">
                                    <el-tab-pane  label="登录" name="first" label-width="80px">
                                        <el-form  class="loginform" label-width="80px">
                                            <el-form-item label="用户名">
                                                <el-input class="input1" ></el-input>
                                            </el-form-item>
                                            <el-form-item label="密 码">
                                                <el-input class="input1" ></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <el-button class="loginbutton" type="primary">登录</el-button>
                                    </el-tab-pane>
                                    <el-tab-pane label="注册" name="second" label-width="80px">
                                        <el-form class="loginform" label-width="80px">
                                            <el-form-item label="用户名">
                                                <el-input class="input1"></el-input>
                                            </el-form-item>
                                            <el-form-item label="密码">
                                                <el-input class="input1"></el-input>
                                            </el-form-item>
                                            <el-button class="loginbutton" type="primary">注册</el-button>
                                        </el-form>

                                    </el-tab-pane>
                                    <el-tab-pane label="管理员登录" name="third" label-width="80px">
                                        <el-form class="loginform" label-width="80px">
                                            <el-form-item label="用户名">
                                                <el-input class="input1" ></el-input>
                                            </el-form-item>
                                            <el-form-item label="密码">
                                                <el-input class="input1"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <el-button class="loginbutton" type="primary">登录</el-button>
                                    </el-tab-pane>


                                </el-tabs>

                            </div>
                        </div></el-col>


                    </el-row>




                </div>
            </el-col>
        </el-row>
        <!--<el-row>-->
            <!--<el-col :span="24">-->
                <!--<div class="grid-content bg-purple-dark main-middle">-->
                    <!--<el-col :span="8"><div class="grid-content bg-purple">-->
                        <!--<div class="orderbefore"></div>-->
                        <!--<span class="order"> <i class="el-icon-d-arrow-right"></i> 系统使用说明</span>-->
                        <!--<el-row class="headerline">-->
                            <!--<el-col :span="24"></el-col>-->
                        <!--</el-row>-->
                    <!--</div></el-col>-->
                <!--</div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-footer">
                    <div class="mf-top">
                        <el-row>
                            <el-col :span="16">
                          <div class="orderbefore"></div>
                          <span class="order"> <i class="el-icon-d-arrow-right"></i> 仪器展示</span>
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
        height:400px;
    }
    /*.top-content{*/
        /*margin-top: 50px;*/
    /*}*/
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
    .login{
        width: 350px;
        margin:40px 0 0 50px;
        height:300px;
        /*background-color: #41B883;*/
    }

    .mt-lcontent{
        margin-top:80px;
    }
    .el-select{
        width: 130px;
    }
    .inputCont{
        margin-right: 80px;
    }
    .input1{
        width: 250px;

    }
    .loginbutton{
        margin-left: 100px;
    }
    .el-tabs__nav-wrap{
        width:300px;
    }



</style>
<script>
    export default {
        data() {
            return {
                input5: '',
                select: '',
                activeName: 'second',

            }

        },

        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>
