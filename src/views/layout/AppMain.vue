<template>
    <section class="app-main">
      <levelbar></levelbar>
        <transition name="fade" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>
    </section>
</template>

<script>
import Levelbar from './Levelbar';
    export default {
      name: 'AppMain',
      components: {
        Levelbar
      },
      computed: {
        key() {
          return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        }
      }
    }
</script>
<style lang="stylus">
@import '../../styles/index.styl'; // 全局自定义的css样式
.app-main
  padding-top 65px
</style>
