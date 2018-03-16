<template>
  <section class="container">
        <div v-if="result">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="云计算资源预约记录">
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
                        <!-- <el-table-column
                                prop="device.name"
                                label="设备名称"
                                align="left">
                        </el-table-column> -->
                        <el-table-column
                                prop=""
                                label="申请机时"
                                width="200"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                prop=""
                                label="剩余机时"
                                width="200"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                prop=""
                                label="登录账号"
                                width="350"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                width="" 
                                align="left">
                            <template slot-scope="scope">
                                <el-button type="text" @click="open2">查看密码</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="仪器设备预约记录">
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
                        device: [],
                        deviceType: [],
                        apply: []
                    }
                ]
            }
        },
        async mounted(){
            if(!this.$auth.state.loggedIn) 
                window.location.href ='../login'
            let resData = await axios.post('/api/user/getPersonal',{
                account: this.$auth.state.user.login_account
            })
            if(resData.data.status === 1){
                console.log(resData.data.result)
                this.result = resData.data.result
                this.tableData = resData.data.result
            }else{
                this.$message.error('获取数据失败')
            }
        },
        async asyncData(context){
            
        }
    }
</script>
