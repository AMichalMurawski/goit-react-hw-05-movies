import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <Nav>
          <Link
            active={location.pathname === '/' ? 'true' : 'false'}
            to="/"
            end
          >
            Home
          </Link>
          <Link
            active={location.pathname.startsWith('/movies') ? 'true' : 'false'}
            to="/movies"
          >
            Movies
          </Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
