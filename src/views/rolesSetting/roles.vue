<template>
<div id="department-content" class="app-container">
  <header class="p20 bg-color-white shadow radius5 tr">
    <input class="roles-search f13" placeholder="请输入您想查找的角色名" /><button type="primary" class="btn-orange shadow roles-search-btn el-button color-white">查询</button>
    <el-button @click="addDepartment" type="primary" class="btn-green shadow"><i class="iconfont icon-iconfont707 f12 mr-5"></i>新增角色</el-button>
  </header>
  <article class="mt-30">
    <el-table ref="multipleTable" :data="tableData" v-loading.body="listLoading" fit highlight-current-row>
      <el-table-column type="selection" align="center" label='序号' width="95" prop="num"></el-table-column>
      <el-table-column label="角色名" width="120" prop="rolename">

      </el-table-column>

      <el-table-column label="角色描述" align="left" prop="waitThing"></el-table-column>
      <el-table-column label="创建时间" width="120" align="center" prop="time"></el-table-column>
      <el-table-column align="center" prop="person" label="操作" width="250">
        <template scope="scope">
        <el-button type="text" size="small">编辑</el-button>
          <el-button @click="roleSetting" type="text" size="small">权限配置</el-button>
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
        <el-button class="btn-white shadow" @click="dialogVisible = false"><i class="iconfont icon-quxiao1 f14 mr-5"></i>取 消</el-button>
      </div>
    </div>
  </el-dialog>
  <el-dialog :visible.sync="roleSettingDialog" size="small" custom-class="icms-dialog">
    <span slot="title">权限管理</span>
    <div class="dialog-box">
      <div class="mt-10 cb">
        <div class="fl w10 mt-15">
          设置权限：
        </div>
        <div class="fl w90 role-setting-box">
          <header class="cb p15 fb bb-1">
            <div class="fl w25">
              功能模块
            </div>
            <div class="fl w75">
              权限配置规则
            </div>
          </header>
          <section class="role-setting">
            <div class="cb bb-1">
              <div class="fl w25 p15">
                <el-checkbox>我的首页</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="">
                  <div class="">
                    <el-checkbox>内容发布</el-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="cb bb-1 pb-15">
              <div class="fl w25 p15">
                <el-checkbox>造价咨询</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>项目管理</el-checkbox>
                  </div>
                  <ul class="cb">
                    <li><el-checkbox>新增</el-checkbox></li>
                    <li><el-checkbox>修改</el-checkbox></li>
                    <li><el-checkbox>删除</el-checkbox></li>
                    <li><el-checkbox>提交</el-checkbox></li>
                    <li><el-checkbox>分配</el-checkbox></li>
                    <li><el-checkbox>审核</el-checkbox></li>
                    <li><el-checkbox>签发</el-checkbox></li>
                    <li><el-checkbox>归档</el-checkbox></li>
                    <li><el-checkbox>查看</el-checkbox></li>
                    <li><el-checkbox>新增</el-checkbox></li>
                    <li><el-checkbox>填写报告</el-checkbox></li>
                  </ul>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>单项工程</el-checkbox>
                  </div>
                  <ul class="cb">
                    <li><el-checkbox>上传电子文件</el-checkbox></li>
                    <li><el-checkbox>提交复核</el-checkbox></li>
                    <li><el-checkbox>复核</el-checkbox></li>
                  </ul>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>项目逾期</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>单项逾期</el-checkbox>
                  </div>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>造价咨询文件</el-checkbox>
                  </div>
                  <ul class="cb">
                    <li><el-checkbox>新增</el-checkbox></li>
                    <li><el-checkbox>删除</el-checkbox></li>
                    <li><el-checkbox>查看</el-checkbox></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="cb mt-15  bb-1 pb-15">
              <div class="fl w25 p15">
                <el-checkbox>全过程管理</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>项目管理</el-checkbox>
                  </div>
                  <ul class="cb">
                    <li><el-checkbox>新增</el-checkbox></li>
                    <li><el-checkbox>修改</el-checkbox></li>
                    <li><el-checkbox>查看</el-checkbox></li>
                    <li><el-checkbox>分配</el-checkbox></li>
                  </ul>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>单位工程</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>专业工作逾期</el-checkbox>
                  </div>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>全过程文件</el-checkbox>
                  </div>
                  <ul class="cb">
                    <li><el-checkbox>新增</el-checkbox></li>
                    <li><el-checkbox>删除</el-checkbox></li>
                    <li><el-checkbox>查看</el-checkbox></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="cb mt-10 bb-1 pb-15">
              <div class="fl w25 p15">
                <el-checkbox>招标代理</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>采购代理</el-checkbox>
                  </div>
                  <ul class="cb">
                    <li><el-checkbox>新增</el-checkbox></li>
                    <li><el-checkbox>修改</el-checkbox></li>
                    <li><el-checkbox>删除</el-checkbox></li>
                    <li><el-checkbox>查看</el-checkbox></li>
                    <li><el-checkbox>项目审核</el-checkbox></li>
                    <li><el-checkbox>标书编制</el-checkbox></li>
                    <li><el-checkbox>标书审核</el-checkbox></li>
                    <li><el-checkbox>上网申请</el-checkbox></li>
                    <li><el-checkbox>上网审核</el-checkbox></li>
                    <li><el-checkbox>标书答疑</el-checkbox></li>
                    <li><el-checkbox>答疑审核</el-checkbox></li>
                    <li><el-checkbox>填写中标结果</el-checkbox></li>
                    <li><el-checkbox>归档</el-checkbox></li>
                    <li><el-checkbox>归档复查</el-checkbox></li>
                    <li><el-checkbox>归档终查</el-checkbox></li>
                  </ul>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>工程代理</el-checkbox>
                  </div>
                  <ul class="cb">
                    <li><el-checkbox>新增</el-checkbox></li>
                    <li><el-checkbox>修改</el-checkbox></li>
                    <li><el-checkbox>删除</el-checkbox></li>
                    <li><el-checkbox>查看</el-checkbox></li>
                    <li><el-checkbox>项目审核</el-checkbox></li>
                    <li><el-checkbox>公告编制</el-checkbox></li>
                    <li><el-checkbox>公告审核</el-checkbox></li>
                    <li><el-checkbox>招标文件上传</el-checkbox></li>
                    <li><el-checkbox>招标文件审核</el-checkbox></li>
                    <li><el-checkbox>填写中标结果</el-checkbox></li>
                    <li><el-checkbox>归档</el-checkbox></li>
                    <li><el-checkbox>归档复查</el-checkbox></li>
                    <li><el-checkbox>归档终查</el-checkbox></li>
                  </ul>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>采购单位维护</el-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="cb mt-10 bb-1 pb-15">
              <div class="fl w25 p15">
                <el-checkbox>财务管理</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>保证金</el-checkbox>
                  </div>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>收费</el-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="cb mt-10 bb-1 pb-15">
              <div class="fl w25 p15">
                <el-checkbox>短信管理</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>短信发送</el-checkbox>
                  </div>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>短信查询</el-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="cb mt-10 bb-1 pb-15">
              <div class="fl w25 p15">
                <el-checkbox>权限管理</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>部门管理</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>角色管理</el-checkbox>
                  </div>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>用户管理</el-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="cb mt-10 bb-1 pb-15">
              <div class="fl w25 p15">
                <el-checkbox>系统管理</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>公告管理</el-checkbox>
                  </div>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>全过程</el-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="cb mt-10">
              <div class="fl w25 p15">
                <el-checkbox>业务监控</el-checkbox>
              </div>
              <div class="fl w75 p15">
                <div class="bb-1 pb-15">
                  <div>
                    <el-checkbox>单项工程查询</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>审核单问题查询</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>采购待开标查询</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>工程招标查询</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>工程待开标查询</el-checkbox>
                  </div>
                </div>
                <div class="mt-15 bb-1 pb-15">
                  <div>
                    <el-checkbox>采购统计查询</el-checkbox>
                  </div>
                </div>
                <div class="mt-15">
                  <div>
                    <el-checkbox>采购产值查询</el-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div slot="footer" class="dialog-footer tc mt-30 mb-20 bt-1 pt-40">
        <el-button class="btn-orange shadow" type="primary" @click="dialogVisible = false"><i class="iconfont icon-save f14 mr-5"></i>保 存</el-button>
        <el-button class="btn-white shadow" @click="dialogVisible = false"><i class="iconfont icon-quxiao1 f14 mr-5"></i>取 消</el-button>
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
    roleSetting() {
      this.roleSettingDialog = true;
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
  .roles-search-btn
    border-top-left-radius 0
    border-bottom-left-radius 0
  .role-setting
    ul
      li
        float left
        display inline-block
        margin-right 10px
        margin-top 10px
</style>
