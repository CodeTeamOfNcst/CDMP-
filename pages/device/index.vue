<template>
    <div>
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
                    <el-menu @select="typeSelect">
                        <div v-for="deviceType in deviceTypes">
                            <el-menu-item index="Number.parseInt(deviceType.value)" >
                                <span slot="">{{deviceType.label}}</span>
                            </el-menu-item>
                        </div>
                    </el-menu>
                </div>
            </div>
            <div class="grid-content bg-purple key-content">
                <div v-for="device in devices">
                    <div class="oneDevice">
                        <el-row :gutter="20" class="leftImg">
                            <el-col :span="8" class="leftspan">
                                <div class="grid-content bg-purple bullImg">
                                    <a href="device/details">
                                        <img :src="device.imgFilePath" alt="Nuxt.js Logo" class="logo" />
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
                                                                <p class="bullName">{{device.name}}</p>
                                                            </a>
                                                        </div>
                                                    </el-col>
                                                    <el-col :span="3">
                                                        <div class="grid-content bg-purple-light button_center" >
                                                            <a :href="`device/appoint/${device.id}`">
                                                                <el-button type="primary" class="appoint">预约</el-button>
                                                            </a>
                                                        </div>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row class="maketop">
                                        <el-row :gutter="20" class="contactUser mainInfor">
                                            <el-col :span="8"><div class="grid-content bg-purple">购买日期</div></el-col>
                                            <el-col :span="16"><div class="grid-content bg-purple">{{device.date}}</div></el-col>
                                        </el-row>
                                        <el-row :gutter="20" class="contactUser">
                                            <el-col :span="8"><div class="grid-content bg-purple">设备分类</div></el-col>
                                            <el-col :span="16"><div class="grid-content bg-purple">{{device.type}}</div></el-col>
                                        </el-row>
                                        <el-row :gutter="20" class="contactUser mainInfor">
                                            <el-col :span="8"><div class="grid-content bg-purple">设备状态</div></el-col>
                                            <el-col :span="16"><div class="grid-content bg-purple">{{device.canReserve ? '可预约': '不可预约' }}</div></el-col>
                                        </el-row>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </section>
        <section class="el-dialog--center">
            <div class="grid-content pagination "style="z-index: 999999;">
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark paging" >
                            <el-pagination
                                    :page-size="10"
                                    background
                                    @current-change="handlePageChange"
                                    layout="prev, pager, next"
                                    :total="deviceCounts" class="lalala">
                            </el-pagination>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .pagination{
        padding: 20px;
    }
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
        height: auto;
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
    import axios from 'axios'
    export default {
        data() {
            return {
                deviceCounts: null,
                devices:[
                    {
                        id: 'id',
                        date: 'purchaseDate',
                        name: 'name',
                        disable: '',
                        type: 'name',
                        imgFilePath: 'imgFilePath',
                        canReserve:'canReserve',
                    }
                ],
                deviceTypes:[
                    {
                        key: 1,
                        label: '计算机系'
                    }
                ],
                input5: '',
                select: '',
                deviceName:'全自动智能倒置显微镜及金相分析系统',
                userName:'李云龙',
                address:'核心区教学楼E座304',
                phone:'1234567891',
            }
        },
        methods:{
            typeSelect(index, path){
                //  根据选择的内容筛选相应的仪器设备
                console.log(index)
            },
            async handlePageChange(page){
                let resData = await axios.get(`/api/device/getAll/${page}`);
                if(resData.data.status === 1){
                    this.devices = resData.data.Devices;
                }else {
                    this.$message.error(resData.data.message)
                }
            }
        },
        mounted(){
            this.deviceCounts = this.counts;
        },
        async asyncData({}) {
            let  resData  = await axios.get(`/api/device/getAll/1`);
            return {
                counts: resData.data.counts,
                devices: resData.data.Devices,
                deviceTypes: resData.data.DeviceTypes
            }
        },
    }
</script>