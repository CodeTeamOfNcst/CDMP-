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
                                    v-model="input1"
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
                                    v-model="input2"
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
                        <p>学院:</p>
                        <div class="fillOutName">
                            <el-select v-model="value" placeholder="请选择" class="selectCollege">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>专业:</p>
                        <div class="fillOutName">
                            <el-input v-model="input4" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>学号:</p>
                        <div class="fillOutName">
                            <el-input v-model="input5" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark instruName">
                        <p>联系电话:</p>
                        <div class="fillOutName">
                            <el-input v-model="input6" placeholder="请输入内容"></el-input>
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
                                    v-model="value7"
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
                    <el-button type="info" plain>提交</el-button>
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
    export default {
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                input6: '',
                options: [{
                    value: '选项1',
                    label: '信息工程学院'
                }, {
                    value: '选项2',
                    label: '化学工程学院'
                }, {
                    value: '选项3',
                    label: '理学院'
                }, {
                    value: '选项4',
                    label: '医学院'
                }],
                value: '',
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value7: ''
            }

        }
    }
</script>