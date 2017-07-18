<template>
<div class="home-container p25">
  <!-- <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div> -->
  <header class="cb">
    <div class="w20 fl p0-10 mt-10">
      <div class="home-wait bg-color-white radius5 cb oh">
        <div class="fl w40 tc p20 home-icon"><i class="iconfont icon-daiban f50 color-white"></i></div>
        <div class="fl w60 tl p20 home-title color-white">
          <div class="f14">
            待办事项
          </div>
          <div class="f35 beauty-num">
            301
          </div>
        </div>
      </div>
    </div>
    <div class="w20 fl p0-10 mt-10">
      <div class="home-culture bg-color-white radius5 cb oh">
        <div class="fl w40 tc p20 home-icon"><i class="iconfont icon-bendiwenhua f50 color-white"></i></div>
        <div class="fl w60 tl p20 home-title color-white">
          <div class="f14">
            企业文化
          </div>
          <div class="f35 beauty-num">
            301
          </div>
        </div>
      </div>
    </div>
    <div class="w20 fl p0-10 mt-10">
      <div class="home-notice bg-color-white radius5 cb oh">
        <div class="fl w40 tc p20 home-icon"><i class="iconfont icon-icon03 f50 color-white"></i></div>
        <div class="fl w60 tl p20 home-title color-white">
          <div class="f14">
            通知公告
          </div>
          <div class="f35 beauty-num">
            301
          </div>
        </div>
      </div>
    </div>
    <div class="w20 fl p0-10 mt-10">
      <div class="home-info bg-color-white radius5 cb oh">
        <div class="fl w40 tc p20 home-icon"><i class="iconfont icon-ziliao f50 color-white"></i></div>
        <div class="fl w60 tl p20 home-title color-white">
          <div class="f14">
            内部资料
          </div>
          <div class="f35 beauty-num">
            301
          </div>
        </div>
      </div>
    </div>
    <div class="w20 fl p0-10 mt-10">
      <div class="home-honor bg-color-white radius5 cb oh">
        <div class="fl w40 tc p20 home-icon"><i class="iconfont icon-rongyu f50 color-white"></i></div>
        <div class="fl w60 tl p20 home-title color-white">
          <div class="f14">
            企业荣誉
          </div>
          <div class="f35 beauty-num">
            301
          </div>
        </div>
      </div>
    </div>
  </header>
  <article class="p10">
    <el-row :gutter="20">
      <el-col :span="14" :xs="24" class="mt-25">
        <div class="grid-content home-list-wait bg-color-white oh radius5">
          <nav class="color-m6 f14 cb bbs-1 p15">
            <div class="fl">
              <i class="iconfont icon-daiban mr-5"></i>代办事项
            </div>
            <div class="fr f13">
              更多>>
            </div>
          </nav>
          <section>
            <nav class="cb f13 fb">
              <div class="fl w50">
                <span class="p0-10 text-short">代办主题</span>
              </div>
              <div class="fl w15">
                <span class="p0-10 text-short">通知时间</span>
              </div>
              <div class="fl w15">
                <span class="p0-10 text-short">事物类型</span>
              </div>
              <div class="fl w20">
                <span class="p0-10 text-short">状态</span>
              </div>
            </nav>
            <ul class="f13">
              <li class="cb">
                <div class="fl w50 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">造价咨询</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">待填写中标结果</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w50 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">造价咨询</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">待填写中标结果</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w50 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">造价咨询</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">待填写中标结果</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w50 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">造价咨询</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">待填写中标结果</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w50 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">造价咨询</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">待填写中标结果</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w50 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w15 text-short">
                  <span class="p0-10">造价咨询</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">待填写中标结果</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </el-col>
      <el-col :span="10" :xs="24" class="mt-25">
        <div class="grid-content home-list-price bg-color-white oh radius5">
          <nav class="color-m6 f14 cb bbs-1 p15">
            <div class="fl">
              <i class="iconfont icon-daiban mr-5"></i>价格材料
            </div>
            <div class="fr f13">
              更多>>
            </div>
          </nav>
          <section>
            <nav class="cb f13 fb">
              <div class="fl w60">
                <span class="p0-10 text-short">主题</span>
              </div>
              <div class="fl w20">
                <span class="p0-10 text-short">发布时间</span>
              </div>
              <div class="fl w20">
                <span class="p0-10 text-short">发布人</span>
              </div>
            </nav>
            <ul class="f13">
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">2017年1~4月建设工程材料指导价</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">2017年1~4月建设工程材料指导价</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">2017年1~4月建设工程材料指导价</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">2017年1~4月建设工程材料指导价</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">2017年1~4月建设工程材料指导价</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">2017年1~4月建设工程材料指导价</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </el-col>
      <el-col :span="14" :xs="24" class="mt-25">
        <div class="grid-content home-list-notice bg-color-white oh radius5">
          <nav class="color-m6 f14 cb bbs-1 p15">
            <div class="fl">
              <i class="iconfont icon-daiban mr-5"></i>公告栏
            </div>
            <div class="fr f13">
              更多>>
            </div>
          </nav>
          <section>
            <nav class="cb f13 fb">
              <div class="fl w60">
                <span class="p0-10 text-short">主题</span>
              </div>
              <div class="fl w20">
                <span class="p0-10 text-short">发布时间</span>
              </div>
              <div class="fl w20">
                <span class="p0-10 text-short">发布人</span>
              </div>
            </nav>
            <ul class="f13">
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </el-col>
      <el-col :span="10" :xs="24" class="mt-25">
        <div class="grid-content home-list-rule bg-color-white oh radius5">
          <nav class="color-m6 f14 cb bbs-1 p15">
            <div class="fl">
              <i class="iconfont icon-daiban mr-5"></i>法规制度
            </div>
            <div class="fr f13">
              更多>>
            </div>
          </nav>
          <section>
            <el-row class="f14">
              <el-col :span="12" :xs="24" class="mt-25">
                <div class="grid-content tc">
                  <span class="text-short">工程造价咨询档案立卷规则</span>
                </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-25">
                <div class="grid-content tc">
                <span class="text-short">工程造价咨询档案立卷规则</span>
              </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-25">
                <div class="grid-content tc">
                <span class="text-short">工程造价咨询档案立卷规则</span>
              </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-25">
                <div class="grid-content tc">
                <span class="text-short">工程造价咨询档案立卷规则</span>
              </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-25">
                <div class="grid-content tc">
                <span class="text-short">工程造价咨询档案立卷规则</span>
              </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-25">
                <div class="grid-content tc">
                <span class="text-short">工程造价咨询档案立卷规则</span>
              </div>
              </el-col>
            </el-row>
          </section>
        </div>
      </el-col>
      <el-col :span="14" :xs="24" class="mt-25">
        <div class="grid-content home-list-info bg-color-white oh radius5">
          <nav class="color-m6 f14 cb bbs-1 p15">
            <div class="fl">
              <i class="iconfont icon-daiban mr-5"></i>内部资料
            </div>
            <div class="fr f13">
              更多>>
            </div>
          </nav>
          <section>
            <nav class="cb f13 fb">
              <div class="fl w60">
                <span class="p0-10 text-short">主题</span>
              </div>
              <div class="fl w20">
                <span class="p0-10 text-short">发布时间</span>
              </div>
              <div class="fl w20">
                <span class="p0-10 text-short">发布人</span>
              </div>
            </nav>
            <ul class="f13">
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
              <li class="cb">
                <div class="fl w60 text-short">
                  <span class="p0-10">苏州市苏绣小镇客厅单位设计项目小镇客厅单体及景观设计</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">2017-06-09</span>
                </div>
                <div class="fl w20 text-short">
                  <span class="p0-10">何露</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </el-col>
      <el-col :span="10" :xs="24" class="mt-25">
        <div class="grid-content home-list-company bg-color-white oh radius5">
          <nav class="color-m6 f14 cb bbs-1 p15">
            <div class="fl">
              <i class="iconfont icon-daiban mr-5"></i>法规制度
            </div>
            <div class="fr f13">
              更多>>
            </div>
          </nav>
          <section>
            <el-row class="f16 color-white">
              <el-col :span="12" :xs="24" class="mt-35">
                <div class="grid-content tc">
                  <span class="text-short home-company-honor">企业荣誉</span>
                </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-35">
                <div class="grid-content tc">
                <span class="text-short home-company-achievement">企业经营业绩</span>
              </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-35">
                <div class="grid-content tc">
                <span class="text-short home-company-culture">企业文化</span>
              </div>
              </el-col>
              <el-col :span="12" :xs="24" class="mt-35">
                <div class="grid-content tc">
                <span class="text-short home-company-forum">论坛</span>
              </div>
              </el-col>
            </el-row>
          </section>
        </div>
      </el-col>
    </el-row>
  </article>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet" lang="stylus" scoped>
