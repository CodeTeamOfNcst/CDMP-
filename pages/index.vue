
<template>

    <div class="all">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-middle">
                    <el-col :span="16"><div class="grid-content bg-purple">
                        <div class="orderbefore"></div>
                        <span class="order"> <i class="el-icon-d-arrow-right"></i> 系统使用说明</span>
                    </div>
                        <el-col :span="20" :offset="2">
                            <div class="video grid-content bg-purple">
                                <video id="my_video_1" class="video-js vjs-default-skin" width="600px" height="300px" controls
                                       data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
                                    <source src="/api/video/getStream" type='video/mp4' />
                                </video>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple" v-show="login_show">
                            <el-col :span="24">
                            <div class="login grid-content bg-purple">
                                <el-tabs v-model="activeName" type="card">
                                    <el-tab-pane  label="登录" name="first" label-width="70px">
                                        <el-form  class="loginform" label-width="60px">
                                            <div id="example">
                                                <div id="login">
                                                    <template v-if="userName">
                                                        <span class="welcome">欢迎您，{{ animateUserName }}</span>
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
                        </el-col>
                        </div>
                    </el-col>
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
                                        <el-button slot="append" icon="el-icon-search"></el-button>
                                    </el-input>
                                </div>
                            </div>
                        </el-col>
                        </el-row>
                    </div>
                    <el-carousel :interval="3000" type="card" height="200px" width="900px">
                        <el-carousel-item v-for="item in devices" :key="item">
                            <img :src="item.imgFilePath"/>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 20px 5px 0 0;
    }
    .el-carousel__item:nth-child(2n) {
        width:274px;
        margin-left: 110px;
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        width:274px;
        margin-left: 110px;
        background-color: #d3dce6;
    }

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

    .login{
        margin: 65px 0 0 5px;
        height:320px;
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
        margin-left:130px;
    }
    .welcome{
        margin-left: 25%;
        font-size: 25px;
    }
    .OriginLogin{
        display:inline-block;
        padding:12px 20px;
        margin:30px 0 0  36%;
        background-color: #66b1ff;
        text-align: center;
        border-radius: 5px;
        color: #fff;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
    }
    .OriginLogout{
        display:inline-block;
        padding:12px 20px;
        color: #fff;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        margin:30px 0 0 35%;
        background-color: #66b1ff;
        border-radius: 5px;
    }
    .video{
        margin-top: 30px;
        height:300px;
    }
    .el-tabs__nav-wrap{
        width:300px;
    }

</style>
<script>

    import axios from 'axios'
    import ElButton from "../node_modules/element-ui/packages/button/src/button.vue";
    export default {
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
        },
        mounted(){

        },
        async asyncData(){
            let  resData  = await axios.get(`/api/device/getAll/1`);
            return {
                counts: resData.data.counts,
                devices: resData.data.Devices,
                deviceTypes: resData.data.DeviceTypes
            }
        }

    }
</script>
