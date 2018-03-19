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
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <div class="leftSty"></div>
                  <span class="bullCont"><i class="el-icon-d-arrow-right"></i>计算资源</span>
                <!-- </section> -->
                  <el-row class="headerline"></el-row>
               </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <!-- <div class="node">
                    各节点使用情况
                  </div> -->
                  <div class="node" @click="show1 = !show1">各节点使用情况</div>
                  
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <div class="node">
                    作业使用情况
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <div class="node">
                    各机柜实时资源使用状况
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <div class="node">
                    当月计算资源使用情况
                  </div>
                </div>
              </el-col>
            </el-row>
            <div style="margin-top: 20px; height: 200px;">
                    <el-collapse-transition>
                      <div v-show="show1">
                        <div class="transition-box">el-collapse-transition</div>
                         
                      </div>
                    </el-collapse-transition>
            </div>
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
.node{
  background-color: paleturquoise;
  width:280px;
  height:200px;
  border-radius:8px;
}
.transition-box {
    margin-bottom: 10px;
    width: 1210px;
    height: 200px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

</style>
<script>
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
  export default {
    data() {
      return {
        tabPosition: 'left',
        show1:true
      };
      
    }
  };
</script>
