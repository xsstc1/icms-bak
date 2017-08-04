<template>
<div id="systemSetting-content" class="app-container">
  <header class="p20 bg-color-white">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="标题:">
            <el-input size="small" v-model="formInline.user" placeholder="输入标题"></el-input>
          </el-form-item>
          <el-form-item label="发布日期:">
            <el-date-picker size="small" type="date" placeholder="选择日期">
            </el-date-picker>

          </el-form-item>
          <el-form-item label="状态:">
            <el-select size="small" placeholder="请选择">

            </el-select>

          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" class="btn-orange">查询</el-button>
        <el-button type="primary" class="btn-red">重置</el-button>
        <el-button @click="systemCreat" type="primary" class="btn-green"><i class="iconfont icon-iconfont707 f12 mr-5"></i>发布公告</el-button>
      </el-col>
    </el-row>
  </header>
  <article class="mt-30">
    <el-table :data="tableData" v-loading.body="listLoading" fit highlight-current-row>
      <el-table-column align="center" label='序号' width="95" prop="num"></el-table-column>
      <el-table-column label="标题">
        <template scope="scope">
            <router-link class='inlineBlock' to="/waitDetails">
            {{scope.row.waitThing}}
            </router-link>
        </template>
      </el-table-column>
      <el-table-column label="发布日期" width="120" align="center" prop="time"></el-table-column>
      <el-table-column align="center" prop="person" label="发布人" width="120"></el-table-column>
      <el-table-column align="center" prop="person" label="状态" width="80"></el-table-column>
      <el-table-column align="center" label="操作管理" width="180">
        <template scope="scope">
        <el-button class="color-orange" type="text" size="small">查看</el-button>
        <el-button @click="systemStop" class="color-orange" type="text" size="small">停用</el-button>
          <el-button class="color-orange" type="text" size="small">修改</el-button>
          <el-button @click="systemDel" class="color-orange" type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
  </article>

  <footer class="mt-30 cb pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000" class="fr">
    </el-pagination>
    <span class="fr f14 color-8 pagination-text mr-15">当前第1/50页，每页18条，共500条记录</span>
  </footer>
  <el-dialog :visible.sync="systemCreatNew" size="small" custom-class="icms-dialog">
    <span slot="title">新增公告</span>
    <div class="dialog-box">
      <div class="icms-dialog-content p20">
        <el-row :gutter="16">
          <el-col :span="5">
            <div class="grid-content tr mt-5">标题：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-input size="small" v-model="formInline.user" placeholder="输入标题"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-20">
          <el-col :span="5">
            <div class="grid-content tr">新增内容：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-20">
          <el-col :span="5">
            <div class="grid-content tr mt-5">发布日期：</div>
          </el-col>
          <el-col :span="7">
            <el-date-picker size="small" type="date" placeholder="选择日期">
            </el-date-picker>
          </el-col>
          <el-col :span="6">
            <div class="grid-content tr mt-5">发布人姓名：</div>
          </el-col>
          <el-col :span="6">
            <el-input size="small" v-model="formInline.user" placeholder=""></el-input>
          </el-col>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer tc mt-35">
        <el-button class="btn-orange" type="primary" @click="dialogVisible = false">保存</el-button>
        <el-button class="btn-white" @click="dialogVisible = false">取 消</el-button>
  </div>
    </div>
  </el-dialog>
</div>
</template>

<script>
import {
  getList
} from '@/api/table';

export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      systemCreatNew: false,
      listLoading: true,
      tableData: [{
        num: 1,
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 2,
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 3,
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 4,
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }]
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      })
    },
    systemDel() {
      this.$confirm('确认要删除这条公告吗？', {
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
    },
    systemCreat() { //新增公告
      this.systemCreatNew = true;
    },
    systemStop(){ //停用
      this.$confirm('您确认要停用这则公告吗？', {
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
  }
};
</script>

<style lang="stylus">
#systemSetting-content
  .el-form--inline .el-form-item
    margin-bottom 0
</style>
