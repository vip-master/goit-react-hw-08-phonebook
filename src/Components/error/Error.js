import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../../utils/routes/mainRoutes';
import { getNameRoute } from '../../utils/routes/logic';
import { error } from '../../utils/redux/operations';

const Error = () => {
  const dispatch = useDispatch();
  dispatch(error({ isError: true, text: 'Page Not Found' }));
  return <Redirect to={getNameRoute(routes, 'home')} />;
};

export default Error;
