<template>
    <div class="mianContent">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">公告管理>>编辑公告</span>
        </div>
        <el-row class="headerline"></el-row>
        <div class="announceCont">
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
                    <el-input :rows="15" type="textarea" v-model="form.desc" class="textarea" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">修改</el-button>
                    <el-button @click="over">取消</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>
<style scoped>
    .mianContent{
        width: 100%;
        height: 100%;
    }
    .announceCont{
        width: 50%;
        margin-top: 5px;
    }
</style>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
    layout: 'admina',
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      over(){
        window.history.back(-1);
      }
    },
    data() {
      return {
        form: {
          name: '',
          date1: '',
          delivery: false,
          desc: ''
        },
      }
    }
  }
</script>