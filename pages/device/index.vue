<template>
    <section class="container">
        <div class="headerName">
            <div class="leftSty"></div>
            <el-row :gutter="20">
                <el-col :span="15" class="padding">
                    <div class="grid-content bg-purple">
                        <span class="bullCont">仪器列表</span>
                    </div>
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
        <el-row class="headerline"></el-row>
        <div class="grid-content bg-purple keyword">
            <div class="chanceKey">
                <el-row class="keyContent">
                    <el-col :span="24"><div class="grid-content bg-purple-dark">显示全部</div></el-col>
                </el-row>
                <el-row class="keyContent">
                    <el-col :span="24"><div class="grid-content bg-purple-dark">信息院</div></el-col>
                </el-row>
                <el-row class="keyContent">
                    <el-col :span="24"><div class="grid-content bg-purple-dark">化工院</div></el-col>
                </el-row>
            </div>
        </div>
        <div class="grid-content bg-purple key-content">
            <div class="oneDevice">
                <el-row :gutter="20" class="leftImg">
                    <el-col :span="8" class="leftspan">
                        <div class="grid-content bg-purple bullImg">
                            <a href="device/details">
                                <img src="~/assets/img/yiqi.png" alt="Nuxt.js Logo" class="logo" />
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content bg-purple">
                            <el-row class="topOneCol">
                                <el-col :span="24">
                                    <div class="grid-content bg-purple-dark">
                                        <el-row>
                                            <el-col :span="17">
                                                <div class="grid-content bg-purple nameFrame">
                                                    <a href="device/details">
                                                        <p class="bullName">{{deviceName}}</p>
                                                    </a>
                                                </div>
                                            </el-col>
                                            <el-col :span="3">
                                                <div class="grid-content bg-purple-light button_center" >
                                                    <a href="device/appoint">
                                                        <el-button type="primary" class="appoint">预约</el-button>
                                                    </a>
                                                </div>
                                            </el-col>
                                            <el-col :span="3">
                                                <div class="grid-content bg-purple">
                                                    <el-button type="warning" class="appoint">送样</el-button>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row class="maketop">
                                <el-row :gutter="20" class="contactUser mainInfor">
                                    <el-col :span="8"><div class="grid-content bg-purple">联系人</div></el-col>
                                    <el-col :span="16"><div class="grid-content bg-purple">{{userName}}</div></el-col>
                                </el-row>
                                <el-row :gutter="20" class="contactUser">
                                    <el-col :span="8"><div class="grid-content bg-purple">地址</div></el-col>
                                    <el-col :span="16"><div class="grid-content bg-purple">{{address}}</div></el-col>
                                </el-row>
                                <el-row :gutter="20" class="contactUser mainInfor">
                                    <el-col :span="8"><div class="grid-content bg-purple">电话</div></el-col>
                                    <el-col :span="16"><div class="grid-content bg-purple">{{phone}}</div></el-col>
                                </el-row>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .el-select{
        width: 130px;
    }
    .input-with-select {
        background-color: #fff;
    }
    a{
        text-decoration:none;
        color: black;
    }
    .keyword{
        width: 240px;
        float: left;
    }
    .key-content{
        width: 80%;
        float: right;
        height: auto;
    }
    .padding{
        padding: 0px !important;
    }
    .inputCont{
        line-height: 50px;
        width: 85%;
        float: right;
        margin-right: 10px;
    }
    .chanceKey{
        width: 80%;
        margin-left: 10%;
        height: 200px;
        margin-top: 25px;
        background: #ECECEC;
    }
    .keyContent{
        width: 80%;
        height: 28%;
        background: #ffffff;
        float: left;
        margin-left: 10%;
        line-height: 56px;
        margin-top: 2.5%;
        cursor: pointer;
    }
    .oneDevice{
        width: 48%;
        min-width:250px;
        float: left;
        margin-left: 1%;
        margin-top: 25px;
        height: 185px;
    }
    .leftImg{
        width: 100%;
        height: 100%;
    }
    .bullImg{
        width: 110px;
        height: 110px;
        float: right;
        margin-top: 22px;
        /*background: #2e2f30;*/
    }
    .bullImg img{
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
    }
    .topOneCol{
        margin-top: 12px;
    }
    .appoint{
        width: 100%;
        padding: 0;
        height: 25px;
    }
    .maketop{
        margin-top: 20px;
    }
    .button_center{
        text-align: center;
    }
    .nameFrame{
        height: 25px;
    }
    .bullName{
        width: 100%;
        height: 100%;
        text-align: left;
        line-height: 25px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .contactUser{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: left;
    }
    .mainInfor{
        background: #eef2f5;;
    }
    .grid-content{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
</style>

<script>
    export default {
        data() {
            return {
                input5: '',
                select: '',
                deviceName:'全自动智能倒置显微镜及金相分析系统',
                userName:'李云龙',
                address:'核心区教学楼E座304',
                phone:'1234567891',
            }
        }
    }
</script>