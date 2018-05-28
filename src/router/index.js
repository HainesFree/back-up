import Vue from 'vue';
import Router from 'vue-router';
import Welfare from '@/components/welfare';
import Care from '@/components/care';
import CreateGroup from '@/components/create_group';
import GroupList from '@/components/group_list';
import GroupCover from '@/components/group_cover';
import GroupHome from '@/components/group_home';
import ManageList from '@/components/manage_list';
import MemberManage from '@/components/member_manage';
import FansManage from '@/components/fans_manage';
import SelfAuth from '@/components/self_auth';
import Console from '@/components/console';
import ConsoleList from '@/components/console_list';
import Share from '@/components/share/share';
import MovHot from '@/components/share/component/mov_hot';
import MovNew from '@/components/share/component/mov_new';
import Demo from "@/components/demo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ConsoleList',
      component: ConsoleList
    },
    {
      path: '/self',
      name: 'SelfAuth',
      component: SelfAuth
    },
    {
      path: '/share',
      name: 'Share',
      component: Share,
      children:[
        {
          path: '/',
          name: '/hot',
          component: MovHot
        },
        {
          path: '/hot',
          name: 'MovHot',
          component: MovHot
        },
        {
          path: '/new',
          name: 'MovNew',
          component: MovNew
        }
      ]
    },
    {
      path: '/console',
      name: 'Console',
      component: Console
    },
    {
      path: '/membermanage',
      name: 'MemberManage',
      component: MemberManage
    },
    {
      path: '/fans',
      name: 'FansManage',
      component: FansManage
    },
    {
      path: '/managelist',
      name: 'ManageList',
      component: ManageList
    },
    {
      path: '/home',
      name: 'GroupHome',
      component: GroupHome
    },
    {
      path: '/care',
      name: 'Care',
      component: Care
    },
    {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare
    },
    {
      path: '/list',
      name: 'GroupList',
      component: GroupList
    },
    {
      path: '/cover',
      name: 'GroupCover',
      component: GroupCover
    },
    {
      path: '/create',
      name: 'CreateGroup',
      component: CreateGroup
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ],
  mode:'history'
})
