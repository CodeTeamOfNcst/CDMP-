<template>

    <div class="all">
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark main-top"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark main-middle"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark main-footer"></div></el-col>
        </el-row>
    </div>


</template>

<style scoped>
    .all{
        width:100%;
        background-color: #41B883;
        height:auto;
        min-height: 600px;
    }
    .main-top{
        height:300px;
    }
    .main-middle{
        height:300px;
    }
    .main-footer{
        height:300px;
    }

</style>
