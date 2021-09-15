import { createSelector } from '@reduxjs/toolkit';

export const getFilter = ({ filter }) => filter;

export const isLoading = ({ loader }) => loader;

export const getContactForm = ({ contactForm }) => contactForm;

export const getSignIn = ({ signIn }) => signIn;

export const getSignUp = ({ signUp }) => signUp;

export const getUser = ({ user }) => user.email;

export const isAuth = ({ user }) => (user.token ? true : false);

const getContacts = ({ contacts }) => contacts;

export const getFContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((i) =>
      i.name.toLowerCase().startsWith(filter.split(' ').join('').toLowerCase()),
    ),
);

export const isExist = createSelector(
  [getContacts, getContactForm],
  (contacts, { name, number }) =>
    contacts.some(
      (i) => i.number === number || i.name.toLowerCase() === name.toLowerCase(),
    ),
);
