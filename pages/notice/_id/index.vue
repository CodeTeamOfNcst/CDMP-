<template>
    <section class="">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">
                <p>通知公告></p>
                <p class="bulletinName">学校关于放假期间仪器归还问题</p>
            </span>
        </div>
        <el-row class="headerline"></el-row>
        <el-row :gutter="20">
            <el-col :span="4" :offset="10">
                <h1>{{title}}</h1>
            </el-col>
            <el-col>
                <h4>发布时间：{{publishDate}}</h4>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark detailsCont">
                    <p>{{ content }}</p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<style scoped>
.bullCont p{
    width: auto;
    float: left;
}
.detailsCont{
    width: 100%;
    margin-top: 20px;
    min-height: 700px;
    height:auto;
}
.bulletinName{
    color:#7f828b;
    overflow: hidden;
}
</style>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            content:'',
            title:'',
            publishDate: '',
            input3:'',
            date:[],


        }
    },
    async asyncData({ params }){
        let resData = await axios.post('/api/rule/getById',{id: params.id})
        if(resData.data.status === 1){
            return{
                content: resData.data.rule.content,
                title: resData.data.rule.title,
                publishDate: resData.data.rule.publishDate,
               
            }
        }else{
            return{
                content: "<h2>获取信息失败</h2>",
                title: '无法正确获取数据'
            }
        }
    },
    async mounted(){
    }
}

</script>