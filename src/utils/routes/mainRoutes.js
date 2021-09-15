import { lazy } from 'react';

const routes = [
  {
    name: 'error',
    path: '/',
    exactLink: false,
    exactRoute: false,
    isLink: false,
    isPublic: true,
    isPrivate: true,
    component: lazy(() => import('../../Components/error/Error.js')),
  },
  {
    name: 'home',
    path: '/',
    exactLink: true,
    exactRoute: true,
    isLink: true,
    isPublic: true,
    isPrivate: true,
    component: lazy(() => import('../../Components/home/Home.js')),
  },

  {
    name: 'contacts',
    path: '/contacts',
    exactLink: true,
    exactRoute: true,
    isLink: true,
    isPublic: false,
    isPrivate: true,
    component: lazy(() => import('../../Components/contacts/Contacts.js')),
  },
  {
    name: 'signin',
    path: '/login',
    exactLink: true,
    exactRoute: true,
    isLink: true,
    isPublic: true,
    isPrivate: false,
    component: lazy(() => import('../../Components/signin/SignIn.js')),
  },
  {
    name: 'signup',
    path: '/register',
    exactLink: true,
    exactRoute: true,
    isLink: true,
    isPublic: true,
    isPrivate: false,
    component: lazy(() => import('../../Components/signup/SignUp.js')),
  },
];

export default routes;
