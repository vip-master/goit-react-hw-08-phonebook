import React from 'react';
import Switcher from '../switcher/Switcher';
import routes from '../../utils/routes/mainRoutes.js';

const Main = ({ isAuth }) => {
  return (
    <>
      <Switcher routes={routes} isAuth={isAuth} />
    </>
  );
};

export default Main;
