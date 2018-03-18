<template>
    <div class="all">
      <el-tabs :tab-position="tabPosition" type = "card" style="height: 700px;">
        <el-tab-pane label="机房环境">
          <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>机房环境</span>
          </div>
          </el-col>
          <el-col :span="16" :offset="5">
            <h2>24小时内机房环境温湿度曲线（五分钟内采集的平均温湿度）</h2>
          </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="计算资源">
          <!-- <section class="container">  -->
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>计算资源</span>
          <!-- </section> -->
          <el-row class="headerline"></el-row>   
          
           
            
        </el-tab-pane>
        <!-- <el-tab-pane label="中心用户">
        </el-tab-pane> -->
        <el-tab-pane label="MQTT记录">
          <!-- <section class="container">  -->
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>MQTT记录</span>
          <!-- </section> -->
          <el-row class="headerline"></el-row> 
        </el-tab-pane>
        <el-tab-pane label="资源预约">
          <!-- <section class="container">  -->
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>资源预约</span>
          <!-- </section> -->
          <el-row class="headerline"></el-row> 
        </el-tab-pane>

      </el-tabs>
    </div>
</template>
<style scoped>
.all{
    height:auto;
    margin-top:20px;
}
/* .orderbefore{
        width: 5px;
        height:28px;
        float: left;
        background: #2e2f30;
    } */

.usvideo{
    margin-top:100px;
}
.bullCont{
  height:70%;
  margin-bottom:10px;
  font-size:14px;
  margin-bottom:5px;
}

</style>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>
