<template>
<section class="container">
<div class="main-box">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>仪器列表</el-breadcrumb-item>
        <el-breadcrumb-item>全自动智能倒置显微镜及金相分析系统</el-breadcrumb-item>
    </el-breadcrumb>
    <img src="../assets/img/equipment1.png" class="equipment">
    <div class="equi-info">
        <div class="equi-name">
            <h2>全自动智能倒置显微镜及金相分析系统</h2>
        </div>
        <el-button type="success" class="btn-success">预约</el-button>
        <el-button type="warning" class="btn-warning">送样</el-button>
    
        <div class="equi-describe">
            <el-row :gutter="20" class="row">
                <el-col :span="4" class="col"><div class="grid-content bg-purpler text" style="margin-left:20px"><p>联系人</p></div></el-col>
                <el-col :span="8" class="col"><div class="grid-content bg-purple text"><p>严春亮</p></div></el-col>
                <el-col :span="4" class="col"><div class="grid-content bg-purpler text" style="margin-left:20px"><p>生产厂家</p></div></el-col>
                <el-col :span="8" class="col"><div class="grid-content bg-purple text"><p>德国LEICA集团</p></div></el-col>
            </el-row>
             <el-row :gutter="20" class="row">
                <el-col :span="4" class="col"><div class="grid-content bg-purpler text" style="margin-left:20px"><p>邮箱</p></div></el-col>
                <el-col :span="8" class="col"><div class="grid-content bg-purple text"><p>cszx@ncst.edu.cn</p></div></el-col>
                <el-col :span="4" class="col"><div class="grid-content bg-purpler text" style="margin-left:20px"><p>型号</p></div></el-col>
                <el-col :span="8" class="col"><div class="grid-content bg-purple text"><p>DMI5000M 03040121</p></div></el-col>
            </el-row>
             <el-row :gutter="20" class="row">
                <el-col :span="4" class="col"><div class="grid-content bg-purpler text" style="margin-left:20px"><p>电话</p></div></el-col>
                <el-col :span="8" class="col"><div class="grid-content bg-purple text"><p>8816209</p></div></el-col>
                <el-col :span="4" class="col"><div class="grid-content bg-purpler text" style="margin-left:20px"><p>购买日期</p></div></el-col>
                <el-col :span="8" class="col"><div class="grid-content bg-purple text"><p>2012/12/27</p></div></el-col>
            </el-row>
            
        </div>
    </div>
    <div class="equi-others">
        <div class="equi-main">
            <h4>主要规格和技术参数</h4>
            <p>1. 可接CCD相机配合图像分析软件进行材料分析，带有金相分析的全套分析软件，可实现图象拼接、几何尺寸测量、相含量测量。 2. 可实现明场、暗场、偏光、干涉照明模式，机身内置12V100W的透、反射照明电源，可提供自动光强变化的高级照明方式。 3. 系统能自动记忆在不同物镜下和不同观察方式下最佳的光强、光阑大小及聚光镜的相应组合，自动恢复到位，操作简单快速，并自动在不同倍数物镜下拍的照片中加相应倍数标尺，具有色温恒定系统，极大提高工作效率。</p>
        </div>
        <div class="equi-main">
            <h4>主要功能及特色</h4>
            <p>DMI5000M是徕卡公司推出的最先进的大型研究级全自动倒置显微镜，光学设计上采用先进的HC无限远轴向、径向双重色差校正光学技术，彻底消除杂散光等干扰因素；在整个光学系统内，对涉及成像质量的所有组件进行最优化组合，实现图像分辨率和反差的最优化，得到锐利图像的同时追求最高分辨率。DMI5000M适用于钢铁、金属、化工材料行业科研、质检、质控。反射光可实现明场、暗场、偏光、微分干涉、荧光观察功能；透射光可实现明场、暗场、偏光、微分干涉观察功能。</p>
        </div>
        <div class="equi-main" v:>
            <h4>主要功能及特色</h4>
        </div>
    </div>
</div>
</section>
</template>

<style scoped>

.main-box{
    margin-left:10%;
    width:80%;
    height:auto;
    text-align: center;
}
.el-breadcrumb{
    line-height: 4;
    font-size: 15px;
    padding-left: 20px;
    
}
.el-breadcrumb__inner, .el-breadcrumb__inner{
    color: #337ab7;
}
.equipment{
    float: left;
    margin:30px 0 0 20px;
    width:170px;
    height:170px;
}
.equi-info{
    width:80%;
    float: left;
    margin:10px 0 0 40px;
}
.equi-name{
    float:left;
    width:50%;
}
.btn-success{
    width: 50px;
    height: 25px;
    float: left;
    margin:25px 0 0 5px;
    font-size:16px;
    padding:0;
}
.btn-warning{
    width: 50px;
    height: 25px;
    float: left;
    margin:25px 0 0 5px;
    font-size:16px;
    padding:0;
}
.equi-describe{
    width:100%;
    float:left;
    margin-left:10px;
}
.row {

    text-align: left;
    line-height:2
  }
  .row p{
    margin-left:10px;
    margin-top:15px;
  }
  .col {
    border-radius: 4px;
  }

  .text {
    background: #6b8db4;
  }
   .bg-purpler {
    background: #d7e1ec;
  }

  .text {
    border-radius: 4px;
    min-height: 36px;
  }

.equi-main{
    float: left;
    width:100%;
    height:auto;
    margin:30px 0 0 20px;
    text-align:left;
}
</style>


<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
