<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="600"
                trigger="click">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="公告标题">
                    <el-input v-model="form.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="发布时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="禁用标识">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="公告内容">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-popover>
        <div v-show="isShow" class="hidden_Content">
            我是修改内容页面
        </div>
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
                    <el-select v-model="value" placeholder="请选择">
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
                <table border="1">
                    <thead>
                        <tr>
                            <th class="byName">序列</th>
                            <th class="byCity">公告标题</th>
                            <th class="byRegisterTime">发布时间</th>
                            <th>是否禁用</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody class="lists">
                        <tr>
                            <td>1</td>
                            <td>即可改变加热棒肯定是分开圣诞节多麻烦纳豆菌</td>
                            <td>2018-01-19</td>
                            <td>是</td>
                            <td>
                                <el-button type="text" v-on:click="toggle()" value="toggle" class="watch">修改</el-button>
                                <el-button type="text" @click="open2" class="delete">删除</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>四大皆空发货速度发货的承诺的难处</td>
                            <td>2018-01-17</td>
                            <td>是</td>
                            <td>
                                <el-button type="text" v-on:click="toggle()" value="toggle" class="watch">修改</el-button>
                                <el-button type="text" @click="open2" class="delete">删除</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>四大皆空发货速度发货的承诺的难处</td>
                            <td>2018-01-15</td>
                            <td>否</td>
                            <td>
                                <el-button type="text" v-on:click="toggle()" value="toggle" class="watch">修改</el-button>
                                <el-button type="text" @click="open2" class="delete">删除</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>四大皆空发货速度发货的承诺的难处</td>
                            <td>2018-01-13</td>
                            <td>是</td>
                            <td>
                                <el-button type="text" v-on:click="toggle()" value="toggle" class="watch">修改</el-button>
                                <el-button type="text" @click="open2" class="delete">删除</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>水电费如发热五个人结果不让发那个后台金融股豆腐干节日计划不能腐女吧 创项目VB东方红，设计费是你达康书记瑞恩规划惹怒烦得很如</td>
                            <td>2018-01-10</td>
                            <td>是</td>
                            <td>
                                <el-button type="text" v-on:click="toggle()" value="toggle" class="watch">修改</el-button>
                                <el-button type="text" @click="open2" class="delete">删除</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
    .hidden_Content{
        width: 50%;
        height: 600px;
        background: #41B883;
        position: absolute;
        z-index: 9999;
        top: 10%;
        left:25%;
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
    table{
        max-width: 1500px;
        font-family: SimHei;
    }
    .page{
        width: 100%;
        height:50px;
        /*text-align: center;*/
    }
    .watch{
        padding: 0;
        border: 1px solid #7f828b;
        width:44%;
        min-height: 25px;
        height: auto;
        min-width: 37px;
    }
    .delete{
        padding: 0;
        border: 1px solid #7f828b;
        width:44%;
        min-height: 25px;
        height: auto;
        min-width: 37px;
        margin-left: 0px;
    }
    td{
        text-align: center;
    }
    td a{
        min-width: 33px;
    }
</style>

<script>
    export default {
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
            onSubmit() {
                console.log('submit!');
            },
            toggle:function(){
                this.isShow = !this.isShow;
            },
        },
        data() {
            return {
                isShow:false,
                currentPage4: 4,
                input10: '',
                centerDialogVisible: false,
                textarea: '',
                form: {
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
            };
        }
    }
</script>