.home-container
  .home-wait
    background-color #f39c73
    .home-icon
      background-color #e2916a
  .home-culture
    background-color #1dccab
    .home-icon
      background-color #1cbd9f
  .home-notice
    background-color #f98a8a
    .home-icon
      background-color #e47a7a
  .home-info
    background-color #5da8d4
    .home-icon
      background-color #5295bd
  .home-honor
    background-color #37c3d2
    .home-icon
      background-color #32aab7
  .home-list-wait,.home-list-price,.home-list-notice,.home-list-rule,.home-list-info,.home-list-company
    border-top 2px solid #f37676
    min-height 296px
    section
      nav
        padding 10px 15px
      ul
        padding-bottom 8px
        li
          padding 8px 15px
          transition all .5s
          &:hover
            background-color #f1f1f1
  .home-list-price
    border-top 2px solid #5da8d4
  .home-list-notice
    border-top 2px solid #37c3d2
  .home-list-rule
    border-top 2px solid #e2916a
    section
      span
        border 1px solid #ccc
        border-radius 5px
        padding 12px 15px
        display inline-block
        width 75%
  .home-list-info
    border-top 2px solid #8b71f1
  .home-list-company
    border-top 2px solid #1dccab
    section
      span
        background-color #ccc
        border-radius 5px
        padding 25px 15px
        display inline-block
        width 75%
    .home-company-honor
      background-color #5da8d4
    .home-company-achievement
      background-color #1dccab
    .home-company-culture
      background-color #37c3d2
    .home-company-forum
      background-color #f39c73

</style>
