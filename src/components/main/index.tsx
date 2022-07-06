import React from 'react';
import { Container } from './styles';
import { Header } from './molecules/header';
import { BottomMenu } from './molecules/bottomMenu';
import { ProfilePage } from './molecules/profilePage'

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <ProfilePage />
      <BottomMenu />
    </Container>
  );
};
