import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function CRoute({ component: Component, exact, path, condition, to, route }) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        condition ? <Component {...props} /> : <Redirect to={to} />
      }
    />
  );
}

export default CRoute;
