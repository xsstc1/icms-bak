<template>
  <div id="wait-content" class="app-container">
      <el-tabs type="card">
  <el-tab-pane>
    <span slot="label">造价咨询（0）</span>
    <el-table :data="tableData" v-loading.body="listLoading" fit highlight-current-row>
      <el-table-column align="center" label='序号' width="95" prop="num"></el-table-column>
      <el-table-column label="待办事项">
        <template scope="scope">
          <router-link class='inlineBlock' to="/waitDetails">
          {{scope.row.waitThing}}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column label="时间" width="300" align="center" prop="time"></el-table-column>
      <el-table-column align="center" prop="person" label="项目负责人" width="300"></el-table-column>
    </el-table>
  </el-tab-pane>
  <el-tab-pane>
    <span slot="label">工程代理（10）</span>
  </el-tab-pane>
  <el-tab-pane>
    <span slot="label">采购代理（0）</span>
    </el-tab-pane>
  <el-tab-pane>
    <span slot="label">全过程（0）</span>

  </el-tab-pane>
</el-tabs>
<footer class="mt-30 cb pagination">
  <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
        class="fr"
        >
      </el-pagination>
  <span class="fr f14 color-8 pagination-text mr-15">当前第1/50页，每页18条，共500条记录</span>
</footer>

  </div>
</template>

<script>
  import { getList } from '@/api/table';

  export default {
    data() {
      return {
        listLoading: true,
        tableData: [{
           num: 1 ,
           waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
           time: '2017-05-08',
           person: '郑东'
         }, {
           num: 2 ,
           waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
           time: '2017-05-08',
           person: '郑东'
         }, {
           num: 3 ,
           waitThing: '待归档：苏州苏绣小镇项目小镇客厅单体及景观设计',
           time: '2017-05-08',
           person: '郑东'
         }, {
           num: 4 ,
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
      }
    }
  };
</script>

<style lang="stylus">
#wait-content
  .el-tabs__content
    overflow inherit
  .el-tabs__header
    padding 15px
    border none
    background-color #fff
    border-radius 5px
    font-weight 600
    box-shadow 0px 1px 3px rgba(0, 0, 0, 0.12)
    .el-tabs__nav
      border 1px solid #324157
      border-radius 5px
      .el-tabs__item
        height 38px
        line-height 37px
      .el-tabs__item:nth-child(2)
        border-right 1px solid #324157
        border-left 1px solid #324157
      .el-tabs__item:nth-child(3)
        border-right 1px solid #324157
    .el-tabs__item.is-active
      border 1px solid transparent
      background-color #37c3d2
      border-radius 0
      color #fff
  a
    transition all .3s
  .el-table__body tr.current-row>td,.el-table--enable-row-hover .el-table__body tr:hover>td
    background-color #f1f1f1
    a
      color #ec852a
      text-decoration underline
  .pagination
    .pagination-text
      margin-top 8px

</style>
