<template>
<div id="wait-details" class="app-container">
  <header class="p25 bg-color-white pr shadow radius5">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="项目名称:">
        <el-input size="small" v-model="formInline.user" placeholder="请填写项目名称"></el-input>
      </el-form-item>
      <el-form-item label="委托单位:">
        <el-input size="small" v-model="formInline.user" placeholder="请填写委托单位"></el-input>
      </el-form-item>
      <el-form-item label="报告编号:">
        <el-input size="small" v-model="formInline.user" placeholder="请填写报告编号"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="项目负责人:">
        <el-input size="small" v-model="formInline.user" placeholder="请填写项目名称"></el-input>
      </el-form-item>
      <el-form-item label="归档日期:">
        <el-date-picker size="small" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="归档编号:">
        <el-input size="small" v-model="formInline.user" placeholder="请填写归档编号"></el-input>
      </el-form-item>
      <el-form-item label="建设单位:">
        <el-input size="small" v-model="formInline.user" placeholder="请填写建设单位"></el-input>
      </el-form-item>
      <div class="wait-detail-category">
        <el-form-item label="项目类别:">
          <span class="mr-10 active">标底编制</span>
          <span class="mr-10">标底编制（全过程）</span>
          <span class="mr-10">材料设备询价</span>
          <span class="mr-10">结算审核</span>
          <span class="mr-10">预算编制</span>
          <span class="mr-10">内审</span>
          <span class="mr-10">标底（零星）</span>
          <span class="mr-10">清单编制</span>
          <span class="mr-10">全过程</span>
        </el-form-item>
      </div>
      <div class="wait-detail-status">
        <el-form-item label="项目状态:">
          <span class="mr-10 active">全部</span>
          <span class="mr-10">进行中</span>
          <span class="mr-10">项目登记</span>
          <span class="mr-10">项目分配</span>
          <span class="mr-10">单项工程审核</span>
          <span class="mr-10">技术负责人审核</span>
          <span class="mr-10">领导签发</span>
          <span class="mr-10">填写报告</span>
          <span class="mr-10">项目归档</span>
          <span class="mr-10">上传档案补充资料</span>
          <span class="mr-10">完成</span>
        </el-form-item>
      </div>
    </el-form>
    <div class="wait-details-slide disinblock f12 pa tc">
      <span class="disinblock cp shadow">点击收起<i class="iconfont icon-triangle-down-copy f12 ml-5"></i></span>
    </div>
    <div class="tr wait-header-btn f13">
      <el-button size="small" class="wait-header-search" type="primary">查询</el-button>
      <el-button size="small" class="wait-header-new" type="primary" @click="creatNew = true"><i class="iconfont icon-iconfont707 f12 mr-5"></i>新建</el-button>
      <el-button size="small" class="wait-header-in" type="primary"><i class="iconfont icon-tianjiawenjianjia f12 mr-5"></i>导入文件</el-button>
      <el-button size="small" class="wait-header-out" type="primary"><i class="iconfont icon-excel f12 mr-5"></i>导出Excel</el-button>
    </div>
  </header>
  <article class="mt-70">
    <el-table class="f13" ref="multipleTable" :data="tableData" v-loading.body="listLoading" fit highlight-current-row>
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column align="center" label='序号' width="60" prop="num"></el-table-column>
      <el-table-column label="项目名称" width="170">
        <template scope="scope">
        <router-link class='inlineBlock' to="/">
        {{scope.row.waitThing}}
        </router-link>
      </template>
      </el-table-column>
      <el-table-column align="center" label='委托单位' width="150" prop="time"></el-table-column>
      <el-table-column align="center" label='项目负责人' width="90" prop="time"></el-table-column>
      <el-table-column align="center" label='报告编号' width="90" prop="time"></el-table-column>
      <el-table-column align="center" label='归档号' width="80" prop="time"></el-table-column>
      <el-table-column align="center" label='资料收到日期' width="110" prop="time"></el-table-column>
      <el-table-column align="center" label='提交归档时间' width="110" prop="time"></el-table-column>
      <el-table-column align="center" label='工作项目类型' width="110" prop="time"></el-table-column>
      <el-table-column align="center" label='施工合同金额（元）' width="120" prop="time"></el-table-column>
      <el-table-column align="center" label='送审价' width="90" prop="time"></el-table-column>
      <el-table-column align="center" label='流程状态' width="90" prop="time"></el-table-column>
      <el-table-column align="center" label="操作管理" fixed="right" width="200">
        <template scope="scope">
        <el-button @click="dialogVisible = true" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
  </article>
  <!-- <footer class="mt-30 cb pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000" class="fr">
    </el-pagination>
    <span class="fr f14 color-8 pagination-text mr-15">当前第1/50页，每页18条，共500条记录</span>
  </footer> -->
  <el-dialog :visible.sync="dialogVisible" size="small" custom-class="icms-dialog">
    <span slot="title">查看 - 全过程项目信息</span>
    <div class="dialog-box">
      <div class="icms-dialog-content  pr">
        <nav class="pa">
          项目基本信息
        </nav>
        <el-row :gutter="16">
          <el-col :span="6">
            <div class="grid-content tr">项目名称：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">苏州招商公园1872项目工程</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">项目编号：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">8888888888</div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">合同编号：8888888</div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">资料收到日期：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">2016-12-01</div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">约定作业完成日期：2017-12-31</div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">工程所在地：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">苏州市相城新苏虞张东、华元路北</div>
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
            <div class="grid-content">普通</div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">委托单位名称：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">苏州招商瑞诚房地产有限公司 </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">委托单位联系人：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">季肖峰</div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">委托单位联系方式：18852406418</div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">建设单位名称：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">苏州招商瑞诚房地产有限公司</div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">建设单位联系人：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">季肖峰</div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">建设单位联系方式：18852406418</div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">分管副总：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">简素</div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">项目经理：徐俊惠</div>
          </el-col>
        </el-row>
      </div>
      <div class="icms-dialog-content  pr mt-40">
        <nav class="pa">
          工作要求附件
        </nav>
        <el-table class="tc" :data="workFile" style="width: 100%" fit highlight-current-row>
          <el-table-column prop="num" label="编号" width="50"></el-table-column>
          <el-table-column prop="fileName" label="文件名称"></el-table-column>
          <el-table-column prop="time" label="上传时间" width="150"></el-table-column>
          <el-table-column prop="person" label="上传人" width="120"></el-table-column>
        </el-table>
      </div>
    </div>
  </el-dialog>
  <el-dialog :visible.sync="creatNew" size="small" custom-class="icms-dialog">
    <span slot="title">新增 - 造价资讯项目信息</span>
    <div class="dialog-box">
      <div class="icms-dialog-content  pr">
        <nav class="pa">
          项目合同信息
        </nav>
        <el-row :gutter="16">
          <el-col :span="6">
            <div class="grid-content tr">咨询合同编号：</div>
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
            <div class="grid-content tr">咨询合同类型：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">签订情况：
              <el-select style="width:80px" size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">咨询合同金额（元：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content">收费方式：
              <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
              <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="icms-dialog-content pr mt-40">
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
            <div class="grid-content tr">工程用途：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">工程结构：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">计量单位：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">咨询类型：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">工作项目类别：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content"></div>
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
          <el-col :span="8" class="tc">
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
            <div class="grid-content">委托单位电话：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">投资性质：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">工程所在地：</div>
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
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">登记日期：</div>
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
            <div class="grid-content tr">约定作业完成日期：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-date-picker size="mini" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">项目详细要求：</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-input type="textarea" :rows="2" placeholder="请输入内容">
              </el-input>
            </div>
          </el-col>
          <el-col :span="8" class="tc">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">技术负责人：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">项目分配人：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option :label="造价资讯合同" :value="造价资讯合同"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="icms-dialog-content  pr mt-40">
        <nav class="pa">
          建设单位信息
        </nav>
        <el-row :gutter="16" class="mt-15">
          <el-col :span="6">
            <div class="grid-content tr">建设单位名称：</div>
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
            <div class="grid-content tr">建设单位联系人：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-input size="mini" placeholder="请输入内容" v-model="input8"></el-input>
            </div>
          </el-col>
          <el-col :span="6" class="tr">
            <div class="grid-content">建设单位联系电话：</div>
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
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
          <el-button class="wait-details-upload" size="small" type="primary"><i class="iconfont icon-tianjiawenjianjia mr-5 f15"></i>开始添加文件</el-button>
          <div slot="tip" class="el-upload__tip">支持文件类型(*.doc;*.docx;*.xls;*.xlsx;*.ppt;*.pptx;*.zip;*.rar;*.epjs;*.emjs;*.emjsx;*.epjsx;*.pdf)</div>
        </el-upload>
        <el-table class="tc mt-20" :data="workFile" style="width: 100%" fit highlight-current-row>
          <el-table-column prop="num" label="编号" width="50"></el-table-column>
          <el-table-column prop="fileName" label="文件名称"></el-table-column>
          <el-table-column prop="time" label="上传时间" width="150"></el-table-column>
          <el-table-column prop="person" label="上传人" width="120"></el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer tc mt-35">
        <el-button class="wait-details-new-save" type="primary" @click="dialogVisible = false">保存</el-button>
        <el-button class="wait-details-new-cancel" @click="dialogVisible = false">取 消</el-button>
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
      listLoading: true,
      dialogVisible: false,
      creatNew: false,
      formInline: {
        user: '',
        region: ''
      },
      workFile: [{
        num: 1,
        fileName: '报告3213121233.doc',
        time: '2017-05-08',
        person: '郑东'
      }],
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
    }
  }
};
</script>

