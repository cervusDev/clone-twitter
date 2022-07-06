import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>

        <EditButton outlined >Editar Perfil</EditButton>

        <h1>Gustavo Henrique</h1>
        <h2>@gustavoHenrique</h2>

        <p>
          Developer at <a href='https://rocketseat.com.br' >@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Botucatu-SP, Brasil
          </li>

          <li>
            <CakeIcon />
            nascido(a) em 18/05/1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>

          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}
