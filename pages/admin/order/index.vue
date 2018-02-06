<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="500"
                trigger="click"
                v-model="addFromVisible">
            <el-form ref="addForm" :model="addForm" label-width="100px">
                <el-form-item label="申请用户">
                    <el-col :span="18">
                        <el-select v-model="addForm.user" filterable placeholder="请选择用户">
                            <el-option
                                    v-for="item in users"
                                    :key="item.value"
                                    :label="item.key"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="申请设备">
                    <el-col :span="18">
                        <el-select v-model="addForm.device" filterable placeholder="请选择对应的设备">
                            <el-option
                                    v-for="item in devices"
                                    :key="item.key"
                                    :label="item.value"
                                    :value="item.key">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="使用时间">
                    <el-date-picker
                            v-model="addForm.date"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始使用日期"
                            end-placeholder="结束使用日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="申请理由">
                    <el-col :span="18">
                        <el-input v-model="addForm.vioReason" clearable type="textarea"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="是否同意">
                    <el-col :span="18">
                        <el-switch v-model="addForm.isAgree"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="是否禁用">
                    <el-col :span="18">
                        <el-switch v-model="addForm.isUse"/>
                    </el-col>
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
                            <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
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
                    <el-button v-popover:popover4 @click="handleAddOpen" class="addContent">添加</el-button>
                </div>
            </div>
            <div class="table">
                <el-table
                        :data="tableData"
                        border
                        style="width: 70%;">
                    <el-table-column
                            label="申请id"
                            width="110">
                        <template slot-scope="scope">{{ scope.row.apply.id }}</template>
                    </el-table-column>
                    <el-table-column
                            label="申请用户"
                            width="110">
                        <template slot-scope="scope">{{ scope.row.applyUser.name }}</template>
                    </el-table-column>
                    <el-table-column
                            label="申请设备"
                            width="170">
                        <template slot-scope="scope">{{ scope.row.applyDevice.name }}</template>
                    </el-table-column>
                    <el-table-column
                            label="开始使用时间"
                            width="200">
                        <template slot-scope="scope">{{ scope.row.apply.startDate }}</template>
                    </el-table-column>
                    <el-table-column
                            label="结束使用时间"
                            width="">
                        <template slot-scope="scope">{{ scope.row.apply.endDate }}</template>
                    </el-table-column>
                    <el-table-column
                            label="申请理由"
                            width="">
                        <template slot-scope="scope">{{ scope.row.apply.vioReason ? scope.row.apply.vioReason.substr(0,10) : '暂未填写' }}</template>
                    </el-table-column>
                    <el-table-column
                            label="是否同意"
                            width="100">
                        <template slot-scope="scope">{{ scope.row.apply.isAgree ? '是': '否' }}</template>
                    </el-table-column>
                    <el-table-column
                            label="是否禁用"
                            width="100">
                        <template slot-scope="scope">{{ scope.row.apply.isUse ? '可用': '禁用' }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            width="100">
                        <template slot-scope="scope">
                            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button type="text" @click="handleDelete(scope.row)" style="margin-left: 5px;">禁用</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-dialog title="编辑申请表" :visible.sync="editFromVisible">
                <el-form ref="form" :model="editForm" label-width="90px">
                    <el-form-item label="申请人" >
                        <el-col :span="18">
                            <el-input v-model="editForm.user"  :disabled="true"/>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="申请设备">
                        <el-col :span="18">
                            <el-input v-model="editForm.device"  :disabled="true"/>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="开始时间">
                        <el-col :span="18">
                            <el-date-picker
                                    v-model="editForm.date"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始使用日期"
                                    end-placeholder="结束使用日期">
                            </el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="申请理由">
                        <el-col :span="18">
                            <el-input v-model="editForm.vioReason" clearable type="textarea"/>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="是否同意">
                        <el-switch v-model="editForm.isAgree"
                                   active-text="同意"
                                   inactive-text="拒绝"
                        />
                    </el-form-item>
                    <el-form-item label="是否禁用">
                        <el-switch v-model="editForm.isUse"
                                   active-text="可用"
                                   inactive-text="禁用"
                        />
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="handleEditCancle">取 消</el-button>
                    <el-button type="primary" @click="handleEditSubmit">提 交</el-button>
                </div>
            </el-dialog>
            <div class="page">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="itemCounts">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .el-col-18 {
        width: 88%;
    }
    .mianContent{
        width: 100%;
        min-width:350px;
        height: 100%;
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
            async handleSearch(){
                if(! this.searchInput){
                    window.location.reload()
                }else{
                    console.log(this.searchInput)
                    let resData = await axios.post('/api/apply/search',{
                        search: this.searchInput
                    })
                    if(resData.data.status === 1){
                        this.tableData = resData.data.result
                    }else{
                        this.$message.error(resData.data.message)
                    }
                }
            },
            async handleAddOpen(){
                let resDataUser = await axios.get('/api/user/onlyAll');
                let resDataDevice = await axios.get('/api/device/onlyAll');
                if(resDataUser.data.status === 1 && resDataDevice.data.status === 1){
                    this.users = resDataUser.data.users;
                    this.devices = resDataDevice.data.devices
                }else {
                    this.$message.error('从服务端获取信息失败')
                }
            },
            async handleAdd(){
                // 之后要加上手动验证逻辑
                let resData = await axios.post('api/apply/add', {
                    device: this.addForm
                });
                if( resData.data.status === 1){
                    this.$message({
                        message: resData.data.message,
                        type: 'success'
                    });
                    window.location.reload()
                }else {
                    this.$message.error(resData.data.message)
                }
            },
            handleAddCancel(){
                this.addFromVisible = false
            },
            async handleEdit(row) {
                let resData = await axios.post('/api/apply/getById', {
                    id: row.apply.id
                });
                if( resData.data.status === 1){
                    this.editForm.id = resData.data.apply.id;
                    this.editForm.user = resData.data.applyUser.name;
                    this.editForm.device = resData.data.applyDevice.name;
                    this.editForm.date = [resData.data.apply.startDate, resData.data.apply.endDate];
                    this.editForm.vioReason= resData.data.apply.vioReason;
                    this.editForm.isAgree= resData.data.apply.isAgree;
                    this.editForm.isUse= resData.data.apply.isUse;

                    this.editFromVisible = true
                }else {
                    this.$message.error(resData.data.message)
                }
            },
            async handleEditSubmit(){
                let resData = await axios.post('/api/apply/modifyById', {
                    apply: this.editForm
                });
                if(resData.data.status === 1){
                    this.$message({
                        type: 'success',
                        message: resData.data.message
                    });
                    window.location.reload()
                }else {
                    this.$message.error(resData.data.message);
                }
                this.editFromVisible = false
            },
            handleEditCancle(){
                this.editFromVisible = false
            },
            async handleDelete(row) {
                try{
                    await this.$confirm('此操作将禁用该用户, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    });
                    let resData = await axios.post('/api/apply/deleteById', {
                        id: row.apply.id
                    });
                    if(resData.data.status === 1){
                        this.$message({
                            type: 'success',
                            message: resData.data.message
                        });
                        window.location.reload()
                    }else {
                        this.$message.error(resData.data.message);
                    }
                }catch (err){
                    this.$message.error('已取消');
                }
            },
            async handleCurrentChange(val) {
                let resData = await axios.get(`/api/apply/getAll/${val}`);
                if(resData.data.status === 1){
                    this.tableData = resData.data.applys
                }else {
                    this.$message.error(resData.data.message)
                }
            },
        },
        data() {
            return {
                isShow:false,
                currentPage: 1,
                itemCounts:1,
                editFromVisible: false,
                formLabelWidth: '120px',
                addFromVisible: false,
                searchInput: '',
                searchType: '',
                addForm: {
                    user: '',
                    device:'',
                    date: '',
                    vioReason: '',
                    isAgree: '',
                    isUse: false,

                },
                editForm: {
                    id:"",
                    user: '',
                    device: '',
                    date:[],
                    vioReason:'',
                    isAgree:'',
                    isUse: false,
                },
                users: [
                    {
                        key: '1-用户名',
                        value: '1'
                    },
                ],
                devices:[
                    {
                        key: '设备1',
                        value: '1'
                    }
                ],
                value: '',
                tableData: [
                    {
                        apply:{
                            id: '1',
                            user: '张扬果儿',
                            device: '第一台设备',
                            startDate: '',
                            endDate:'',
                            vioReason:'',
                            isAgree:'',
                            isUse:''
                        },
                        applyUser:{
                            id: '',
                            account: '',
                            name: '',
                            phone:'',
                            email: '',
                            isUse: ''
                        },
                        applyDevice:{
                            id: '',
                            name: '',
                            description: '',
                            purchaseDate: '',
                            needRepair: '',
                            canReserve: '',
                            isUse: ''
                        }
                    }
                ],
                searchOption: [
                    {
                        value: '1',
                        label: '申请理由'
                    }
                ],
            };
        },
        async asyncData({}) {
            let  resData  = await axios.get(`/api/apply/getAll/1`);
            if(resData.data.status === 1){
                let applys = resData.data.applys;
                return {
                    counts: resData.data.counts,
                    applys: applys
                }
            }else {
                return {
                    applys: []
                }
            }
        },
        mounted(){
            this.tableData = this.applys;
            this.itemCounts = this.counts;
        },
        head() {
            return {
                title: 'CDMP - 预约管理'
            }
        }
    }
</script>