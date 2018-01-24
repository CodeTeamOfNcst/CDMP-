<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="400"
                trigger="click"
                v-model="visible2">
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="用户名称" >
                    <!--<div style="width: 20%;float: left">用户名称</div>-->
                    <el-col :span="18">
                        <el-input v-model="form.name" clearable></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户账号">
                    <el-col :span="18">
                        <el-input v-model="form.account" clearable></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户密码">
                    <el-col :span="18">
                        <el-input v-model="form.password" clearable></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户手机号">
                    <el-col :span="18">
                        <el-input v-model="form.phone" clearable></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户邮箱">
                    <el-col :span="18">
                        <el-input v-model="form.email" clearable></el-input>
                    </el-col>
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
            <span class="bullCont">用户管理</span>
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
            </div>
            <div class="table">
                <el-table
                        :data="tableData"
                        border
                        style="width: 70%;">
                    <el-table-column
                            prop="id"
                            label="用户名称"
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
                            <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
                            <el-button type="text" @click="open2" style="margin-left: 5px;">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
                <el-form ref="form" :model="form1" label-width="90px">
                    <el-form-item label="用户名称" >
                        <el-col :span="18">
                            <el-input v-model="form1.name" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户账号">
                        <el-col :span="18">
                            <el-input v-model="form1.account" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户手机号">
                        <el-col :span="18">
                            <el-input v-model="form1.phone" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户邮箱">
                        <el-col :span="18">
                            <el-input v-model="form1.email" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="禁用标识">
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
      open2() {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
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
          account: '',
          password:'',
          phone:'',
          email:'',
          delivery: false,
        },
        form1: {
          name: '',
          account: '',
          password:'',
          phone:'',
          email:'',
          delivery: false,
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
        tableData: [
        {
          id: '',
          name: '张扬果儿',
          account: '20180564781',
          email:'123@qq.com',
          phone:'15544684297',
          isUse:'否',
        },
        {
          id: '',
          name: '张张',
          account: '20165841263',
          email:'123@qq.com',
          phone:'15544684297',
          isUse:'是',
        }
        ],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        visible2: false,
      };
    },
    async asyncData({}) {
      let  users  = await axios.get(`/api/user/getAll`)
      return {
          tableData: users.data.tableData,
          options: users.data.userKlasses
      }
    },
    head() {
        return {
            title: 'CDMP - 用户管理'
        }
    }
  }
</script>