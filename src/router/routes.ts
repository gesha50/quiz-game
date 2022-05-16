import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/create',
    component: () => import('layouts/CreateLayout.vue'),
    children: [
      { path: 'quiz', component: () => import('pages/CreateQuizPage.vue') },
      {
        path: 'quiz/:link',
        component: () => import('pages/CreateQuizUniquePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
