<template>
<div id="department-content" class="app-container">
  <header class="p20 bg-color-white shadow radius5 tr">
    <el-button @click="addDepartment" type="primary" class="btn-green shadow"><i class="iconfont icon-iconfont707 f12 mr-5"></i>新增部门</el-button>
  </header>
  <article class="mt-30">
    <el-table ref="multipleTable" :data="tableData" v-loading.body="listLoading" fit highlight-current-row>
      <el-table-column type="selection" align="center" label='序号' width="95" prop="num"></el-table-column>
      <el-table-column label="部门名称" width="120">

      </el-table-column>

      <el-table-column label="部门描述" align="left" prop="time"></el-table-column>
      <el-table-column label="排序" width="80" align="center" prop="time"></el-table-column>
      <el-table-column align="center" prop="person" label="操作" width="250">
        <template scope="scope">
        <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
  </article>

  <footer class="mt-30 cb pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000" class="fr">
    </el-pagination>
    <span class="fr f14 color-8 pagination-text mr-15">当前第1/50页，每页18条，共500条记录</span>
  </footer>
  <el-dialog :visible.sync="addDepartmentDialog" size="tiny" custom-class="icms-dialog">
    <span slot="title">新增-部门信息</span>
    <div class="dialog-box">
      <div class="add-department">
        <el-form label-width="100px">
          <el-form-item label="部门名称：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="部门排序：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="上级部门：">
            <el-select class="w" placeholder="请选择上级部门">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer tc mt-10 mb-20">
        <el-button class="btn-orange shadow" type="primary" @click="dialogVisible = false"><i class="iconfont icon-save f14 mr-5"></i>保 存</el-button>
        <el-button class="btn-white shadow" @click="setTimeDialog = false">清 空</el-button>
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
      addDepartmentDialog: false,
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
    addDepartment() { //新增公告
      this.addDepartmentDialog = true;
    },
    systemStop() { //停用
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
#department-content
  .add-department
    padding 10px 25px 10px 0
</style>
