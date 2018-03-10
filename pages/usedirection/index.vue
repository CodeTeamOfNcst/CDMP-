<template>
    <div class="all">
        <el-row>
            <el-col :span="16"><div class="grid-content bg-purple">
                        <div class="orderbefore"></div>
                        <span class="order"> 
                            <i class="el-icon-d-arrow-right"></i> 平台使用说明
                        </span>
                    </div>
                        <el-col :span="20" :offset="10">
                            <div class="video grid-content bg-purple">
                                <video id="my_video_1" class="video-js vjs-default-skin" width="600px" height="300px" controls
                                       data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
                                    <source src="/api/video/getStream" type='video/mp4' />
                                </video>
                            </div>
                        </el-col>
                 </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                        <div class="orderbefore"></div>
                        <span class="order"> 
                            <i class="el-icon-d-arrow-right"></i> 使用规范
                        </span>
                </div>
                        
            </el-col>

        </el-row>
    </div>
    
  
</template>
<style scoped>
.all{
    height:auto;
    margin-top:50px;
}
.orderbefore{
        width: 5px;
        height:28px;
        float: left;
        background: #2e2f30;
    }
 
</style>
