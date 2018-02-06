<template>
    <section class="container">
        <div v-if="result">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="历史预约记录">
                    <div v-for="data in result">
                        <div class="history">
                            <img :src="data.device.imgFilePath" >
                            <div class="hisCont">
                                <p>{{data.device.name}}</p>
                                <div class="startTime">开始时间:{{data.apply.startDate}}</div>
                                <div class="startTime">结束时间:{{data.apply.endDate}}</div>
                                <div class="startTime">设备类型:{{data.deviceType.name}}</div>
                                <div class="startTime">是否批准使用:{{data.apply.isAgree ? '是':'否'}}</div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="历史预约记录-表格">
                    <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                prop="apply.startDate"
                                label="开始时间"
                                width="180"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                prop="apply.endDate"
                                label="结束时间"
                                width="180"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                prop="device.name"
                                label="仪器名称"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                prop="deviceType.name"
                                label="仪器类型"
                                width="350"
                                align="left">
                        </el-table-column>
                        <!-- <el-table-column
                                label="操作"
                                width="120" 
                                align="left">
                            <template slot-scope="scope">
                                <el-button type="text" @click="open2">取消</el-button>
                            </template>
                        </el-table-column> -->
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div v-else>
            <h1>与服务器断开连接</h1>
        </div>
    </section>
</template>

<style scoped>
    .el-tabs__content{
        overflow: visible!important;
    }
    .history{
        width: 30%;
        height:161px;
        min-width: 287px;
        margin-bottom: 10px;
        margin-left: 2.5%;
        float: left;
        display: block;
    }
    img{
        width: 40%;
        height: 100%;
        float: left;
        background-size: 100% 100%;
    }
    .hisCont{
        width: 60%;

        float: right;
        height: 80%;
        margin-top: 8%;
    }
    .hisCont p{
        width: 100%;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .startTime{
        width: 100%;
        height: 20px;
        margin-top: 5px;
    }
</style>


<script>
    import axios from 'axios'
    export default {
        methods: {

        },
        data() {
            return {
                tableData: [],
                tabPosition: '',
                result: [
                    {
                        device: null,
                        deviceType: null,
                        apply: null
                    }
                ]
            }
        },
        async mounted(){
            if( ! this.$store.state.authUser) window.location.href ='/login'
            this.tableData = this.result
        },
        async asyncData({req}){
            // console.log(req.cookies.get('authUser')) 在这里是访问不到cookies的
            //手动解析cookie
            if(process.server){ //仅从服务端加载的时候才存在req
                if(req.headers.cookie && req.headers.cookie.indexOf('authUser') > -1){
                    if(req.headers.cookie.split('=')[1]){
                        //cookie 存在的情况下，不存在则跳转到登陆页面吧
                        let userAccount = req.headers.cookie.split('=')[1]
                        let resData = await axios.post('/api/user/getPersonal', {
                            account : userAccount
                        })
                        if(resData.data.status === 1){
                            return {
                                result: resData.data.result,
                            }
                        }else{
                            console.log(resData.data.message)
                            return {
                                result: []
                            }
                        }
                    }
                }
            }else{
                //客户端渲染的情况，当然也需要
            }
        }
    }
</script>
