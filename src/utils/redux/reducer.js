import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  load,
  addContact,
  delContact,
  changeFilter,
  changeContactForm,
  changeSignIn,
  changeSignUp,
  login,
  logout,
  register,
  loader,
} from './actions';

// signIn

const initSignIn = {
  email: '',
  password: '',
};

const signInReducer = createReducer(initSignIn, {
  [changeSignIn]: (state, { payload }) => ({ ...state, ...payload }),
  [login]: () => ({ ...initSignIn }),
  [logout]: () => ({ ...initSignIn }),
});

// signUp

const initSignUp = {
  email: '',
  password: '',
};

const signUpReducer = createReducer(initSignUp, {
  [changeSignUp]: (state, { payload }) => ({ ...state, ...payload }),
  [register]: () => ({ ...initSignUp }),
  [logout]: () => ({ ...initSignUp }),
});

// contactForm

const initContactForm = {
  id: '',
  name: '',
  number: '',
};

const contactFormReducer = createReducer(initContactForm, {
  [changeContactForm]: (state, { payload }) => ({ ...state, ...payload }),
  [addContact]: () => ({ ...initContactForm }),
  [logout]: () => ({ ...initContactForm }),
});

// filter

const initFilter = '';

const filterReducer = createReducer(initFilter, {
  [changeFilter]: (_, { payload }) => payload,
  [logout]: () => initFilter,
});

// user

const initUser = {
  token: '',
  username: '',
};

const userReducer = createReducer(initUser, {
  [login]: (state, { payload }) => ({ ...payload }),
  [logout]: () => ({ ...initUser }),
});

// contacts

const initContacts = [];

const contactsReducer = createReducer(initContacts, {
  [load]: (_, { payload }) => payload,
  [addContact]: (state, { payload }) => [...state, payload],
  [delContact]: (state, { payload }) => state.filter((i) => i.id !== payload),
  [logout]: () => initContacts,
});

// loader

const initLoader = false;

const loaderReducer = createReducer(initLoader, {
  [loader]: (_, { payload }) => payload,
});

//rootReducer

const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  contactForm: contactFormReducer,
  filter: filterReducer,
  user: userReducer,
  contacts: contactsReducer,
  loader: loaderReducer,
});

export default rootReducer;
