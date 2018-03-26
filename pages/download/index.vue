<template>
   <section class="container">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>下载中心</span>
            
        </div>
        <el-row class="headerline"></el-row>
        <div class="contentList">
            <p>暂借此地试一把提取数据(>.<)</p>
            <el-row class="strip">
          
                <div v-for="user in usersDetail">
                    <el-col :span="24"><div class="grid-content bg-purple-dark">{{ user.user.account }} </div></el-col>
                </div>

            </el-row>
        </div>
        
    </section>
   
     
</template>


<style scoped>
 a{
        text-decoration: none;
    }
    .contentList{
        width: 100%;
        height:650px;
    }
    .paging{
        width: 40%;
        margin-left: 30%;
    }
    .strip{
        margin-left:30px;
        width: 80%;
        height: 35px;
        /*border: 1px solid #2e2f30;*/
    }
    .grid-content{
        float:left;
        line-height: 35px;
    }
    .grid-content>a{
        color:#3675a8;
    }
    .grid-content>a:hover{
        color:black;
    }
 
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    // 借下载中心页面提取用户数据
    async asyncData(context){
        let resData = await axios.get('api/user/getAll')  
        if(resData.data.status === 1)
        {
            return {
                count: resData.data.counts,
                usersDetail: resData.data.usersDetail
            }
        }
    },
    head(){
        return {
            title: 'CDMP - 下载中心'
        }
    }
}

</script>

