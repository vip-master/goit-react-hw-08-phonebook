import React from 'react';
import { Switch } from 'react-router-dom';
import { orderPathRoutes, getNameRoute } from '../../utils/routes/logic.js';
import Route from './ConditionRoute';

function Switcher({ routes, path = '', isAuth = false }) {
  return (
    <>
      <Switch>
        {orderPathRoutes(routes).map((route) =>
          isAuth ? (
            <Route
              key={route.name}
              exact={route.exactRoute}
              component={route.component}
              path={path + route.path}
              condition={route.isPrivate}
              to={getNameRoute(routes, 'contacts')}
            />
          ) : (
            <Route
              key={route.name}
              exact={route.exactRoute}
              component={route.component}
              path={path + route.path}
              condition={route.isPublic}
              to={getNameRoute(routes, 'home')}
            />
          ),
        )}
      </Switch>
    </>
  );
}

export default Switcher;