<style lang="stylus">
#wait-details
  .el-form-item
    margin-bottom 10px
  .wait-detail-status
    margin-top -15px
  .wait-detail-category,.wait-detail-status
    span
      cursor pointer
      display inline-block
      line-height 24px
    span.active
      background-color #ff885a
      padding 0 10px
      color #fff
      border-radius 3px
  .wait-details-slide
    bottom -28px
    width 100%
    left 0
    span
      background-color #fff
      padding 5px 10px
      border-bottom-left-radius 3px
      border-bottom-right-radius 3px
      border 1px solid #efefef
      border-top none
      i
        color #ff885a
  .wait-header-btn
    button
      padding 8px 15px
      margin 15px 10px
      &:hover
        opacity 0.7
    .wait-header-search
      background-color #ff7373
      border-color #ff7373
    .wait-header-new
      background-color #65bb24
      border-color #65bb24
    .wait-header-in
      background-color #ff885a
      border-color #ff885a
    .wait-header-out
      background-color #3b9fda
      border-color #3b9fda
  .el-table .cell, .el-table th>div
    padding 0
  .el-table th
    text-align center
  .el-table-column--selection
    div
      text-align center
  .wait-details-upload,.wait-details-new-save
    background-color #ff885a
    border 1px solid #ff885a
  .wait-details-new-save,.wait-details-new-cancel
    padding 8px 25px
</style>
