<template>
    <div>
        <template v-for="item in routes">
          <div class="sidebar-select">
            <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
                <el-menu-item :index="item.path+'/'+item.children[0].path">
                    <i :class="item.icon" v-if='item.icon'></i> {{item.children[0].name}}
                </el-menu-item>
            </router-link>
            <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
                <template slot="title">
                    <i :class="item.icon" v-if='item.icon'></i> {{item.name}}
                </template>
                <template v-for="child in item.children" v-if='!child.hidden'>
                    <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
                    <router-link v-else class="menu-indent" :to="item.path+'/'+child.path">
                        <el-menu-item :index="item.path+'/'+child.path">
                            {{child.name}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
          </div>
        </template>
    </div>
</template>

<script>
    export default {
      name: 'SidebarItem',
      props: {
        routes: {
          type: Array
        }
      }
    }
</script>

<style lang="stylus" scoped>
.sidebar-select
  i
    margin-right 8px
.hideSidebar .menu-indent
    display block
    text-indent 10px

</style>
