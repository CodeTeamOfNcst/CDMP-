<template>
    <section class="container">
        <div class="headerName">
            <span class="bullCont">通知公告</span>
        </div>
        <el-row class="headerline"></el-row>
        <ul class="rule-list">
            <li class="rule-item" v-for="rule in rulesDetail">
                <a :href='"/notice/" + rule.id'>
                    <span class="rule-item-title">{{ rule.title }}</span>
                    <span class="rule-item-date">{{ rule.publishDate }} </span>
                </a>
            </li>
            <!-- <el-row class="strip">
                <div >
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">
                            </div></el-col>
                </div>
            </el-row> -->
        </ul>
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
    a {
        text-decoration: none;
    }
    .rule-list {
        padding: 5px 30px;
    }
    .rule-item {
        overflow: hidden;
        color: #3675a8;
    }
    .rule-item-title {
        float: left;
        margin-bottom: 10px;
    }
    .rule-item-date {
        float: right;
    }
    .paging {
        width: 40%;
        margin-left: 30%;
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