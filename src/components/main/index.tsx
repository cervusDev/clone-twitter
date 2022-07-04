import React from 'react';
import { Container } from './styles';
import { Header } from './molecules/header';
import { BottomMenu } from './molecules/bottomMenu';

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <BottomMenu />
    </Container>
  );
};
