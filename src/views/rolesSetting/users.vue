<template>
<div id="systemSetting-content" class="app-container">
  <header class="p25 bg-color-white shadow radius5 header-search">
    <div>
        <el-form :inline="true" :model="formInline" :label-position="right" label-width="80px">
              <el-form-item label="登录名:" class="mt-10">
                <el-input class="w" size="small" v-model="formInline.user" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="用户名称:" class="mt-10">
                <el-input class="w" size="small" v-model="formInline.user" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="角色:" class="mt-10">
                <el-input class="w" size="small" v-model="formInline.user" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="状态:" class="mt-10">
                <el-select size="small" placeholder="请选择">
                </el-select>
              </el-form-item>
        </el-form>
    </div>
    <div class="mt-30 mb-5 tc">
      <el-button type="primary" class="btn-orange shadow mr-50"><i class="iconfont icon-shiliangzhinengduixiang f13 mr-5"></i>查 询</el-button>
      <el-button type="primary" class="btn-red shadow"><i class="iconfont icon-1 f13 mr-5"></i>重 置</el-button>
      <el-button @click="userCreat" type="primary" class="btn-green shadow"><i class="iconfont icon-iconfont707 f13 mr-5"></i>新增用户</el-button>
    </div>
  </header>
  <article class="mt-30">
    <el-table :data="tableData" v-loading.body="listLoading" fit highlight-current-row>
      <el-table-column align="center" label='序号' width="95" prop="num"></el-table-column>
      <el-table-column label="登录名" width="120">
      </el-table-column>
      <el-table-column label="用户姓名" width="120" align="center" prop="time"></el-table-column>
      <el-table-column label="部门" align="center" prop="time">
        <template scope="scope">
            <router-link class='inlineBlock' to="/waitDetails">
            {{scope.row.waitThing}}
            </router-link>
        </template>
      </el-table-column>
      <el-table-column label="角色" width="120" align="center" prop="time"></el-table-column>
      <el-table-column label="创建日期" width="120" align="center" prop="time"></el-table-column>
      <el-table-column align="center" prop="person" label="发送状态" width="80"></el-table-column>
      <el-table-column align="center" label="发送状态" width="200">
        <template scope="scope">
        <el-button type="text" size="small">编辑</el-button>
          <el-button @click="userStop" type="text" size="small">停用</el-button>
      </template>
      </el-table-column>
    </el-table>
  </article>
  <footer class="mt-30 cb pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000" class="fr">
    </el-pagination>
    <span class="fr f14 color-8 pagination-text mr-15">当前第1/50页，每页18条，共500条记录</span>
  </footer>
  <el-dialog :visible.sync="userCreatNew" size="tiny" custom-class="icms-dialog">
    <span slot="title">新增 - 用户信息</span>
    <div class="dialog-box">
      <div class="p20">
        <el-row :gutter="16">
          <el-col :span="5">
            <div class="grid-content tr mt-5">登录名：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-input size="small" v-model="formInline.user" placeholder="输入登录名"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="5">
            <div class="grid-content tr mt-5">用户姓名：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-input size="small" v-model="formInline.user" placeholder="输入姓名"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="5">
            <div class="grid-content tr mt-5">手机号码：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-input size="small" v-model="formInline.user" placeholder="输入手机号码"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="5">
            <div class="grid-content tr mt-5">电子邮箱：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-input size="small" v-model="formInline.user" placeholder="输入电子邮箱"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="5">
            <div class="grid-content tr mt-5">部门：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-select placeholder="请选择部门" class="w">
                <el-option label="部门一" value="shanghai"></el-option>
                <el-option label="部门二" value="beijing"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="5">
            <div class="grid-content tr mt-5">角色：</div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-select placeholder="请选择角色" class="w">
                <el-option label="角色一" value="shanghai"></el-option>
                <el-option label="角色二" value="beijing"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer tc mt-25 mb-10">
        <el-button class="btn-orange shadow" type="primary" @click="dialogVisible = false"><i class="iconfont icon-save f14 mr-5"></i>保 存</el-button>
        <el-button class="btn-white shadow" @click="dialogVisible = false">取 消</el-button>
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
      userCreatNew: false,
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
    userStop() {
      this.$confirm('您确认要停用该用户吗？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '停用成功!'
        });
      })
    },
    userCreat() { //新增公告
      this.userCreatNew = true;
    }
  }
};
</script>

<style lang="stylus">
#systemSetting-content
  .el-form--inline .el-form-item
    margin-bottom 0
</style>
