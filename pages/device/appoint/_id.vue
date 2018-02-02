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
                                    v-model="device_name"
                                    :disabled="true">
                            </el-input>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>仪器类型:</p>
                        <div class="fillOutName">
                            <el-input
                                    placeholder="xxxxxxxxxxxx"
                                    v-model="deviceType"
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
                                    v-model="input3"
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
                            <el-input v-model="content" placeholder="请输入内容" type="textarea"></el-input>
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
                                    :picker-options="pickerOptions2"
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
                    <el-button @click="over" type="info" plain>取消</el-button>
                    <el-button :plain="true" @click="open2" type="primary">提交</el-button>
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
        methods: {
                over () {
                window.history.back(-1);
                },
                open2 () {
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    });
                },
        },
        data(){
            return{
                device_name: null,
                deviceType: null,
                content: null,
                date: [],

            }
        },
        async asyncData(context){
          return {
              context: context.body
          }
        },
        async mounted(){
            let resData = await axios.get('/api/auth/checkLogIn')
            console.log(resData.data);   
        }
    }
</script>