import React from 'react';
import routes from '../../utils/routes/mainRoutes.js';
import Navigator from '../navigator/Navigator';
import UserMenu from '../usermenu/UserMenu';
import { StyledContainer, StyledList } from './styles.js';

function Header({ isAuth }) {
  return (
    <StyledContainer>
      <Navigator routes={routes} StyledList={StyledList} isAuth={isAuth} />
      {isAuth && <UserMenu />}
    </StyledContainer>
  );
}

export default Header;
