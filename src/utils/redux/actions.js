import { createAction } from '@reduxjs/toolkit';

export const load = createAction('@/contact/load');
export const addContact = createAction('@/contact/add');
export const delContact = createAction('@/contact/del');

export const changeFilter = createAction('@/filter/change');
export const changeContactForm = createAction('@/form/change');
export const changeSignIn = createAction('@/signin/change');
export const changeSignUp = createAction('@/signup/change');

export const login = createAction('@/login');
export const logout = createAction('@/logout');
export const register = createAction('@/register');

export const loader = createAction('@/loading');
