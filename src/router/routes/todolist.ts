import type { RouteRecordRaw } from 'vue-router'

export const todolistRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'todolist',
    component: () => import('@/layout/AppLayout.vue'),
    children: [
      //全部任务
      {
        path: '/all',
        name: 'all',
        component: () => import('@/components/TaskView.vue'),
      },
      //今天任务
      {
        path: '/today',
        name: 'today',
        component: () => import('@/views/Today/Today.vue'),
      },
      //重要
      {
        path: '/important',
        name: 'important',
        component: () => import('@/components/TaskView.vue'),
      },
      //进行中
      {
        path: '/ongoing',
        name: 'ongoing',
        component: () => import('@/components/TaskView.vue'),
      },
      //已完成
      {
        path: '/completed',
        name: 'completed',
        component: () => import('@/components/TaskView.vue'),
      },
      //已归档
      {
        path: '/archived',
        name: 'archived',
        component: () => import('@/components/TaskView.vue'),
      },
    ],
  },
]
