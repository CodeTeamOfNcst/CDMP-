<template>
    <div class="all">
        <div class="AnotherLogin">
            <el-row :gutter="20">
                <el-col :span="16" :offset="4"><div class="grid-content bg-purple">
                     <el-form>
                         <el-form-item>
                             <el-alert
                                title="请先登陆"
                                type="error"
                                show-icon>
                            </el-alert>
                         </el-form-item>
                     </el-form>
                </div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="16" :offset="4"><div class="grid-content bg-purple">
                     <el-form>
                         <el-form-item>
                             <el-input type="text" class="input1" v-model="account" placeholder="账号"/>
                         </el-form-item>
                     </el-form>
                </div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="16" :offset="4"><div class="grid-content bg-purple">
                    <el-form>
                        <el-form-item>
                            <el-input class="input1" v-model="password" placeholder="密码" type="password"/>
                        </el-form-item>
                    </el-form>
                </div></el-col>
            </el-row>
            <el-button class="loginbutton" type="primary" @click="handleLogIn">登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                account: '',
                password: ''
            }
        },
        async asycnData(context){
            return {
            }
        },
        methods:{
            async handleLogIn(){
                if(!this.account || !this.password){
                    this.$message.error("请输入用户名和密码");
                }else{
                    let resData =  await this.$auth.login({
                                    data: {
                                        account: this.account,
                                        passwd: this.password
                                    }
                    })
                    if(this.$auth.state.user.account){
                        window.location.href = '/'
                    }else{
                        this.$message.error("用户名或密码错误")
                    }
                }
            },
        }
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
h2{
    display: block;
    margin-left:170px;
}
</style>