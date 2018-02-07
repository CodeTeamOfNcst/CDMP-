<template>
    <section class="container">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">通知公告</span>
        </div>
        <el-row class="headerline"></el-row>
        <div class="contentList">
            <el-row class="strip">
                <div v-for="rule in rulesDetail">
                    <el-col :span="24"><div class="grid-content bg-purple-dark"><a :href='"/notice/" + rule.id'>{{ rule.title }} 发布时间：{{ rule.publishDate }} </a></div></el-col>
                </div>
            </el-row>
        </div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark paging" >
                    <el-pagination
                            :page-size="10"
                            background
                            layout="prev, pager, next"
                            :total="ruleCount"
                            @current-change="handlePageChange">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
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
            data:'学校关于放假期间仪器归还问题（2018.01.15）',
            ruleCount: null,
            rulesDetail: null,

        }
    },
    async asyncData(context){
        let resData = await axios.get('api/rule/getAll')
        if(resData.data.status === 1)
            return {
                count: resData.data.counts,
                rulesDetail: resData.data.rulesDetail
            }
    },
    methods:{
        async handlePageChange(currentPage){
            let resData = await axios.get(`api/rule/getAll/${currentPage}`)
            if(resData.data.status === 1){
                this.rulesDetail = resData.data.rulesDetail
            }else{
                this.$message.error(resData.data.message);
                
            }
        }
    },
    mounted(){
        this.ruleCount = this.count;
    },
    head(){
        return {
            title: 'CDMP - 通知公告'
        }
    }
}

</script>