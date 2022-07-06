import React from 'react';
import { Container } from './styles';
import { Header } from './molecules/header';
import { BottomMenu } from './molecules/menu';
import { ProfilePage } from './organisms/profilePage'

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <ProfilePage />
      <BottomMenu />
    </Container>
  );
};
