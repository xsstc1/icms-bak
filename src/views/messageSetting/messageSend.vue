<template>
<div id="messageSend-content" class="app-container">
  <!-- <header class="p25 radius5 shadow bg-color-white">
    <el-button type="primary" class="btn-orange">发送</el-button>
    <el-button @click="setTimeSend" type="primary" class="btn-red">定时发送</el-button>
  </header> -->
  <article class="p25 bg-color-white shadow radius5">
    <el-row :gutter="30" class="mt-25">
      <el-col :span="13">
        <el-row :gutter="10">
          <el-col :span="5" class="tr">
            <div class="mt-10">
              收件人:
            </div>
          </el-col>
          <el-col :span="19">
            <el-select class="w" v-model="value10" multiple filterable allow-create placeholder="请选择收件人">
              <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="mt-25">
          <el-col :span="5" class="tr">
            <div class="mt-10">
              短信内容:
            </div>
          </el-col>
          <el-col :span="19">
            <el-input type="textarea" :rows="20" placeholder="请输入内容"></el-input>
            <div class="mt-15">
              建议短信内容控制在70个字符以内，否则运营商会分割成多条短信发送，当前已输入0字
            </div>
            <div class="mt-15">
              <el-checkbox v-model="checked">附加发送人信息：朱纪福
                <15397170760>
              </el-checkbox>
            </div>
            <div class="mt-20 mb-25">
              <el-button type="primary" class="btn-blue shadow"><i class="iconfont icon-svg35 f14 mr-5"></i>发 送</el-button>
              <el-button @click="setTimeSend" type="primary" class="btn-orange shadow"><i class="iconfont icon-dingshifasong f14 mr-5"></i>定时发送</el-button>
            </div>
          </el-col>
        </el-row>

      </el-col>
      <el-col :span="11">
        <div class="messageSend-person p20">
          <nav>
            选择联系人
          </nav>
          <el-tree class="mt-30 bn" :data="data2" show-checkbox node-key="id" :props="defaultProps"></el-tree>
        </div>
      </el-col>
    </el-row>
  </article>
  <el-dialog :visible.sync="setTimeDialog" size="tiny" custom-class="icms-dialog">
    <span slot="title">定时发送</span>
    <div class="dialog-box">
      <div class="p20">
        <div>
          选择定时发送的时间
        </div>
        <div class="mt-10">
          <el-date-picker class="w" v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <div class="mt-10 color-8">
          本邮件将在<strong class="color-black ml-5 mr-5">今天 上午 10:30</strong>投递到对方邮箱
        </div>
      </div>
      <div slot="footer" class="dialog-footer tc mt-10 mb-20">
        <el-button class="btn-orange shadow" type="primary" @click="dialogVisible = false"><i class="iconfont icon-svg35 f13 mr-5"></i>发 送</el-button>
        <el-button class="btn-white shadow" @click="setTimeDialog = false"><i class="iconfont icon-quxiao1 f14 mr-5"></i>取 消</el-button>
      </div>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  data() {
    return {
      setTimeDialog: false,
      options5: [{
        value: '朱纪福',
        label: '朱纪福'
      }, {
        value: '朱纪福',
        label: '朱纪福'
      }, {
        value: '朱纪福',
        label: '朱纪福'
      }],
      value10: [],
      data2: [{
        id: 1,
        label: '市场经营部',
        children: [{
          id: 4,
          label: '经营部',
          children: [{
            id: 9,
            label: '经营'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }

    }
  },
  created() {

  },
  methods: {
    setTimeSend() {
      this.setTimeDialog = true
    }
  }
};
</script>

<style lang="stylus">
#messageSend-content
  .messageSend-person
    border 1px solid #798da5
    border-radius 5px
    .el-tree-node__content
      border-radius 3px
    .el-date-editor
      width 100%
</style>
