<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container color-hui" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <!-- <levelbar></levelbar> -->
        <!-- <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class='inlineBlock' to="/">
                    <el-dropdown-item>
                        Home
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown> -->
        <div class="fl">
          <i class="iconfont icon-logo color-hui f50 fl mr-5"></i>
          <span class="f17 color-hui fl">中诚管理业务支撑平台</span>
        </div>
        <div class="fr mr-30 hidden-xs">
          <span class="mr-10 f13 color-hui">欢迎您：朱纪福</span>
          <span class="f13 color-hui mr-50">【部门】BIM信息研究部</span>
          <el-button class="f13 color-hui" type="text"><router-link class='inlineBlock' to="/waitList"><i class="iconfont icon-daiban mr-5"></i>代办</router-link></el-button>
          <el-button class="f13 color-hui" type="text"><i class="iconfont icon-mima mr-5"></i>密码</el-button>
          <el-button class="f13 color-hui" type="text" @click="logout"><i class="iconfont icon-tuichu mr-5"></i>退出</el-button>
        </div>

    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Levelbar from './Levelbar';
    import Hamburger from '@/components/Hamburger';

    export default {
      components: {
        Levelbar,
        Hamburger
      },
      computed: {
        ...mapGetters([
          'sidebar',
          'avatar'
        ])
      },
      methods: {
        toggleSideBar() {
          this.$store.dispatch('ToggleSideBar')
        },
        logout() {
          this.$store.dispatch('LogOut').then(() => {
            location.reload();  // 为了重新实例化vue-router对象 避免bug
          });
        }
      }
    }
</script>

<style lang="stylus" scoped>
.navbar
  height 65px
  line-height 65px
  border-radius 0px !important
  background-color #324157
  z-index 10
  position fixed
  width 100%

  .hamburger-container
      line-height 70px
      height 70px
      float left
      padding 0 10px

  .errLog-container
      display inline-block
      position absolute
      right 150px

  .screenfull
      position absolute
      right 90px
      top 16px
      color red

  .avatar-container
      height 50px
      display inline-block
      position absolute
      right 35px
      .avatar-wrapper
          cursor pointer
          margin-top 5px
          position relative
          .user-avatar
              width 40px
              height 40px
              border-radius 10px

          .el-icon-caret-bottom
              position absolute
              right -20px
              top 25px
              font-size 12px




</style>
