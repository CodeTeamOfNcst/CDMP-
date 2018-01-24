<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="600"
                trigger="click"
                v-model="visible2">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="公告标题">
                    <el-input v-model="form.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="发布时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="禁用标识">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="公告内容">
                    <el-input :rows="15" type="textarea" v-model="form.desc" class="textarea" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="visible2 = false">添加</el-button>
                    <el-button  @click="visible2 = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-popover>
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">公告管理</span>
        </div>
        <el-row class="headerline"></el-row>
        <div class="announceCont">
            <div class="oneline">
                <div class="add">
                    <el-button v-popover:popover4 class="addContent">添加</el-button>
                </div>
                <div class="demo-input-suffix search">
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input21">
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
            </div>
            <div class="table">
                <el-table
                        :data="tableData"
                        border
                        style="width: 70%;">
                    <el-table-column
                            prop="date"
                            label="发布日期"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="公告标题">
                    </el-table-column>
                    <el-table-column
                            prop="disable"
                            label="是否禁用"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            width="110">
                        <template scope="scope">
                            <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
                            <el-button type="text" @click="open2" style="margin-left: 5px;">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-dialog title="编辑公告" :visible.sync="dialogFormVisible">
                <el-form ref="form" :model="form1" label-width="80px">
                    <el-form-item label="公告标题">
                        <el-input v-model="form1.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="发布时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form1.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="禁用标识">
                        <el-switch v-model="form1.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="公告内容">
                        <el-input :rows="15" type="textarea" v-model="form1.desc" class="textarea" ></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <div class="page">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
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
    }
</style>

<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    import axios from 'axios'

    export default {
        components: {ElButton},
        layout: 'admina',
        methods: {
            open2() {
                this.$confirm('此操作将永久删除该公告, 是否继续?', '提示', {
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
                currentPage4: 4,
                input10: '',
                centerDialogVisible: false,
                form: {
                    name: '',
                    date: '',
                    delivery: false,
                    desc: ''
                },
                form1: {
                    name: '',
                    date1: '',
                    delivery: false,
                    desc: ''
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
                    date: '2018-01-02',
                    name: '我校新添大型分析设备构成完备的微结构分析体系',
                    disable: '否',
                    operation:'',
                }, {
                    date: '2017-10-04',
                    name: '电子探针JXA-8230工程师培训时间安排 ',
                    disable: '否',
                    operation:'',
                }, {
                    date: '2017-08-01',
                    name: '大型仪器使用流程培训',
                    disable: '否',
                    operation:'',
                }, {
                    date: '2017-05-03',
                    name: '华北理工大学大型仪器使用培训的通知公告',
                    disable: '是',
                    operation:'',
                }],
                dialogFormVisible: false,
                visible2: false,
                formLabelWidth: '120px'
            };
        },
        head() {
            return {
                title: '公告管理'
            }
        }
    }
</script>