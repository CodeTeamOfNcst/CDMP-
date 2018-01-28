<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="600"
                trigger="click"
                v-model="addFormVisible">
            <el-form ref="addForm" :model="addForm" label-width="80px">
                <el-form-item label="公告标题">
                    <div class="inputName">
                        <el-input v-model="addForm.title" clearable />
                    </div>
                </el-form-item>
                <el-form-item label="发布时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="addForm.publishDate" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="禁用标识">
                    <el-switch v-model="addForm.isUse" />
                </el-form-item>
                <el-form-item label="公告内容">
                    <el-input :rows="15" type="textarea" v-model="addForm.content" class="textarea" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">添加</el-button>
                    <el-button  @click="handleAddCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-popover>
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">公告管理</span>
        </div>
        <el-row class="headerline" />
        <div class="announceCont">
            <div class="oneline">
                <div class="demo-input-suffix search">
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="searchValue">
                    </el-input>
                </div>
                <div class="select">
                    <el-select v-model="value" placeholder="默认以时间由近及远排序">
                        <el-option
                                v-for="item in options"
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
                            label="公告 id"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="publishDate"
                            label="发布日期"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="公告标题"
                            width="250">
                    </el-table-column>
                    <el-table-column
                            prop="content"
                            label="公告内容"
                            width="">
                    </el-table-column>
                    <el-table-column
                            prop="isUse"
                            label="是否禁用"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            width="110">
                        <template scope="scope">
                            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button type="text" @click="forbidRule(scope.row)" style="margin-left: 5px;">禁用</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-dialog title="编辑公告" :visible.sync="editFormVisible">
                <el-form ref="form" :model="editForm" label-width="80px">
                    <el-form-item label="公告标题">
                        <div class="inputName">
                        <el-input v-model="editForm.title" clearable />
                        </div>
                    </el-form-item>
                    <el-form-item label="发布时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.publishDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="禁用标识">
                        <el-switch v-model="editForm.isUse" />
                    </el-form-item>
                    <el-form-item label="公告内容">
                        <el-input :rows="15" type="textarea" v-model="editForm.content" class="textarea" />
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="handleEditSubmit" type="primary">提 交</el-button>
                    <el-button  @click="handleEditCanacel">取 消</el-button>
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
    .mianContent{
        width: 100%;
        min-width:350px;
        height: 100%;
    }
    .inputName{
        width: 72%;
    }
    .el-col-11 {
        width: 72%;
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
    }
</style>

<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    import axios from 'axios'

    export default {
        components: { ElButton },
        layout: 'admina',
        methods: {
            async handleAdd(){
                try{
                    let resData = await axios.post('/api/rule/add',{
                        rule: this.addForm
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
                    this.$message.error(`${err}`);
                }

                this.addFormVisible = false
            },
            handleAddCancel(){
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
                this.addFormVisible = false
            },
            async handleEdit(row){
                try{
                    let resData = await axios.post('/api/rule/getById',{
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
            async handleEditSubmit(){
                try{
                    let resData = await axios.post('/api/rule/modifyById',{
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
            async forbidRule(row) {
                try{
                    await this.$confirm('此操作将永久删除该公告, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    });
                    let resData = await axios.post('/api/rule/deleteById', {
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
            async handleCurrentChange(val) {
                let resData = await axios.get(`/api/rule/getAll/${val}`)
                if(resData.data.status === 1){
                    this.tableData = resData.data.rulesDetail;
                }else {
                    this.$message.error(resData.data.message)
                }
            },
        },
        data() {
            return {
                isShow: false,
                currentPage: 4,
                itemCounts: null,
                centerDialogVisible: false,
                addForm: {
                    publishDate: '',
                    title: '',
                    content:'',
                    isUse: '',
                },
                editForm: {
                    id:'',
                    publishDate: '',
                    title: '',
                    content:'',
                    isUse: '',
                },
                options: [{
                    value: '选项1',
                    label: '按时间由近及远排序'
                }, {
                    value: '选项2',
                    label: '按时间由远及近排序'
                }, {
                    value: '选项3',
                    label: '显示非禁用类型公告'
                }, {
                    value: '选项4',
                    label: '显示禁用类型公告'
                }],
                value: '',
                tableData: [{
                    id: '1',
                    publishDate: '2018-01-02',
                    title: '我校新添大型分析设备构成完备的微结构分析体系',
                    content:'',
                    isUse: '否',
                    operation:'',
                }
                ],
                editFormVisible: false,
                addFormVisible: false,
                formLabelWidth: '120px',
                searchValue: ''
            };
        },
        head() {
            return {
                title: 'CDMP - 公告管理'
            }
        },
        async asyncData(){
            let resData = await axios.get('/api/rule/getAll/1');
            if( resData.data.status === 1 ){
                return{
                    counts: resData.data.counts,
                    rules: resData.data.rulesDetail
                }
            }
        },
        mounted(){
            this.itemCounts = this.counts;
            this.tableData = this.rules;
            this.itemCounts = this.counts;
        }

    }
</script>