<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="500"
                trigger="click"
                v-model="addFormVisible">
            <el-form ref="addForm" :model="addForm" label-width="100px">
                <el-form-item label="课题负责人">
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
                <el-form-item label="所在院系">
                    <el-col :span="18">
                        <el-input v-model="addForm.department" clearable />
                    </el-col>
                </el-form-item>
                <el-form-item label="机时额度">
                    <el-col :span="18">
                        <el-input v-model="addForm.department" clearable />
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
            <span class="bullCont">云计算资源管理</span>
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
                    <el-select v-model="value" placeholder="筛选依据">
                        <el-option>
                        </el-option>
                    </el-select>
                </div>
                <div class="add">
                    <el-button v-popover:popover4 @click="handleAddOpen" class="addContent">添加</el-button>
                </div>
            </div>
            <div style="width:1100px;float:left;">
                <div class="table">
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%;">
                        <el-table-column
                                prop="id"
                                label="id"
                                width="60">
                        </el-table-column>
                        <el-table-column
                                prop="chargePerson"
                                label="课题负责人"
                                width="110">
                        </el-table-column>
                        <el-table-column
                                prop="department"
                                label="所在院系"
                                width="">
                        </el-table-column>
                        <el-table-column
                                prop="timeLimit"
                                label="机时额度"
                                width="110">
                        </el-table-column>
                        <el-table-column
                                prop="restTime"
                                label="剩余机时"
                                width="110">
                        </el-table-column>
                        <el-table-column
                                prop="amountLimit"
                                label="存储额度"
                                width="110">
                        </el-table-column>
                        <el-table-column
                                prop="amountUse"
                                label="	存储使用"
                                width="110">
                        </el-table-column>
                        <el-table-column
                                prop="maxNumber"
                                label="最大核数"
                                width="110">
                        </el-table-column>
                        <el-table-column
                                prop="useRatio"
                                label="使用占比"
                                width="110">
                        </el-table-column>
                        <el-table-column
                                prop="operation"
                                label="操作"
                                width="100">
                            <template slot-scope="scope">
                                <el-button type="text" @click="handleEdit(scope.row)">查询</el-button>
                                <el-button type="text" @click="forbidRule(scope.row)" style="margin-left: 5px;">禁用</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="page">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="100"
                        layout="total, prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
                <el-dialog title="目前用户计算资源" :visible.sync="editFormVisible">
                    <el-form ref="form" :model="editForm" label-width="100px">
                        <el-form-item label="课程负责人">
                            <el-col :span="11">
                                <el-input v-model="editForm.chargePerson" :disabled="true"/>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="所在院系">
                            <el-col :span="11">
                                <el-input v-model="editForm.department" clearable />
                            </el-col>
                        </el-form-item>
                        <el-form-item label="授权作业类型">
                            <el-col :span="11">
                                <el-input v-model="editForm.authType" clearable />
                            </el-col>
                        </el-form-item>
                        <el-form-item label="禁用标识">
                            <el-switch v-model="editForm.isUse" />
                        </el-form-item>
                        <h3>截至到 2018-03-10 08:09:19 计算资源统计</h3>
                        <el-table
                            :data="tableData1"
                            border
                            show-summary
                            style="width: 100%">
                            <el-table-column
                                prop="monthlyTotal"
                                label="月度合计"
                                width="90">
                            </el-table-column>
                            <el-table-column
                                prop="homeworkNum"
                                label="作业数"
                                width="70">
                            </el-table-column>
                            <el-table-column
                                prop="useTime"
                                label="使用机时(核小时)">
                            </el-table-column>
                            <el-table-column
                                prop="systemPercent"
                                label="占系统百分比"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                prop="averNum"
                                label="作业平均核数"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                prop="averWaitTime"
                                label="平均等待时间(小时)"
                                width="170">
                            </el-table-column>
                        </el-table>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="handleEditSubmit" type="primary">提 交</el-button>
                        <el-button  @click="handleEditCanacel">取 消</el-button>
                    </div>
                </el-dialog>
            </div>
            <div class="resStatis">
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">
                            <el-row>
                                <el-col :span="24">
                                    <div class="resName" >
                                        <p>云计算资源统计</p>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <div class="resContent">
                                        <p>2018-01-01 00:00:00 至 2018-03-08 17:09:41 总共运行了 1601.16 小时</P>
                                        <p>目前投入运行的CPU核数：7524</p>
                                        <p>理论计算资源(扣除系统维护和假期停机时间 0 天)：12047127.84 CPU核小时</p>
                                        <p>用户计算资源总共使用了：6634752.43 CPU核小时</p>
                                        <p>中心机群实际使用效率：55.07%</p>
                                        <p>目前用户总共占用了：16.17 TB的存储空间</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
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
    .announceCont{
        width: 100%;
        margin-top: 5px;
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
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        min-height: 200px;
    }
    .el-table {
        font-size: 15px;
        color: gray;
    }
    .table{
        width: 1100px;
        min-height: 600px;
        /* background: gray; */
        float: left;
    }
    .page{
        width: 100%;
        height:50px;
        float: left;
    }
    .resStatis{
        width:22%;
        min-width: 246px;
        float:right;
        margin-right:5%;
        color:gray;
        font-family: 幼圆;
        line-height: 150%;
        background: #E9E9E5;
        box-shadow: 1px 1px 6px gray;
    }
    .resName{
        height:30px;
        width: 100%;
        text-align:center;
    }
    .resName p{
        font-weight: 700;
        font-size: 1.2em;
    }
    .resContent{
        width: 100%;  
        min-height: 200px;
        float: right;
    }
    
    
