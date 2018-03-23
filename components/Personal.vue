<template>
  <section class="container">
        <div v-if="result">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="云计算资源预约记录">
                    <div v-if="chance">
                        <el-table
                                :data="tableData1"
                                stripe
                                style="width: 100%">
                            <el-table-column
                                    prop="startDate"
                                    label="开始时间"
                                    width="180"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="endDate"
                                    label="结束时间"
                                    width="180"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="applyTime"
                                    label="申请机时"
                                    width="200"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="restTime"
                                    label="剩余机时"
                                    width="200"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="status"
                                    label="预约状态"
                                    width="350"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="operation1"
                                    label="操作"
                                    width="" 
                                    align="left">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="open2">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div v-else>
                        <el-table
                                :data="tableData"
                                stripe
                                style="width: 100%">
                            <el-table-column
                                    prop="startTime"
                                    label="开始时间"
                                    width="180"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="endTime"
                                    label="结束时间"
                                    width="180"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="applyTime"
                                    label="申请机时"
                                    width="200"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="restTime"
                                    label="剩余机时"
                                    width="200"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="signNumber"
                                    label="登录账号"
                                    width="350"
                                    align="left">
                            </el-table-column>
                            <el-table-column
                                    prop="operation"
                                    label="操作"
                                    width="" 
                                    align="left">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="dialogFormVisible = true">查看密码</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-dialog title="提示" :visible.sync="dialogFormVisible">
                            <el-form :model="form2">
                                <el-form-item label="登录密码" :label-width="formLabelWidth">
                                    <el-input v-model="form2.password" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="邮箱" :label-width="formLabelWidth">
                                    <el-input v-model="form2.email" clearable></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                    </div>
                    
                    <el-row style="margin-top:10px;float:right;">
                        <el-switch
                            v-model="chance"
                            active-text="历史记录"
                            inactive-text="正在使用">
                        </el-switch>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="仪器设备预约记录">


                    <!-- <div v-for="data in result">
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
                    </div> -->


                    <div v-for="user in usersDetail">
                        <el-col :span="24"><div>{{ user.user.account }}</div></el-col>
                    </div>
                   
                </el-tab-pane>
                 <el-tab-pane label="个人信息">
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-row>
                            <el-col :span="15">
                                <div class="grid-content bg-purple-dark format">
                                    <el-form-item label="账号">
                                        <el-input v-model="form.account" :disabled="true"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div class="grid-content bg-purple-dark format">
                                    <el-form-item label="密码">
                            <el-input v-model="form.password" :disabled="true"></el-input>
                        </el-form-item>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div class="grid-content bg-purple-dark format">
                                    <el-form-item label="用户名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div class="grid-content bg-purple-dark format">
                                    <el-form-item label="用户邮箱">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div class="grid-content bg-purple-dark format">
                                    <el-form-item label="用户手机号">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                                </div>
                            </el-col>
                        </el-row> 
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">保存</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>        
            </el-tabs>
        </div>
        <div v-else>
            <h1>与服务器断开连接</h1>
        </div>
    </section>
</template>

<style scoped>
    .el-dialog{
        width: 25% !important;
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


    .el-tabs__content{
            overflow: visible!important;
    }
    .format{
        margin-left:50%;
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
        data() {
            return {     
                form: {
                    name: '',
                    account: '',
                    password: '',
                    email: '',
                    phone:'',
                },
                dialogFormVisible: false,
                form2: {
                    password:'',
                    email:'',
                },                         
                formLabelWidth: '80px',
                tableData: [
                    {
                        startTime:'2018-01-05',
                        endTime:'2018-03-31',
                        applyTime:'20000.00',
                        restTime:'19999.00',
                        signNumber:'16548',
                        operation:''
                    }
                ],
                tableData1: [
                    {
                        startDate:'2017-12-02',
                        endDate:'2018-01-01',
                        applyTime:'20000.00',
                        restTime:'15000.00',
                        status:'成功',
                        operation1:''
                    },
                    {
                        startDate:'2017-11-03',
                        endDate:'2018-01-01',
                        applyTime:'20000.00',
                        restTime:'0.00',
                        status:'失败',
                        operation1:''
                    }
                ],
                tabPosition: '',
                result: [
                    {
                        device: [],
                        deviceType: [],
                        apply: []
                    }
                ],
                chance: false,
            }
        },
        
        methods: {
            async onSubmit(){
                // let resData = await axios.post('/api/user/modifyUserById', {
                //     userId: this.user.id,
                //     account: this.form.account,
                //     name: this.form.name,
                //     phone: this.form.phone,
                //     email:this.form.email
                // })
                // if(resData.data.status === 1){
                //     this.$message({
                //         message: resData.data.message,
                //         type: 'success'
                //     });
                //     window.location.href = '/personal'
                // }else{
                //     this.$message.error(resData.data.message)
                // }
            },  
            open2() {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },      
        },
        async asyncData(context){
            // api路径有问题   提取用户账号筛选出登陆者的密码等信息
            let resData = await axios.get('api/user/getAll')         
            if(resData.data.status === 1)
            {
                return {
                    count: resData.data.counts,
                    usersDetail: resData.data.usersDetail
                }
            }           
        },
        async mounted(){
            if(! this.$auth.state.loggedIn) window.location.href ='/login'
            this.form.account = this.$auth.state.user.login_account              
        },
        
        head(){
            return {
                title: 'CDMP - 个人中心'
            }
        },
    }
</script>
