import { get, add, del, signIn, signUp, signOut } from '../api/API';
import {
  load,
  addContact,
  delContact,
  login,
  logout,
  register,
  loader,
} from './actions';

export const error = (err) => (dispatch) => {
  if (!err.isError) return;

  if (err.status) {
    err.status === 400 && err.data.message ? alert(`${err.status} Error: ${err.data.message}`) : alert(`${err.status} Error: ${err.statusText}`);
  } else if (err.text) {
    alert(`Error: ${err.text}`);
  } else {
    alert('Unknow error');
  }
};

const request = async (dispatch, callback) => {
  const result = await callback();

  if (result.isError) {
    dispatch(error(result));
    return null;
  }
  return result;
};

const createOperation =
  (api, success, after) =>
  (data = {}) =>
  async (dispatch, getState) => {
    dispatch(loader(true));

      const result = await request(
        dispatch,
        async () => await api(data, getState().user.token),
      );

      if (result !== null)
        after ? after(result, dispatch, data) : dispatch(success(data));

    dispatch(loader(false));
  };

export const loadContacts = createOperation(get, load, (res, dispatch) =>
  dispatch(load(res)),
);

export const addContacts = createOperation(add, addContact, (r,dispatch,data)=>dispatch(addContact({...data,id:r})));

export const delContacts = createOperation(del, delContact);

export const signInContacts = createOperation(
  signIn,
  login,
  (r, dispatch, { username }) => {
    dispatch(login({ username, token: r }));
    dispatch(loadContacts());
  },
);

export const signUpContacts = createOperation(
  signUp,
  register,
  (r, dispatch) => {
    alert('You has registered.');
    dispatch(register());
  },
);

export const signOutContacts = createOperation(signOut, logout);
