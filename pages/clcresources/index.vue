<template>
    <div class="all">
      <el-tabs :tab-position="tabPosition" type = "card" style="height: 700px;">
        <el-tab-pane label="机房环境">
          <section class="container"> 
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>机房环境</span>
          </section>
          <el-row class="headerline"></el-row>    
        </el-tab-pane>
        <el-tab-pane label="计算资源">
          
           
            
        </el-tab-pane>
        <!-- <el-tab-pane label="中心用户">
        </el-tab-pane> -->
        <el-tab-pane label="MQTT记录">
        </el-tab-pane>
        <el-tab-pane label="资源预约">
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
