import React from 'react';

import { Container, ProfileData, EditButton } from './styles';
import { Banner } from '../../atoms/profilePage/banner'
import { ProfileInfo } from '../../atoms/profilePage/info'
import { Followage } from '../../atoms/profilePage/followage' 

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner />

      <ProfileData>
        
        <EditButton outlined >Editar Perfil</EditButton>
        <ProfileInfo />
        <Followage />

      </ProfileData>
    </Container>
  );
}
