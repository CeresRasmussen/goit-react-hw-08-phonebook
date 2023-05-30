import { Suspense } from 'react';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-slice';
import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import styled from 'styled-components';
import css from 'components/SharedLayout/SharedLoyaut.module.css';

const StyledLink = styled(NavLink)`
  color: white;
}

  &.active {
    color: gold;
  }
`;

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </nav>
        {isLoggedIn ? (
          <UserMenu></UserMenu>
        ) : (
          <div className={css['auth-container']}>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/logIn">Login</StyledLink>
          </div>
        )}
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
//
