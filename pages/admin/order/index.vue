<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="400"
                trigger="click"
                v-model="addFromVisible">
            <el-form ref="addForm" :model="addForm" label-width="90px">
                <el-form-item label="用户名称" >
                    <!--<div style="width: 20%;float: left">用户名称</div>-->
                    <el-col :span="18">
                        <el-input v-model="addForm.name" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户账号">
                    <el-col :span="18">
                        <el-input v-model="addForm.account" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户类别">
                    <el-col :span="18">
                        <el-select v-model="addForm.userType" placeholder="请选择用户类别">
                            <el-option
                                    v-for="item in userKlasses"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户密码">
                    <el-col :span="18">
                        <el-input v-model="addForm.password" clearable type="password"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="重复密码">
                    <el-col :span="18">
                        <el-input v-model="addForm.repeat" clearable type="password"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户手机号">
                    <el-col :span="18">
                        <el-input v-model="addForm.phone" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户邮箱">
                    <el-col :span="18">
                        <el-input v-model="addForm.email" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="禁用标识">
                    <el-switch v-model="addForm.isUse"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">添加</el-button>
                    <el-button  @click="handleAddCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-popover>
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">预约管理</span>
        </div>
        <el-row class="headerline"/>
        <div class="announceCont">
            <div class="oneline">
                <div class="demo-input-suffix search">
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="searchInput">
                    </el-input>
                </div>
                <div class="select">
                    <el-select v-model="searchType" placeholder="请选择">
                        <el-option
                                v-for="item in searchOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="add">
                    <el-button v-popover:popover4 class="addContent">添加</el-button>
                </div>
            </div>
            <div class="table">
                <el-table
                        :data="tableData"
                        border
                        style="width: 70%;">
                    <el-table-column
                            prop="id"
                            label="用户id"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="用户名称"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="account"
                            label="用户账号"
                            width="170">
                    </el-table-column>
                    <el-table-column
                            prop="email"
                            label="用户邮箱"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="phone"
                            label="用户手机号"
                            width="">
                    </el-table-column>
                    <el-table-column
                            prop="klass"
                            label="用户类别"
                            width="">
                    </el-table-column>
                    <el-table-column
                            prop="isUse"
                            label="是否禁用"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            width="100">
                        <template scope="scope">
                            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button type="text" @click="handleDelete(scope.row)" style="margin-left: 5px;">禁用</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-dialog title="编辑用户" :visible.sync="editFromVisible">
                <el-form ref="form" :model="editForm" label-width="90px">
                    <el-form-item label="用户名称" >
                        <el-col :span="18">
                            <el-input v-model="editForm.name" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户账号">
                        <el-col :span="18">
                            <el-input v-model="editForm.account" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户类别">
                        <el-col :span="18">
                            <el-select v-model="editForm.userType" placeholder="请选择用户类别">
                                <el-option
                                        v-for="item in userKlasses"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户手机号">
                        <el-col :span="18">
                            <el-input v-model="editForm.phone" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户邮箱">
                        <el-col :span="18">
                            <el-input v-model="editForm.email" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="禁用标识">
                        <el-switch v-model="editForm.isUse" />
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="handleEditCancle">取 消</el-button>
                    <el-button type="primary" @click="handleEditSubmit">提 交</el-button>
                </div>
            </el-dialog>
            <div class="page">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="40">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mianContent{
        width: 100%;
        min-width:350px;
        height: 100%;
    }
    .textarea{
        height: 350px;
    }
    .announceCont{
        width: 100%;
        margin-top: 5px;
    }
    th,td{
        text-align: center;
    }
    .oneline{
        width: 100%;
        height:60px;
    }
    .add{
        width: 5%;
        min-width: 31px;
        height: 40px;
        float: left;
        z-index: 9999;
    }
    .addContent{
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 0px;
    }
    .search{
        width: 15%;
        min-width: 120px;
        height: 40px;
        float: left;
        margin-left: 10px;
        z-index: 9999;
    }
    .select{
        width: 15%;
        min-width: 170px;
        height: 40px;
        float: left;
        margin-left: 10px;
        z-index: 9999;
    }
    .table{
        width: 100%;
        min-height:600px;
        height:auto;
    }
    .el-table {
        font-size: 15px;
        color: gray;
    }
    table{
        max-width: 1500px;
    }
    .page{
        width: 100%;
        height:50px;
        /*text-align: center;*/
    }
</style>

<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    import axios from 'axios'
    export default {
        components: {ElButton},
        layout: 'admina',
        methods: {
            handleAdd(){
                if( this.addForm.password === this.addForm.repeat ){
                    let letPostData = {
                        name: this.addForm.name,
                        account: this.addForm.account,
                        password: this.addFrom.password,
                    }
                }else {
                    this.$message.error('两次输入的密码不一致');
                    this.addFromVisible = false
                }


            },
            handleAddCancel(){
                this.addFromVisible = false
            },
            handleEdit(row) {

                this.editFromVisible = true
            },
            handleEditSubmit(row){

                this.editFromVisible = false
            },
            handleEditCancle(){
                this.editFromVisible = false
            },
            async handleDelete() {
                try{
                    await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                }catch (err){
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        },
        data() {
            return {
                isShow:false,
                currentPage: 4,
                centerDialogVisible: false,
                addForm: {
                    name: '',
                    account: '',
                    password: '',
                    userType: '',
                    repeat: '',
                    phone: '',
                    email: '',
                    isUse: false,
                },
                editForm: {
                    name: '',
                    account: '',
                    password:'',
                    userType: '',
                    phone:'',
                    email:'',
                    isUse: false,
                },
                userKlasses: [
                    {
                        id: '选项1',
                        name: '按时间由近及远排序'
                    },
                ],
                value: '',
                tableData: [
                    {
                        id: '1',
                        user: '张扬果儿',
                        device: '20180564781',
                        isAgree:'',
                        phone:'',
                        isUse:'',
                        startDate: '',
                        endDate:'',

                    }
                ],
                editFromVisible: false,
                formLabelWidth: '120px',
                addFromVisible: false,
                searchInput: '',
                searchType: '',
                searchOption: [
                    {
                        value: '1',
                        label: '预约设备名称'
                    },
                    {
                        value: '2',
                        label: '用户名称'
                    },
                    {
                        value: '3',
                        label: '日期'
                    },
                    {
                        value: '4',
                        label: '预约时长'
                    }
                ],
            };
        },
        async asyncData({}) {
            let  users  = await axios.get(`/api/user/getAll`)
            return {
                tableData: users.data.tableData,
                userKlasses: users.data.userKlasses
            }
        },
        head() {
            return {
                title: 'CDMP - 预约管理'
            }
        }
    }
</script>