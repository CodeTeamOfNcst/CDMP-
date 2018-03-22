<template>
    <div class="all">
        
        

  <el-tabs :tab-position="tabPosition" type = "border-card" style="height: 700px;">
    <el-tab-pane label="平台概况介绍">平台介绍</el-tab-pane>
    <el-tab-pane label="平台使用说明">
        <el-row class="video">
            <el-col :span="16">
                <!-- <div class="grid-content bg-purple">
                        <div class="orderbefore"></div>
                        <span class="order"> 
                            <i class="el-icon-d-arrow-right"></i> 平台使用说明
                        </span>
                    </div> -->
                    <div class="usvideo">
                        <el-col :span="20" :offset="8">
                            <div class="video grid-content bg-purple">
                                <video id="my_video_1" class="video-js vjs-default-skin" width="600px" height="300px" controls
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
    <el-tab-pane label="平台使用规范">平台使用规范</el-tab-pane>
    <!-- <el-tab-pane label="仪器资源简介">定时任务补偿</el-tab-pane> -->
  </el-tabs>
    </div>
    
  
</template>
<style scoped>
.el-tabs {
    border: 0;
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