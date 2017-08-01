import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/index');

/* dashboard */
const home = _import('home/index');

/* error page */
const Err404 = _import('404');

/* pages */
const Form = _import('page/form');
const Table = _import('table/index');
/* wait page */
const waitList = _import('wait/index');
const waitDetails = _import('wait/waitDetails');

/*setting page*/
const systemSetting = _import('systemSetting/index');

/* message page */
const messageSend = _import('messageSetting/messageSend');
const messageQuery = _import('messageSetting/messageQuery');

/*role page*/
const departmentAdmin = _import('rolesSetting/department');
const roleAdmin = _import('rolesSetting/roles');
const userAdmin = _import('rolesSetting/users');

/* info page */
const noticeEdit = _import('infoSetting/notice');
const forumEdit = _import('infoSetting/forum');
const statuteEdit = _import('infoSetting/statute');
const insideEdit = _import('infoSetting/inside');
const priceEdit = _import('infoSetting/price');
const honorEdit = _import('infoSetting/honor');
const achievementEdit = _import('infoSetting/achievement');
const cultureEdit = _import('infoSetting/culture');

/* wholeProcess page */
const projectSetting = _import('wholeProcess/projectSetting');
const projectFile = _import('wholeProcess/projectFile');
const wholOverdue = _import('wholeProcess/overdue');
const wholeIndividual = _import('wholeProcess/individual');


Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
export const constantRouterMap = [{
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    component: Err404,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [{
      path: 'home',
      component: home
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

export const asyncRouterMap = [{
    path: '',
    component: Layout,
    redirect: '/table/index',
    name: '平台首页',
    icon: 'iconfont icon-shouye',
    noDropdown: true,
    children: [{
      path: 'home',
      name: '平台首页'
    }]
  },

  // const noticeEdit = _import('infoSetting/notice');
  // const forumEdit = _import('infoSetting/forum');
  // const statuteEdit = _import('infoSetting/statute');
  // const insideEdit = _import('infoSetting/inside');
  // const priceEdit = _import('infoSetting/price');
  // const honorEdit = _import('infoSetting/honor');
  // const achievementEdit = _import('infoSetting/achievement');
  // const cultureEdit = _import('infoSetting/culture');

  {
    path: '/infoSetting',
    component: Layout,
    redirect: 'noredirect',
    name: '资讯管理',
    icon: 'iconfont icon-zixun1',
    children: [{
      path: 'noticeEdit',
      component: noticeEdit,
      name: '公告栏',
      icon: 'zonghe'
    },{
      path: 'forumEdit',
      component: forumEdit,
      name: '论坛',
      icon: 'zonghe'
    },{
      path: 'statuteEdit',
      component: statuteEdit,
      name: '法规制度',
      icon: 'zonghe'
    },{
      path: 'insideEdit',
      component: insideEdit,
      name: '内部材料',
      icon: 'zonghe'
    },{
      path: 'priceEdit',
      component: priceEdit,
      name: '材料价格',
      icon: 'zonghe'
    },{
      path: 'honorEdit',
      component: honorEdit,
      name: '材料价格',
      icon: 'zonghe'
    },{
      path: 'achievementEdit',
      component: achievementEdit,
      name: '企业经营与业绩',
      icon: 'zonghe'
    },{
      path: 'cultureEdit',
      component: cultureEdit,
      name: '企业文化',
      icon: 'zonghe'
    }]
  },
  {
    path: '/messageSetting',
    component: Layout,
    redirect: 'noredirect',
    name: '短信管理',
    icon: 'iconfont icon-shortmessage',
    children: [{
      path: 'messageSend',
      component: messageSend,
      name: '短信发送',
      icon: 'zonghe'
    },{
      path: 'messageQuery',
      component: messageQuery,
      name: '短信查询',
      icon: 'zonghe'
    }]
  },
  {
    path: '/roleSetting',
    component: Layout,
    redirect: 'noredirect',
    name: '权限管理',
    icon: 'iconfont icon-shezhitianchong',
    children: [{
      path: 'departmentAdmin',
      component: departmentAdmin,
      name: '部门管理',
      icon: 'zonghe'
    },{
      path: 'roleAdmin',
      component: roleAdmin,
      name: '角色管理',
      icon: 'zonghe'
    },{
      path: 'userAdmin',
      component: userAdmin,
      name: '用户管理',
    }]
  },
  {
    path: '/roleSetting',
    component: Layout,
    redirect: 'noredirect',
    name: '全过程管理',
    icon: 'iconfont icon-bk-flow',
    children: [{
      path: 'projectSetting',
      component: projectSetting,
      name: '项目管理',
      icon: 'zonghe'
    },{
      path: 'individual',
      component: wholeIndividual,
      name: '单位工程',
      icon: 'zonghe'
    },{
      path: 'overdue',
      component: wholOverdue,
      name: '专业工作逾期',
    },{
      path: 'projectFile',
      component: projectFile,
      name: '全过程文件',
    }]
  },
  {
    path: '/systemSetting',
    component: Layout,
    redirect: 'noredirect',
    name: '系统管理',
    icon: 'iconfont icon-shezhitianchong',
    noDropdown: true,
    hidden:true,
    children: [{
      path: 'index',
      component: systemSetting,
      name:"系统管理"
    }]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    name: 'Table',
    icon: 'tubiaoleixingzhengchang',
    hidden: true,
    noDropdown: true,
    children: [{
      path: 'index',
      component: Table,
      name: 'Table',
      meta: {
        role: ['admin']
      }
    }]
  },
  {
    path: '/waitList', //代办页
    component: Layout,
    redirect: '/wait/index',
    hidden: true,
    children: [{
      path: '',
      component: waitList
    }]
  },
  {
    path: '/waitDetails', //代办详情
    component: Layout,
    redirect: '/wait/waitDetails',
    hidden: true,
    children: [{
      path: '',
      component: waitDetails
    }]
  },
  {
    path: '/systemSetting', //系统管理
    component: Layout,
    redirect: '/systemSetting/index',
    hidden: true,
    children: [{
      path: '',
      component: systemSetting
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
