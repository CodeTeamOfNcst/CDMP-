<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="600"
                trigger="click"
                v-model="visible2">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="设备名称">
                    <el-input v-model="form.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="设备类型">
                    <el-select v-model="form.desc" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设备购买日期">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="设备图片">
                    <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="设备描述">
                    <el-input :rows="5" type="textarea" v-model="form.cont" class="textarea" ></el-input>
                </el-form-item>
                <el-form-item label="是否需要维护">
                    <el-switch v-model="form.repair"></el-switch>
                </el-form-item>
                <el-form-item label="是否能被预约">
                    <el-switch v-model="form.order"></el-switch>
                </el-form-item>
                <el-form-item label="禁用标识">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="visible2 = false">添加</el-button>
                    <el-button  @click="visible2 = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-popover>
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">设备管理</span>
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
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options1"
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
                            label="设备购买日期"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="设备名称">
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="设备类型">
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
            <el-dialog title="编辑设备" :visible.sync="dialogFormVisible">
                <el-form :model="form1">
                    <el-form-item label="设备名称" :label-width="formLabelWidth">
                        <el-input v-model="form1.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="设备类型" :label-width="formLabelWidth">
                        <el-select v-model="form1.desc" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="设备购买日期" :label-width="formLabelWidth">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form1.date" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="设备图片" :label-width="formLabelWidth">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="设备描述" :label-width="formLabelWidth">
                        <el-input :rows="5" type="textarea" v-model="form1.cont" class="textarea" ></el-input>
                    </el-form-item>
                    <el-form-item label="是否需要维护" :label-width="formLabelWidth">
                        <el-switch v-model="form1.repair"></el-switch>
                    </el-form-item>
                    <el-form-item label="是否能被预约" :label-width="formLabelWidth">
                        <el-switch v-model="form1.order"></el-switch>
                    </el-form-item>
                    <el-form-item label="禁用标识" :label-width="formLabelWidth">
                        <el-switch v-model="form1.delivery"></el-switch>
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
    .el-form-item {
        margin-bottom: 8px;
    }
    .mianContent{
        width: 100%;
        min-width:350px;
        height: 100%;
    }
    .textarea{
        height: 120px;
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
//    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";


export default {
    layout: 'admina',
        methods: {
            open2() {
                this.$confirm('此操作将永久删除该设备, 是否继续?', '提示', {
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
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
        },
        data() {
            return {
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                isShow:false,
                currentPage4: 4,
                input10: '',
                centerDialogVisible: false,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {value: '选项3', label: '蚵仔煎'}, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value:'',
                options1: [{
                    value: '选项1',
                    label: '待维护仪器'
                }, {
                    value: '选项2',
                    label: '可预约仪器'
                }, {
                    value: '选项3',
                    label: '禁用仪器'
                }, {
                    value: '选项4',
                    label: '按购买日期由近及远排序'
                }],
                form: {
                    name: '',
                    delivery: false,
                    desc: '',
                    cont:'',
                    date:'',
                    repair:'',
                    order:'',
                },
                form1: {
                    name: '',
                    delivery: false,
                    desc: '',
                    cont:'',
                    date:'',
                    repair:'',
                    order:'',
                },
                tableData: [{
                    date: '2018-01-02',
                    name: '全自动智能倒置显微镜及金相分析系统',
                    disable: '否',
                    type: 'DMI5000M 03040121',
                    operation:'',
                }, {
                    date: '2017-10-04',
                    name: '原子吸收光谱仪 ',
                    disable: '否',
                    type:'Z-2010',
                    operation:'',
                }, {
                    date: '2017-08-01',
                    name: '激光拉曼光谱仪 ',
                    disable: '否',
                    type:'DXR 03040404',
                    operation:'',
                }, {
                    date: '2017-05-03',
                    name: '聚焦离子束场发射扫描电子显微镜',
                    disable: '是',
                    type:'Scios03040702',
                    operation:'',
                }],
                dialogFormVisible: false,
                visible2: false,
                formLabelWidth: '120px'
            };
        }
    }
</script>