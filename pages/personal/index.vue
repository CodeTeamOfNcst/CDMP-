<template>
    <section class="container">
        <div>
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane label="正在使用仪器">
                    <div class="history">
                        <img src="~/assets/img/yiqi.png">
                        <div class="hisCont">
                            <p>结点赋给和大局观奋斗的鬼地方</p>
                            <div class="startTime">开始时间:2018-01-02</div>
                            <div class="startTime">结束时间:2018-02-22</div>
                            <div class="startTime">设备类型:化学系</div>
                        </div>
                    </div>
                    <div class="history">
                        <img src="~/assets/img/img_2.png">
                        <div class="hisCont">
                            <p>难道就能进入个人个人结果看没看</p>
                            <div class="startTime">开始时间:2018-01-02</div>
                            <div class="startTime">结束时间:2018-02-22</div>
                            <div class="startTime">设备类型:化学系</div>
                        </div>
                    </div>
                    <div class="history">
                        <img src="~/assets/img/img_3.png">
                        <div class="hisCont">
                            <p>禾嘉股份官方应该发言人关于让他人与他人如热土热火升UN常年第</p>
                            <div class="startTime">开始时间:2018-01-02</div>
                            <div class="startTime">结束时间:2018-02-22</div>
                            <div class="startTime">设备类型:化学系</div>
                        </div>
                    </div>
                    <div class="history">
                        <img src="~/assets/img/img_3.png">
                        <div class="hisCont">
                            <p>禾嘉股份官方应该发言人关于让他人与他人如热土热火升UN常年第</p>
                            <div class="startTime">开始时间:2018-01-02</div>
                            <div class="startTime">结束时间:2018-02-22</div>
                            <div class="startTime">设备类型:化学系</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="历史预约记录">
                    <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="结束时间"
                                width="180"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="仪器名称"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="仪器类型"
                                width="350"
                                align="left">
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                width="120"
                                align="left">
                            <template slot-scope="scope">
                                <el-button type="text" @click="open2">移除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </section>
</template>

<style scoped>
    .history{
       width: 30%;
       min-width: 287px;
       margin-bottom: 10px;
       margin-left: 2.5%;
       float: left;
       display: block;
    }
    img{
        width: 40%;
        height: 100%;
        float: left;
        background-size: 100% 100%;
    }
    .hisCont{
        width: 60%;
        float: right;
        height: 80%;
        margin-top: 10%;
    }
    .hisCont p{
        width: 100%;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .startTime{
        width: 100%;
        height: 20px;
        margin-top: 5px;
    }
</style>

<script>
    export default {
        methods: {
            open2() {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '原子吸收光谱仪',
                    address: '化学系'
                }, {
                    date: '2016-05-04',
                    name: '红外吸收光谱仪',
                    address: '冶金系'
                }, {
                    date: '2016-05-01',
                    name: '聚焦离子束场发射扫描电子显微镜',
                    address: '化学系'
                }, {
                    date: '2016-05-03',
                    name: '电感耦合直读光谱仪',
                    address: '冶金系'
                }]
            }
        },
        asyncData(context){
            context.redirect('/device')
        }
    }
</script>
