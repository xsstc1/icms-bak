<template>
    <el-menu mode="vertical" theme="dark" :default-active="$route.path" :unique-opened="true">
        <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    import SidebarItem from './SidebarItem';
    export default {
      components: { SidebarItem },
      computed: {
        ...mapGetters([
          'permission_routers'
        ])
      }
    }
</script>

<style lang="stylus" scoped>
.el-menu
  min-height 100%
  top 65px


</style>
