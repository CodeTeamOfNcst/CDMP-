
<template>
    <div class="all">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark main-middle">
                    <el-col :span="16">
                        <div class="grid-content bg-purple">
                            <div class="orderbefore"></div>
                            <span class="order"> 
                                <i class="el-icon-d-arrow-right"></i> 通知公告
                                <!-- <span class="noticemore">更多</span> -->
                            </span>
                            <div class="indnotice">
                                
                                <div v-for="rule in rulesDetail">
                                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a :href='"/notice/" + rule.id'>{{ rule.title }} 发布时间：{{ rule.publishDate }} </a></div></el-col>
                                    </div>
                            </div>
                        </div>
                         
                         
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <el-col :span="24">
                                <div class="login grid-content bg-purple">
                                    <div class="Welcome" v-if="login_show === false">
                                        <template>
                                            <el-row :gutter="20">
                                                <span class="welcome">欢迎您，{{ animateUserName }}</span>
                                            </el-row>
                                            <el-row>
                                                <el-col :span="6" :offset="3">
                                                    <el-button  @click="handleUserLogOut" class="OriginLogout">退出登录</el-button>
                                                </el-col>
                                                <el-col :span="6" :offset="3" v-if="user_is_admin === true">
                                                    <el-button  @click="toAdmin" class="OriginLogout">后台管理</el-button>
                                                </el-col>
                                                <el-col :span="6" :offset="3" v-if="user_is_admin === false">
                                                    <el-button  @click="toPersonal" class="OriginLogout">个人中心</el-button>
                                                </el-col>
                                            </el-row>
                                        </template>
                                    </div>
                                    <div v-if="login_show === true">
                                        <template>
                                            <el-tabs v-model="activeName" type="card">
                                                <el-tab-pane  label="登录" name="first" label-width="70px">
                                                    <el-form  class="loginform" label-width="60px">
                                                        <div id="example">
                                                            <div id="login">         
                                                                <template>
                                                                    <el-form-item label="账号">
                                                                        <el-input type="text" class="input1" v-model="user_account"/>
                                                                    </el-form-item>
                                                                    <el-form-item label="密码">
                                                                        <el-input class="input1" v-model="user_password" type="password" auto-complete="off"/>
                                                                    </el-form-item>
                                                                    <el-form-item>
                                                                        <el-row>
                                                                            <el-col :span="6" :offset="6">
                                                                                <el-button @click="handleUserLogin" class="userlogin">登录</el-button>
                                                                            </el-col>
                                                                        </el-row>
                                                                    </el-form-item>
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </el-form>
                                                </el-tab-pane>
                                                <el-tab-pane label="注册" name="second" label-width="80px">
                                                    <el-form class="loginform" label-width="70px">
                                                        <el-form-item label="账号">
                                                            <el-input class="input1" v-model="user_account" auto-complete="off"/>
                                                        </el-form-item>
                                                        <el-form-item label="密码">
                                                            <el-input class="input1" v-model="user_password" auto-complete="off" type="password"/>
                                                        </el-form-item>
                                                        <el-form-item label="重复">
                                                            <el-input class="input1" v-model="repeat_password" auto-complete="off" type="password"/>
                                                        </el-form-item>
                                                        <el-form-item>
                                                            <el-button @click="handleUserRegist" plain>注册</el-button>
                                                        </el-form-item>
                                                    </el-form>
                                                </el-tab-pane>
                                            </el-tabs>
                                        </template>
                                    </div>
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
                                    <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
                                        <el-button slot="append" icon="el-icon-search" @click="searchBtnClick"></el-button>
                                    </el-input>
                                </div>
                            </div>
                        </el-col>
                        </el-row>
                    </div>
                    <el-carousel :interval="3000" type="card" height="200px" width="900px">
                        <div v-for="item in devices">
                            <el-carousel-item >
                                <img :src="item.imgFilePath"/>
                            </el-carousel-item>
                        </div>
                    </el-carousel>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .el-carousel__item:nth-child(2n) {
        width:auto;
        height:auto;
        margin-left: 170px;
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        width:auto;
        height:auto;
        margin-left: 170px;
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
        padding:12px 10px;
        color: #fff;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        margin:20px 0 0 5%;
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
    .welcome{
        margin:20px 0 0 5%;
    }
    .indnotice{
        width:400px;
        height:300px;
    }

</style>
<script>
    import axios from 'axios'
    import { Button } from 'element-ui'
    export default {
        components: {
            Button
        },
        data() {
            return {
                login_show: true,
                user_is_admin: false,
                searchInput: '',
                user_account: '',
                user_password: '',
                activeName: 'first',
                repeat_password: '',    
                userName: '',
                inputUserName: '',
                animateUserName: '',
                intervalId: 0,
                user_messages:[],
                img_key: null,
                data:'学校关于放假期间仪器归还问题（2018.01.15）',
                ruleCount: null,
                rulesDetail: null,
               
            }
        },
        methods: {
            toAdmin(){
                window.location.href = '/admin'
            },
            toPersonal(){
                window.location.href = '/personal'
            },
            searchBtnClick(){
                window.location.href = '/device'
            },
            async handleUserLogin(tab, event){  // 处理用户登陆
                if(!this.user_account || !this.user_password){
                    this.$message.error("请输入用户名和密码");
                }else{
                    let resData =  await this.$auth.login({
                                    data: {
                                        account: this.user_account,
                                        passwd: this.user_password
                                    }
                    })
                    if(this.$auth.state.user.account){
                        window.location.reload()
                    }else{
                        this.$message.error("用户名或密码错误")
                    }
                }
            },
            async handleUserRegist(tab, event){
                let user_account = this.user_account
                let user_password = this.user_password
                let user_repeat_password = this.repeat_password
                if(user_password !== user_repeat_password){
                    this.$message.error("两次输入的密码不一致");
                    return
                }else{
                    let resData = await axios.post('/api/auth/regist',{
                        account: user_account,
                        passwd: user_password
                    })
                    if(resData.data.status === 1){
                        this.login_show = false
                        this.animateUserName = user_account
                        this.$message({
                            message: resData.data.message,
                            type: 'success'
                        });
                    }else{
                        this.$message.error(resData.data.message);
                    }
                }
            },
            async handleUserLogOut(){
                let resData = await this.$auth.logout()
                window.location.reload()
            },
        },
        watch: { //登陆后用户名浮动特效
            userName() {
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
        async mounted(){
            await this.$auth.fetchUser()
            console.log(this.$auth.state.user)
            if(this.$auth.state.user){
                this.login_show = false,
                this.animateUserName = this.$auth.state.user.login_account;
                if(this.$auth.state.user.scope.length === 3){
                    this.user_is_admin = true
                }
            }
        },
        async asyncData(context){
            let  resData  = await axios.get(`/api/device/getAll/1`);
            return {
                counts: resData.data.counts,
                devices: resData.data.Devices,
                deviceTypes: resData.data.DeviceTypes,
            }
            
        },
    //     async asyncData(context){
    //     let resData = await axios.get('api/rule/getAll')
    //     if(resData.data.status === 1)
    //         return {
    //             count: resData.data.counts,
    //             rulesDetail: resData.data.rulesDetail
    //         }
    // },
     
    mounted(){
        this.ruleCount = this.count;
    },
        head() {
            return {
                title: 'CDMP 设备预约平台'
            }
        },
    }
</script>
