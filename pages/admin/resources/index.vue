<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="600"
                trigger="click"
                v-model="addFormVisible">
            <el-form ref="addForm" :model="addForm" label-width="80px">
                <!-- <el-form-item label="公告标题">
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
                </el-form-item> -->
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
                            <!-- <el-button type="text" @click="forbidRule(scope.row)" style="margin-left: 5px;">禁用</el-button> -->
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- <el-row>
                <el-col :span="16">
                    <div class="grid-content bg-purple-dark">
                        <el-row>
                            <el-col :span="24">
                                <div class="resName">
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
                                    <p>用户计算资源总共使用了：6634752.43 CPU核小时，中心机群实际使用效率：55.07%</p>
                                    <p>目前用户总共占用了：16.17 TB的存储空间</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row> -->
        
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
    .bg-purple-dark {
        /* background-color: #DCDCDC; */
        border:1px solid #ECECEC;
    }
    .grid-content {
        min-height: 150px;
    }
    .resName{
        height:30px;
        width: 100%;
    }
    .resName p{
        font-weight: 700;
        font-size: 1.2em;
    }
    .resContent{
        width: 98%;
        height: 120px;
        float: right;
    }
    .el-table {
        font-size: 15px;
        color: gray;
    }
    table{
        max-width: 1500px;
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
            async handleSearch(){
                if(! this.searchInput){
                    window.location.reload()
                }else{
                    let resData = await axios.post('/api/rule/search',{
                        search: this.searchInput
                    })
                    if(resData.data.status === 1){
                        this.tableData = resData.data.result
                    }else{
                        this.$message.error(resData.data.message)
                    }
                }
            },
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
            
        },
        data() {
            return {
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
                    operation:'',
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
                    operation:'',
                }
                ],
            };
        },

        head() {
            return {
                title: 'CDMP - 云计算资源管理'
            }
        }
    }
</script>