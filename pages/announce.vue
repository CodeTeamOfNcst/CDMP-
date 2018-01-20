<template>
    <div class="mianContent">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">公告管理</span>
        </div>
        <el-row class="headerline"></el-row>
        <div class="announceCont">
            <div class="oneline">
                <div class="add">
                    <el-button type="primary" plain>添加</el-button>
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
                <!--<table border="1" class="allContent">-->
                    <!--<tr>-->
                        <!--<td>序列</td>-->
                        <!--<td>公告标题</td>-->
                        <!--<td>发布时间</td>-->
                        <!--<td>操作</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>1</td>-->
                        <!--<td>萨克管号地块深V四大皆空挂号费</td>-->
                        <!--<td>2018-01-19</td>-->
                        <!--<td>-->
                            <!--<button>查看</button>-->
                            <!--<button>删除</button>-->
                        <!--</td>-->
                    <!--</tr>-->
                <!--</table>-->
                <table>
                    <thead>
                    <tr>
                        <th class="byName">序列</th>
                        <th class="byCity">公告标题</th>
                        <th class="byRegisterTime">发布时间</th>
                        <th>是否禁用</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody class="lists">
                        <tr>
                            <td>1</td>
                            <td>即可改变加热棒肯定是分开圣诞节多麻烦纳豆菌</td>
                            <td>2018-01-19</td>
                            <td>rfgegery54y56</td>
                            <td><a href="">管理</a><a href="">查看</a></td>
                        </tr>
                    </tbody>
                    <tbody class="lists">
                    <tr>
                        <td>2</td>
                        <td>四大皆空发货速度发货的承诺的难处</td>
                        <td>2018-01-17</td>
                        <td>rfgegerygsergrvbfdbrf54y56</td>
                        <td><a href="">管理</a><a href="">查看</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<style scoped>
    .mianContent{
        width: 100%;
        height: 100%;
    }
    .announceCont{
        width: 100%;
        margin-top: 5px;
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
    .is-plain{
        width: 100%;
        height: 100%;
        padding: 0;
    }
    .search{
        width: 15%;
        min-width: 120px;
        height: 40px;
        float: left;
        margin-left: 10px;
        z-index: 9999;
    }
    .table{
        width: 100%;
        min-height:650px;
        height:auto;
    }
    td,th{
        border-bottom: 1px solid #7f828b ;
        border-right: 1px solid #7f828b;
    }
    th{
        border-top:1px solid #7f828b;
    }
    /*.allContent{*/
        /*width: 80%;*/
    /*}*/
</style>

<script>
    export default {
        layout: 'admina',
    }
</script>