import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import React from 'react';
import { Header } from '../../../widgets/Header/Header';

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
