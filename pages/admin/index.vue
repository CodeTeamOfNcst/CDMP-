<template>
    <div class="mianContent">
        <div class="popover-el">
            <el-popover
                ref="popover4"
                placement="right"
                width="600"
                offset="300"
                trigger="click"
                v-model="addFormVisible">
            <el-form ref="addForm" :model="addForm" label-width="100px">
                <el-form-item label="设备名称">
                    <div class="inputName">
                        <el-input v-model="addForm.name" clearable />
                    </div>
                </el-form-item>
                <el-form-item label="设备类型">
                    <div class="deviceSelect">
                        <el-select v-model="addForm.deviceType" placeholder="请选择">
                            <el-option
                                    v-for="item in deviceTypes"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item label="设备购买日期">
                    <div class="timeDevice" style="width: 100%;">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.addDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </div>
                </el-form-item>
                <el-form-item label="设备描述">
                    <el-input :rows="3" type="textarea" v-model="addForm.describe" class="textarea"  />
                </el-form-item>
                <el-form-item label="是否需要维护">
                    <el-switch v-model="addForm.needRepair"
                               active-text="维护中"
                               inactive-text="可预约"
                    />
                </el-form-item>
                <el-form-item label="是否能被预约">
                    <el-switch v-model="addForm.canApply"
                               active-text="可预约"
                               inactive-text="不可预约"
                    />
                </el-form-item>
                <el-form-item label="禁用标识">
                    <el-switch v-model="addForm.isUse"
                               active-text="可用"
                               inactive-text="禁用"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">添加</el-button>
                    <el-button  @click="addFormVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-popover>
        </div>
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">设备管理</span>
        </div>
        <div class="announceCont">

            <div class="oneline">

                <div class="demo-input-suffix search">
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="searchInput">
                            <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                    </el-input>
                </div>
                <div class="select">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="add">
                    <el-button v-popover:popover4 class="addContent">添加</el-button>
                </div>
            </div>

            <div class="table">
                <el-table
                        :data="tableData"
                        border
                        style="width: 70%;">
                    <el-table-column
                            prop="id"
                            label="设备id"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="设备购买日期"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="设备名称">
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="设备类型">
                    </el-table-column>
                    <el-table-column
                            prop="disable"
                            label="是否禁用"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            width="110">
                        <template slot-scope="scope">
                            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button type="text" @click="handleForbid(scope.row)" style="margin-left: 5px;">禁用</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <el-dialog title="编辑设备" :visible.sync="editFormVisibel" @close="editDialogClose">
                <el-form :model="editForm" >
                    <el-form-item label="设备名称" :label-width="editFormLabelWidth">
                        <div class="inputName">
                            <el-input v-model="editForm.name" clearable></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="设备类型" :label-width="editFormLabelWidth">
                        <div class="deviceSelect">
                            <el-select v-model="editForm.deviceType" placeholder="请选择">
                                <el-option
                                        v-for="item in deviceTypes"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item label="设备购买日期" :label-width="editFormLabelWidth">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.addDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="设备图片">
                        <el-upload
                                action="/api/upload/imageUpload"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                            <img v-if="editForm.deviceImageUrl" :src="editForm.deviceImageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="设备描述" :label-width="editFormLabelWidth">
                        <el-input :rows="3" type="textarea" v-model="editForm.describe" class="textarea" />
                    </el-form-item>
                    <el-form-item label="是否需要维护" :label-width="editFormLabelWidth">
                        <el-switch v-model="editForm.needRepair"/>
                    </el-form-item>
                    <el-form-item label="是否能被预约"
                                  :label-width="editFormLabelWidth"
                                  active-text="可预约"
                                  inactive-text="不可预约">
                    >
                        <el-switch v-model="editForm.canApply"/>
                    </el-form-item>
                    <el-form-item label="可用标识"
                                  :label-width="editFormLabelWidth"
                                  active-text="可用"
                                  inactive-text="禁用"
                    >
                        <el-switch v-model="editForm.isUse"/>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="editFormVisibel = false">取 消</el-button>
                    <el-button type="primary" @click="handleSubmitEdit">提 交</el-button>
                </div>
            </el-dialog>

            <div class="page">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="itemCounts">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .el-form-item {
        margin-bottom: 8px;
    }
    .el-col-11 {
        width: 72%!important;
    }
    .inputName{
        width: 72%;
    }
    .deviceSelect {
        width:72%;
    }
    .mianContent{
        width: 100%;
        min-width:350px;
        height: 100%;
    }
    .textarea{
        height: 120px;
    }
    .announceCont{
        width: 100%;
        margin-top: 5px;
    }
    th,td{
        text-align: center;
    }
    .oneline{
        width: 100%;
        height:60px;
    }
    .addContent{
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 0px;
    }
    .search{
        width: 15%;
        min-width: 120px;
        height: 40px;
        float: left;
        z-index: 9999;
    }
    .select{
        width: 15%;
        min-width: 170px;
        height: 40px;
        float: left;
        margin-left: 10px;
        z-index: 9999;
    }
    .table{
        width: 100%;
        min-height:600px;
        height:auto;
    }
    .el-table {
        font-size: 15px;
        color: gray;
    }
    table{
        max-width: 1500px;
    }
    .page{
        width: 100%;
        height:50px;
    }
    .avatar-uploader .el-upload {
        border: 4px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>

<script>
import axios from 'axios'
export default {
    layout: 'admina',
        methods: {
            async handleSearch(){
                if(! this.searchInput){
                    window.location.reload()
                }else{
                    console.log(this.searchInput)
                    let resData = await axios.post('/api/device/search',{
                        search: this.searchInput
                    })
                    if(resData.data.status === 1){
                        this.tableData = resData.data.result
                    }else{
                        this.$message.error(resData.data.message)
                    }
                }
            },
            async editDialogClose(){
                let resData = await axios.post('/api/upload/deleteTempFile', {
                    path: this.editForm.deviceImageUrl
                });
                if(resData.data.status === 1){
                    console.log(resData.data.message)
                }else {
                    this.$message.error('服务器异常，请联系管理员')
                }
            },
            handleAvatarSuccess(res, file) {
                this.editForm.deviceImageUrl = res.imgPath;  // 将返回的图片url存储到editForm数据中
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            async handleAdd() {
                // 处理新建仪器设备
                let deviceName = this.addForm.name;
                let deviceTypeId = this.addForm.deviceType;
                let deviceAddDate = this.addForm.addDate;
                let deviceDescribe = this.addForm.describe;
                let deviceNeedRepair = this.addForm.needRepair;
                let deviceCanApply = this.addForm.canApply;
                let deviceIsUse = this.addForm.isUse;
                if(deviceName && deviceTypeId && deviceAddDate && deviceDescribe){
                    let result = await axios.post('/api/device/add', {
                        name: deviceName,
                        TypeId: deviceTypeId,
                        addDate: deviceAddDate,
                        describe: deviceDescribe,
                        needRepair: deviceNeedRepair,
                        canApply: deviceCanApply,
                        isUse: deviceIsUse
                    })
                    if(result.data.status === 1){
                        this.$message({
                            message: result.data.message,
                            type: 'success'
                        });
                        window.location.reload()
                    }else {
                        this.$message.error(result.data.message);
                    }
                }else {
                    this.$message.error('请填写所有项');
                }
                this.addFormVisible = false
            },
            async handleEdit(row) {
                let rowId = row.id;
                this.editForm.id = rowId;
                let resData = await axios.post('/api/device/getById',{
                    id: rowId
                });
                if(resData.data.status === 1){
                    this.editForm.name = resData.data.device.name;
                    this.editForm.deviceType = resData.data.device.device_type;
                    this.editForm.addDate = resData.data.purchaseDate;
                    this.editForm.describe = resData.data.device.description;
                    this.editForm.needRepair = resData.data.device.needRepair;
                    this.editForm.canApply = resData.data.device.canReserve;
                    this.editForm.isUse = resData.data.device.isUse;
                    this.editForm.deviceImageUrl = resData.data.device.imgFilePath;
                    this.editFormVisibel = true;
                }else {
                    this.$message.error(resData.data.message + '请联系管理员');
                }
            },
            async handleSubmitEdit() {
                try{
                    let resData = await axios.post('/api/device/modifyById',{
                        path: this.editForm.deviceImageUrl,
                        id: this.editForm.id,
                        name: this.editForm.name,
                        deviceTypeId: this.editForm.deviceType,
                        date: this.editForm.addDate,
                        describe: this.editForm.describe,
                        needRepair: this.editForm.needRepair,
                        canApply: this.editForm.canApply,
                        isUse: this.editForm.isUse,
                        path: this.editForm.deviceImageUrl,
                    });

                    if( resData.data.status === 1 ){
                        this.$message({
                            type: 'success',
                            message: resData.data.message
                        });
                        window.location.reload()
                    }else {
                        this.$message.error( resData.data.status );
                    }
                }catch(err){
                    this.$message.error('服务器异常');
                }
                this.editFormVisibel = false
            },
            async handleForbid(row) {
                try{
                    await this.$confirm('此操作将禁用该设备, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    });
                    let result = await axios.post('/api/device/deleteById', {
                        id: row.id
                    });
                    if(result.data.status === 1){
                        this.$message({
                            type: 'success',
                            message: result.data.message
                        });
                        window.location.reload()
                    }else {
                        this.$message({
                            type: 'info',
                            message: result.data.message
                        });
                    }
                }catch (err){
                    this.$message({
                        type: 'info',
                        message: ` 取消 由于 ${ err }`
                    });
                }
            },
            async handleCurrentChange(val) {
                let resData = await axios.get(`/api/device/getAll/${val}`);
                if(resData.data.status === 1){
                    this.tableData = resData.data.Devices
                }else {
                    this.$message.error(resData.data.message)
                }
            },
        },
        data() {
            return {
                currentPage:1,
                itemCounts: null,
                editFormLabelWidth:'100px',
                searchInput:'',
                deviceTypes: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }
                ],
                value:'',
                options1: [
                    {
                        value: '1',
                        label: '仪器名称'
                    }
                ],
                addForm: {
                    name: '',
                    deviceType: '',
                    addDate: '',
                    describe: '',
                    needRepair: false,
                    canApply: true,
                    isUse: true,
                },
                editForm: {
                    id: '',
                    name: '',
                    deviceType: '',
                    addDate: '',
                    describe: '',
                    needRepair: false,
                    canApply: true,
                    isUse: true,
                    deviceImageUrl: null,
                },
                tableData: [
                    {
                        id: '',
                        date: '',
                        name: '',
                        disable: '',
                        type: '',
                        operation:'',
                    }
                ],
                editFormVisibel: false,
                addFormVisible: false,
            };
        },
        async asyncData({}) {
            let  resData  = await axios.get(`/api/device/getAll/1`);
            return {
                counts: resData.data.counts,
                devices: resData.data.Devices,
                deviceTypes: resData.data.DeviceTypes
            }
        },
        head() {
            return {
                title: 'CDMP - 设备管理'
            }
        },
        mounted(){
            this.itemCounts = this.counts;
            this.tableData = this.devices
        }
    }
</script>