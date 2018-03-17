<template>
    <div class="all">
        
        

  <el-tabs :tab-position="tabPosition" type = "card" style="height: 700px;">
    <el-tab-pane label="平台概况介绍">
        <!-- <section class="container">  -->
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>平台概况介绍</span>
          <!-- </section> -->
          <el-row class="headerline"></el-row> 
    </el-tab-pane>
    <el-tab-pane label="平台使用说明">
        
            <div class="leftSty"></div>
            <span class="bullCont"><i class="el-icon-d-arrow-right"></i>平台使用说明</span>
          
          <el-row class="headerline"></el-row> 
        <el-row class="video">
            <el-col :span="16">
                <!-- <div class="grid-content bg-purple">
                        <div class="orderbefore"></div>
                        <span class="order"> 
                            <i class="el-icon-d-arrow-right"></i> 平台使用说明
                        </span>
                    </div> -->
                    <div class="usvideo">
                        <el-col :span="20" :offset="6">
                            <div class="video grid-content bg-purple">
                                <video id="my_video_1" class="video-js vjs-default-skin" width="800px" height="500px" controls
                                       data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
                                    <source src="/api/video/getStream" type='video/mp4' />
                                </video>
                            </div>
                        </el-col>
                    </div>
                 </el-col>
        </el-row>
        <!-- <el-row>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                        <div class="orderbefore"></div>
                        <span class="order"> 
                            <i class="el-icon-d-arrow-right"></i> 使用规范
                        </span>
                </div>       
            </el-col>
        </el-row> -->

    </el-tab-pane>
    <el-tab-pane label="平台使用规范">   
        <div class="leftSty"></div>
        <span class="bullCont"><i class="el-icon-d-arrow-right"></i>平台使用规范</span>   
        <el-row class="headerline"></el-row>  
    </el-tab-pane>
    <!-- <el-tab-pane label="仪器资源简介">定时任务补偿</el-tab-pane> -->
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
     margin-top:70px;
 }
.bullCont{
    font-size:14px;
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