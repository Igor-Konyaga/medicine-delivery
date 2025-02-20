import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import React from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default SharedLayout;
