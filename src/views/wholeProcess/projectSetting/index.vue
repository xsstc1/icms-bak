<template>
<div id="projectSetting-content" class="app-container">
  <header class="p25 bg-color-white shadow radius5 header-search">
    <div>
      <el-form :inline="true" :model="formInline" :label-position="right" label-width="110px">
        <el-form-item label="项目名称:" class="mt-10">
          <el-input class="w" size="small" v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="项目经理:" class="mt-10">
          <el-input class="w" size="small" v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="委托单位名称:" class="mt-10">
          <el-input class="w" size="small" v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="流程状态:" class="mt-10">
          <el-select size="small" placeholder="请选择">
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="mt-30 mb-5 tc">
      <el-button type="primary" class="btn-orange shadow mr-50"><i class="iconfont icon-shiliangzhinengduixiang f13 mr-5"></i>查 询</el-button>

      <el-button @click="creatNew = true" type="primary" class="btn-red shadow"><i class="iconfont icon-iconfont707 f13 mr-5"></i>新增项目</el-button>
      <el-button class="btn-green shadow" type="primary"><i class="iconfont icon-excel f12 mr-5"></i>导出Excel</el-button>
    </div>
  </header>
  <article class="mt-30">
    <el-table :data="tableData" v-loading.body="listLoading" element-loading-text="拼命加载中" fit highlight-current-row>
      <el-table-column align="center" label='序号' width="95" prop="num"></el-table-column>
      <el-table-column label="项目编号" width="100">
      </el-table-column>
      <el-table-column label="项目名称" width="120" align="center" prop="time"></el-table-column>
      <el-table-column label="项目经理" align="center" prop="time">
        <template scope="scope">
            <router-link class='inlineBlock' to="/waitDetails">
            {{scope.row.waitThing}}
            </router-link>
        </template>
      </el-table-column>
      <el-table-column label="委托单位名称" width="120" align="center" prop="time"></el-table-column>
      <el-table-column label="资料收到日期" width="120" align="center" prop="time"></el-table-column>
      <el-table-column align="center" prop="person" label="流程状态" width="80"></el-table-column>
      <el-table-column align="center" label="操作" width="350">
        <template scope="scope">
        <el-button type="text" size="small">基本信息</el-button>
        <el-button type="text" size="small">工程进度</el-button>
        <el-button type="text" size="small">修改</el-button>
        <el-button type="text" size="small" @click="toProjectWork">项目工作</el-button>
        <el-button type="text" size="small">分配</el-button>
        <el-button type="text" size="small">结束</el-button>
        <el-button type="text" size="small">留言簿</el-button>
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
  <el-dialog :visible.sync="creatNew" size="small" custom-class="icms-dialog">
    <span slot="title">新增 - 全过程项目信息</span>
    <div class="dialog-box">
      <div class="icms-dialog-content pr mt-10">
        <nav class="pa">
          项目基本信息
        </nav>
        <el-row :gutter="16">
          <el-col :span="6">
            <div class="grid-content tr">项目名称：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">项目编号：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">合同编号：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">资料收到日期：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-date-picker size="mini" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">约定作业完成日期：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-date-picker size="mini" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">工程所在地：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">重要性：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
              <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
            </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">分管副总：
              <el-select style="width:80px" size="mini" v-model="value" placeholder="请选择">
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">委托单位名称：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="8" class="tr">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">委托单位联系人：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">委托单位联系方式：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">建设单位名称：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="8" class="tr">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">建设单位联系人：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">建设单位联系方式：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="icms-dialog-content  pr mt-40">
        <nav class="pa">
          工作要求附件
        </nav>
        <el-table class="tc mb-30 bbs-1" :data="workFile" style="width: 100%" fit highlight-current-row>
          <el-table-column prop="num" label="编号" width="50"></el-table-column>
          <el-table-column prop="fileName" label="文件名称"></el-table-column>
          <el-table-column prop="time" label="上传时间" width="150"></el-table-column>
          <el-table-column prop="person" label="上传人" width="120"></el-table-column>
        </el-table>
        <div class="bts-1 pt-15">
          <dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess">
            <!-- Optional parameters if any! -->
            <input type="hidden" name="token" value="xxx">
          </dropzone>
        </div>
      </div>
      <div slot="footer" class="dialog-footer tc mt-35">
        <el-button class="btn-orange shadow" type="primary" @click="dialogVisible = false"><i class="iconfont icon-save f14 mr-5"></i>保 存</el-button>
        <el-button class="btn-white shadow" @click="creatNew = false">取 消</el-button>
      </div>
    </div>
  </el-dialog>
</div>
</template>

<script>
import {
  getList
} from '@/api/table';
import Dropzone from 'icms-dropzone';
export default {
  components: {
    Dropzone
  },
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      creatNew: false,
      listLoading: true,
      tableData: [{
        num: 1,
        waitThing: '戴利华',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 2,
        waitThing: '戴利华',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 3,
        waitThing: '戴利华',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 4,
        waitThing: '戴利华',
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
    },
    // toProjectWork() {​
    //   this.$router.push({
    //     path:"/projectSetting/projectWork"
    //   }) //向url中传递参数
    // }
    toProjectWork(){
      this.$router.push({
        path:"projectWork"
        }) //向url中传递参数
    }
  }
};
</script>

<style lang="stylus">
#projectSetting-content
  .el-form--inline .el-form-item
    margin-bottom 0
  .dropzone
    border none
  .el-table
    box-shadow none
</style>
