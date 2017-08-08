<template>
<div id="article-content" class="app-container">
  <header class="p20 bg-color-white shadow radius5 tr">
    <input class="roles-search f13" placeholder="请输入您想查找的文章标题" /><button type="primary" class="btn-orange roles-search-btn el-button color-white shadow">搜索</button>
    <el-button @click="addArticle" type="primary" class="btn-green shadow"><i class="iconfont icon-iconfont707 f12 mr-5"></i>发布文章</el-button>
  </header>
  <article class="mt-30">
    <el-table ref="multipleTable" :data="tableData" v-loading.body="listLoading" fit highlight-current-row>
      <el-table-column align="center" label='序号' width="95" prop="num"></el-table-column>
      <el-table-column label="标题" align="left" prop="waitThing"></el-table-column>
      <el-table-column label="时间" width="120" align="left" prop="time"></el-table-column>
      <el-table-column label="作者" width="120" align="center" prop="person"></el-table-column>
      <el-table-column align="center" prop="person" label="操作" width="250">
        <template scope="scope">
        <el-button type="text" size="small">更新文章</el-button>
          <el-button type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
  </article>

  <!-- <footer class="mt-30 cb pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000" class="fr">
    </el-pagination>
    <span class="fr f14 color-8 pagination-text mr-15">当前第1/50页，每页18条，共500条记录</span>
  </footer> -->
  <el-dialog :visible.sync="addArticleDialog" size="small" custom-class="icms-dialog">
    <span slot="title">发布文章</span>
    <div class="dialog-box">
      <div class="add-department">
        <el-form label-width="100px">
          <el-form-item label="文章标题：">
            <el-input placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item label="文章内容：">
            <div class="article-edit">
              <quill-editor v-model="content" :options="editorOption"></quill-editor>
            </div>
          </el-form-item>
          <el-form-item label="附件文件：">
            <dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess">
              <!-- Optional parameters if any! -->
              <input type="hidden" name="token" value="xxx">
            </dropzone>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer tc mt-10 mb-20">
        <el-button class="btn-orange shadow" type="primary" @click="saveNotice"><i class="iconfont icon-save f14 mr-5"></i>保 存</el-button>
        <el-button class="btn-white shadow" @click="setTimeDialog = false"><i class="iconfont icon-quxiao1 f14 mr-5"></i>取 消</el-button>
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
      content: '',
      addArticleDialog: false,
      roleSettingDialog: false,
      listLoading: true,
      tableData: [{
        num: 1,
        rolename: "副总经理",
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 2,
        rolename: "副总经理",
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 3,
        rolename: "副总经理",
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }, {
        num: 4,
        rolename: "总经理",
        waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
        time: '2017-05-08',
        person: '郑东'
      }],
      editorOption: {
        placeholder: '请输入内容',
        modules: {
          toolbar: [
            [{
              'size': ['small', false, 'large', 'huge']
            }],
            ['bold', 'italic', 'underline', 'strike'],
            [{
              'color': []
            }, {
              'background': []
            }],
            [{
              'align': []
            }],
            [{
              'list': 'ordered'
            }, {
              'list': 'bullet'
            }],
            ['link', 'image']
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          }
          // imageImport: true,
          // imageResize: {
          //   displaySize: true
          // }
        }
      }
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
    addArticle() { //新增文章
      this.addArticleDialog = true;
    },
    roleSetting() {
      this.roleSettingDialog = true;
    },
    'showSuccess': function(file) {
      console.log('A file was successfully uploaded')
    },
    saveNotice() {
      console.log("富文本内容", this.content)
    }
  }
};
</script>

<style lang="stylus">
#article-content
  .add-department
    padding 10px 25px 10px 0
  .roles-search-btn
    border-top-left-radius 0
    border-bottom-left-radius 0
  .article-edit
    line-height 1.5
    .ql-toolbar
      border-top-left-radius 4px
      border-top-right-radius 4px
      border 1px solid #798da5
    .ql-container
      border-bottom-left-radius 4px
      border-bottom-right-radius 4px
      border 1px solid #798da5
      border-top none
      .ql-editor
        min-height 200px
  .dropzone .dz-preview .dz-image
    border-radius 4px

</style>
