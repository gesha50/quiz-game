import { RouteRecordRaw } from 'vue-router';
import isGuest from 'src/router/middleware/isGuest';
import isAuth from 'src/router/middleware/IsAuth';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/LoginPage.vue'),
        meta: {
          middleware: [isGuest],
        },
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('pages/RegisterPage.vue'),
        meta: {
          middleware: [isGuest],
        },
      },
      {
        path: 'cabinet',
        name: 'Cabinet',
        component: () => import('pages/CabinetPage.vue'),
        meta: {
          middleware: [isAuth],
        },
      },
      {
        path: 'quizzes',
        name: 'Quizzes',
        component: () => import('pages/QuizzesPage.vue'),
      },
      {
        path: 'quizzes/:link',
        name: 'Quiz',
        component: () => import('pages/QuizPage.vue'),
      },
      {
        path: 'quizzes/:link/start',
        name: 'QuizStart',
        component: () => import('pages/QuizStartPage.vue'),
      },
      {
        path: 'quizzes/:link/play',
        name: 'QuizPlay',
        component: () => import('pages/QuizPlayPage.vue'),
      },
      {
        path: 'quizzes/:link/result',
        name: 'QuizResult',
        component: () => import('pages/QuizResultPage.vue'),
      },
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },

  {
    path: '/create',
    component: () => import('layouts/CreateLayout.vue'),
    meta: {
      middleware: [isAuth],
    },
    children: [
      {
        path: '',
        name: 'CreateQuiz',
        component: () => import('pages/CreateQuizPage.vue'),
      },
      {
        path: 'quiz/:link',
        name: 'CreateQuizUnique',
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
