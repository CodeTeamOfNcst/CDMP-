
<template>

    <div class="all">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-top">
                    <el-row class="top-content">
                        <el-col :span="8"><div class="grid-content bg-purple">
                                <div class="orderbefore"></div>
                                <span class="order"> <i class="el-icon-d-arrow-right"></i> 通知公告</span>

                            </div>
                            <!--<el-row class="headerline">-->
                                <!--<el-col :span="24"></el-col>-->
                            <!--</el-row>-->
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
                            <!--<el-row class="headerline">-->
                                <!--<el-col :span="24"></el-col>-->
                            <!--</el-row>-->
                        </div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple" v-show="login_show">
                            <!--<div class="orderbefore"></div>-->
                            <!--<span class="order"> <i class="el-icon-d-arrow-right"></i> 登录</span>-->
                            <!--<el-row class="headerline">-->
                                <!--<el-col :span="24"></el-col>-->
                            <!--</el-row>-->

                            <div class="login">
                                <el-tabs v-model="activeName" type="card">
                                    <el-tab-pane  label="登录" name="first" label-width="70px">
                                        <el-form  class="loginform" label-width="60px">
                                            <div id="example">
                                                <div id="login">
                                                    <template v-if="userName">
                                                        <span class="welcome">欢迎您，{{animateUserName}}</span>
                                                        <a class="OriginLogout" href="#none" @click="logout" >退出登录</a>

                                                    </template>
                                                    <template v-else>
                                                        <el-form-item label="账号">
                                                            <el-input type="text" class="input1" v-model="inputUserName"/>
                                                        </el-form-item>
                                                        <el-form-item label="密码">
                                                            <el-input class="input1" v-model="password"/>
                                                        </el-form-item>
                                                        <!--<el-button class="originLogin"><a href="#none" @click="login">登录</a></el-button>-->
                                                        <!--<input  placeholder="请输入用户名" v-model="inputUserName"/>-->
                                                        <a href="#none" class="OriginLogin" @click="login">登录</a>
                                                        <div class="error">{{errorTip}}</div>
                                                    </template>
                                                </div>
                                            </div>

                                        </el-form>

                                    </el-tab-pane>
                                    <el-tab-pane label="注册" name="second" label-width="80px">
                                        <el-form class="loginform" label-width="70px">
                                            <el-form-item label="账号">
                                                <el-input class="input1" v-model="account"/>
                                            </el-form-item>
                                            <el-form-item label="密码">
                                                <el-input class="input1" v-model="password"/>
                                            </el-form-item>
                                            <el-form-item label="确认密码">
                                                <el-input class="input1" v-model="repeat_password"/>
                                            </el-form-item>
                                            <el-button class="loginbutton" type="primary">注册</el-button>
                                        </el-form>
                                    </el-tab-pane>
                                    <el-tab-pane label="管理员登录" name="third" label-width="80px">
                                        <el-form class="loginform" label-width="60px">
                                            <el-form-item label="账号">
                                                <el-input class="input1" v-model="account"/>
                                            </el-form-item>
                                            <el-form-item label="密码">
                                                <el-input class="input1" v-model="password"/>
                                            </el-form-item>
                                        </el-form>
                                        <el-button class="loginbutton" type="primary">登录</el-button>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>
                        </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-middle">
                    <el-col :span="8"><div class="grid-content bg-purple">
                        <div class="orderbefore"></div>
                        <span class="order"> <i class="el-icon-d-arrow-right"></i> 系统使用说明</span>
                        <!--<el-row class="headerline">-->
                            <!--<el-col :span="24"></el-col>-->
                        <!--</el-row>-->

                    </div></el-col>
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

                    <!--<el-row class="headerline">-->
                        <!--<el-col :span="24"></el-col>-->
                    <!--</el-row>-->
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
        margin-top: 50px;
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
        width: 330px;
        margin: 35px 0 0 5px;
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
    .loginform{
        margin-top:30px;
    }
    .loginbutton{
        margin:20px 0 0 130px;
    }
    .welcome{
        margin-left: 25%;
        font-size: 25px;
    }
    .OriginLogin{
        display:block;
        margin:30px 0 0  43%;
        background-color: #3498DB;
        width:50px;
        height:30px;
        text-align: center;
        border-radius: 5px;
    }
    .OriginLogout{
        display:block;
        margin:20px 0 0 35%;
        background-color: #3498DB;
        width:70px;
        height:30px;
        border-radius: 5px;

    }
    .el-tabs__nav-wrap{
        width:300px;
    }
    /*.headerline{*/
        /*margin-top: 50px;*/
    /*}*/
</style>
<script>

//    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import axios from 'axios'
import ElButton from "../node_modules/element-ui/packages/button/src/button.vue";
    export default {
//        ,
        components: {ElButton},
        data() {
            return {
                input5: '',
                select: '',
                activeName: 'first',
                account: '',
                password: '',
                repeat_password: '',
                login_show: true,
                userName: '',
                inputUserName: '',
                animateUserName: '',
                errorTip: '',
                intervalId: 0
            }
        },
        methods: {
            login: function () {
                var _this = this
                if(_this.inputUserName) {
                    _this.userName = _this.inputUserName
                    _this.inputUserName = ''
                } else {
                    _this.errorTip = '请先输入用户名！'
                }
            },
            logout: function () {
                var _this = this
                _this.userName = ''
            },
             async handleUserLogin(tab, event){
                let user_account = this.account
                let user_password = this.password
                let result = await axios.post('/api/user/login', {
                    account: user_account,
                    passwd: user_password
                })
                 if(result.data.status === 1) {
                     //登陆成功
                     this.$message({
                         message: result.data.message,
                         type: 'success'
                     });
                     this.login_show = false
                 }else {
                    //登陆失败
                     this.$message.error(result.data.message);
                 }
            },
            async handleAdminLogin(tab, event){
                let user_account = this.account
                let user_password = this.password
            },
            async handleUserRegist(tab, event){
                let user_account = this.account
                let user_password = this.password
                let user_repeat_password = this.repeat_password
            }
        },
        head() {
            return {
                title: 'CDMP 设备预约平台'
            }
        },
        watch: {
            inputUserName: function () {
                var _this = this
                _this.errorTip = ''
            },
            userName: function () {
                var _this = this
                var len = 1
                this.animateUserName = ''
                clearInterval(_this.intervalId)
                _this.intervalId = setInterval(function () {
                    if(len <= _this.userName.length) {
                        _this.animateUserName = _this.userName.substr(0, len++)
                    } else {
                        clearInterval(_this.intervalId)
                    }
                }, 50)
            }
        }
    }
</script>
