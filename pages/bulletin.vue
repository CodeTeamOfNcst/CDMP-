<template>
    <section class="container">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">通知公告</span>
        </div>
        <el-row class="headerline"></el-row>
        <div class="contentList">
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="noticecont">学校关于放假期间仪器归还问题（2018.01.15）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">关于大型仪器共享方案（2018.01.01）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">我就发发公告（2017.08.29）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">你猜这条公告是啥（2017.02.09）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">大型仪器使用流程培训（2017.01.28）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">特大型仪器使用流程培训（2017.01.26）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">华北理工大学采购仪器流程、方案、价格商定（2017.01.20）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">学校太缺钱了，学生学费不能欠了快交吧听话呀不然不给你毕业（2017.01.08）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">买什么买，仪器这么多不够你用的吗（2017.01.06）</a></div></el-col>
            </el-row>
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="#">以上都是我瞎写的，学校您别介意啊（2017.01.01）</a></div></el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark paging" >
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000" class="lalala">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<style scoped>
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


</script>