<template>
    <div class="all">
        <div class="AnotherLogin">
            <el-row :gutter="20">
                <el-col :span="16" :offset="4"><div class="grid-content bg-purple">
                     <el-form>
                         <el-form-item label="账号">
                             <el-input type="text" class="input1" v-model="inputUserName"/>
                         </el-form-item>

                     </el-form>
                </div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="16" :offset="4"><div class="grid-content bg-purple">
                    <el-form>
                        <el-form-item label="密码">
                            <el-input class="input1" v-model="password"/>
                        </el-form-item>
                    </el-form>
                </div></el-col>
            </el-row>
            <el-button class="loginbutton" type="primary">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {


}
</script>

<style scoped>
 .all{
    width:700px;
    height:500px;
    margin:auto auto;
    /*background-color: #3498DB;*/
}
.AnotherLogin{
    display: inline-block;
    width:70%;
    height:70%;
    margin:10% 15%;
    background-color: #fff;
 }
 
.loginbutton{
    margin-left: 200px;
}
</style>