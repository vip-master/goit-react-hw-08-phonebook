import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getNameRoute } from '../../utils/routes/logic';
import routes from '../../utils/routes/mainRoutes';
import { getUser } from '../../utils/redux/selectors';
import { signOutContacts } from '../../utils/redux/operations';

const UserMenu = () => {
  const username = useSelector(getUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(signOutContacts());
    history.replace(getNameRoute(routes, 'home'));
  };
  return (
    <>
      <p>{username}</p>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;
