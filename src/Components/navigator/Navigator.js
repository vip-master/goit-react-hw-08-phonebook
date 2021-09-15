import React from 'react';
import { uppercase, authChecker } from '../../utils/routes/logic.js';
import { NavLink } from 'react-router-dom';

const Navigator = ({
  routes,
  path = '',
  isAuth = false,
  StyledList = ({ children }) => <ul>{children}</ul>,
}) => {
  return (
    <StyledList>
      {routes.map(
        (route) =>
          route.isLink &&
          authChecker(isAuth, route) && (
            <li key={route.path}>
              <NavLink
                to={path + route.path}
                exact={route.exactLink}
                activeClassName={'active'}
              >
                {uppercase(route.name)}
              </NavLink>
            </li>
          ),
      )}
    </StyledList>
  );
};

export default Navigator;
