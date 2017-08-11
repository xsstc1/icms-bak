<template>
  <div class="login-container">
    <header class="login-bg"></header>
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <div class="tc">
        <nav class="login-logo tc bg-color-main oh disinblock bc">
          <img class=" radius" src="../../assets/img/logo.png" alt="">
        </nav>
      </div>
      <div class="p30 bg-color-white radius5 shadow mb-80 f14">
      <div class="title tc mt-25 f18 color-main mb-25">中诚管理业务支撑平台</div>
      <el-form-item prop="email">
        <span class="color-8 f13">
                  用户名：
                </span>
        <el-input class="login-name-icon pr" name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="color-8 f13">
                  密码：
                </span>
        <el-input class="login-password-icon pr" name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
           placeholder="请输入登陆密码"></el-input>
      </el-form-item>
      <el-form-item class="mt-50">
        <el-button class="bg-color-main bn login-btn" type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登 录
        </el-button>
      </el-form-item>
      <div class="mt-20 tc mb-10 f13">
         <el-checkbox v-model="loginForm.rememberPass">记住密码</el-checkbox>
      </div>
      </div>
    </el-form>
    <footer class="login-footer tc f12 color-8 w bg-color-white hidden-xs">Copyright     2017  中诚工程建设管理（苏州）股份有限公司  版权所有</footer>
  </div>
</template>

<script>
    import { isWscnEmail } from '@/utils/validate';

    export default {
      name: 'login',
      data() {
        const validateEmail = (rule, value, callback) => {
          if (value=="") {
            callback(new Error('请输入用户名'));
          } else {
            callback();
          }
        };
        const validatePass = (rule, value, callback) => {
          if (value=="") {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
        return {
          loginForm: {
            email: '',
            password: '',
            rememberPass:false
          },
          loginRules: {
            email: [
                { required: true, trigger: 'blur', validator: validateEmail }
            ],
            password: [
                { required: true, trigger: 'blur', validator: validatePass }
            ]
          },
          loading: false
        }
      },
      methods: {
        handleLogin() {
          this.$refs.loginForm.validate(valid => {
            if (valid) {
              this.loading = true;
              this.$store.dispatch('Login', this.loginForm).then(() => {
                this.loading = false;
                this.$router.push({ path: '/' });
              }).catch(() => {
                this.loading = false;
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>

<style lang="stylus">
.login-container
  .login-bg
    background:url("../../assets/img/login_bg.jpg")
    height 300px
    background-size 100%
    background-attachment fixed
    background-repeat no-repeat
  .login-form
    width 350px
    margin -200px auto 0 auto
    .login-name-icon:before
      content "\e662"
      font-family "iconfont"
      position absolute
      font-size 18px
      left 10px
      color #ccc
    .login-password-icon:before
      content "\e632"
      font-family "iconfont"
      position absolute
      font-size 18px
      left 10px
      color #ccc
    input
      text-indent 25px
      border-radius 50px
      height 35px
  .login-logo
    border 10px solid #fff
    padding 13px
    border-radius 50%
    width 100px
    height 100px
    margin-bottom -50px
    img
      width 50px
      height 50px
  .login-btn
    padding 12px
  .login-footer
    bottom 0
    padding 20px
    position fixed
    z-index 999
  .el-form-item__error
    padding-top 7px
@media screen and (max-width: 768px)
  .login-container
    .login-form
      width 90%
      margin-top 0px
      padding-top 20px
      .shadow
        margin-bottom 40px
    .login-bg
      height 70px
</style>