</style>

<script>
    import { Button } from 'element-ui'
    import axios from 'axios'
    export default {
        components: {
            Button
        },
        layout: 'admina',
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            async handleSearch(){
                if(! this.searchInput){
                    window.location.reload()
                }else{
                    let resData = await axios.post('',{
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
                if(resDataUser.data.status === 1){
                    this.users = resDataUser.data.users;
                }else {
                    this.$message.error('从服务端获取信息失败')
                }
            },
            async handleAdd(){
                // 之后要加上手动验证逻辑
                let resData = await axios.post('', {
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
                this.addFormVisible = false
            },
            async handleEdit(row){
                try{
                    let resData = await axios.post('',{
                        id: row.id
                    });
                    if(resData.data.status === 1){
                        this.editForm = resData.data.rule
                    }else {
                        this.$message.error(resData.data.message);
                    }
                }catch(err) {
                    this.$message.error(`异常 由于 ${err}`);
                }
                this.editFormVisible = true
            },
            async forbidRule(row) {
                try{
                    await this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    });
                    let resData = await axios.post('', {
                        id: row.id
                    });
                    if(resData.data.status === 1){
                        this.$message({
                            type: 'success',
                            message: '成功禁用'
                        });
                        window.location.reload()
                    }else {
                        this.$message.error(resData.data.message);
                    }
                }catch (err){
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                }
            },
            async handleEditSubmit(){
                try{
                    let resData = await axios.post('',{
                        rule: this.editForm
                    })
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
                    this.$message.error(`异常 由于 ${err}`);
                }
                this.editFormVisible = false
            },
            handleEditCanacel(){
                this.editFormVisible = false
            },  
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '';
                        return;
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += '';
                    } else {
                        sums[index] = '';
                    }
                });
                return sums;
            }         
        },
        data() {
            return {
                currentPage1: 1,
                itemCounts:1,
                addForm: {
                    user: '',
                    department: '',
                    timeLimit:'',
                    isUse: '',
                },
                users: [
                    {
                        key: '1-用户名',
                        value: '1'
                    },
                ],
                tableData: [{
                    id: '1',
                    chargePerson: '魏宝仁',
                    department:'生命科学院',
                    timeLimit: '2000000.00',
                    restTime:'8792405.88',
                    amountLimit:'1000.00',
                    amountUse:'880.5',
                    maxNumber:'1400',
                    useRatio:'18.20%',
                },
                {
                    id: '2',
                    chargePerson: '韦广红',
                    department:'物理系',
                    timeLimit: '2000000.00',
                    restTime:'8792405.88',
                    amountLimit:'1000.00',
                    amountUse:'880.5',
                    maxNumber:'1400',
                    useRatio:'18.20%',
                }
                ],
                editForm: {
                    id:'',
                    department: '',
                    chargePerson: '',
                    authType:'',
                    isUse: '',
                },
                tableData1: [{
                    monthlyTotal: 'Jan 2018',
                    homeworkNum: '97',
                    useTime: '996591.67',
                    systemPercent:'21.48 %',
                    averNum:'55.00',
                    averWaitTime:'9.52'
                    }, {
                    monthlyTotal: 'Feb 2018',
                    homeworkNum: '92',
                    useTime: '210116.11',
                    systemPercent:'13.53 %',
                    averNum:'46.18',
                    averWaitTime:'2.11'
                    }, {
                    monthlyTotal: 'Mar 2018',
                    homeworkNum: '8',
                    useTime: '923.58',
                    systemPercent:'0.14 %',
                    averNum:'30.25',
                    averWaitTime:'1.55'
                    },
                    // {
                    // monthlyTotal: '年度合计',
                    // homeworkNum: '197',
                    // useTime: '1207631.36(0.00)',
                    // systemPercent:'',
                    // averNum:'',
                    // averWaitTime:''
                    // }
                ],
                addFormVisible:false,            
                editFormVisible: false,
            };
        },
        head() {
            return {
                title: 'CDMP - 云计算资源管理'
            }
        },
    }
</script>