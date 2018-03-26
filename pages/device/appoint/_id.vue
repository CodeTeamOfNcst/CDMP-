<template>
    <div class="container">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">仪器预约</span>
        </div>
        <el-row class="headerline"></el-row>
        <div class="appointCont">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>仪器名称:</p>
                        <div class="fillOutName">
                            <el-input
                                    placeholder="全自动智能倒置显微镜及金相分析系统"
                                    v-model="device.name"
                                    :disabled="true">
                            </el-input>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>仪器分类:</p>
                        <div class="fillOutName">
                            <el-input
                                    placeholder="xxxxxxxxxxxx"
                                    v-model="device.device_type_name"
                                    :disabled="true">
                            </el-input>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>预约人:</p>
                        <div class="fillOutName">
                            <el-input
                                    placeholder="登录后自动获取"
                                    v-model="user"
                                    :disabled="true">
                            </el-input>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>预约理由:</p>
                        <div class="fillOutName">
                            <el-input v-model="vioReason" placeholder="请输入内容" type="textarea"></el-input>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>预约时间:</p>
                        <div class="fillOutTime">
                            <el-date-picker
                                    v-model="date"
                                    type="daterange"
                                    align="right"
                                    unlink-panels
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    class="timePicker">
                            </el-date-picker>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-row class="submit_appoint">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-button :plain="true" @click="handleSubmit" type="primary">提交</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .appointCont{
        width: 100%;
        margin-top: 70px;
    }
    .instruName p{
        width: 35%;
        min-width: 73px;
        float: left;
        text-align: right;
        line-height:40px;
    }
    .fillOutName{
        width: 30%;
        min-width: 214px;
        padding: 3px;
        float: left;
    }
    .fillOutTime{
        width: 30%;
        min-width: 214px;
        padding: 3px;
        float: left;
    }
    .selectCollege{
        width: 100%;
    }
    .timePicker{
        width: 100%;
    }
    .submit_appoint{
        margin-top: 20px;
    }
</style>

<script>
    import axios from 'axios'
    export default {
        methods() {
            return{
                async handleSubmit(){
                    if(!(this.vioReason) || !(this.date)){
                        this.$message.error("请填写所有信息")
                        return
                    }
                    let resData = await axios.post('/api/apply/addApplyFront', {
                        deviceId: this.device.id,
                        vioReason: this.vioReason,
                        startDate: this.date[0],
                        endDate: this.date[1]
                    })
                    if(resData.data.status === 1){
                        this.$message({
                            message: resData.data.message,
                            type: 'success'
                        });
                        window.location.href = '/device'
                    }else{
                        this.$message.error(resData.data.message)
                    }
                }
            }
                
        },
        data(){
            return{
                device_name: null,
                deviceType: null,
                content: null,
                date: [],
                vioReason: '',
                user: null,
                device: {},
            }
        },
        async mounted(){
            if(! this.$auth.state.loggedIn) window.location.href ='/login'
            this.user = this.$auth.state.user.login_account
        },
        async asyncData({params}){
            let resData = await axios.post('/api/device/getById', { id: params.id})
            if(resData.data.status === 1){
                return {
                    device: resData.data.device
                }
            }
        }
    }
</script>