import React from 'react'

import { LocationIcon, CakeIcon, Container } from './styles'

export const ProfileInfo: React.FC = () => {
  return (
  <Container>
    <h1>Gustavo Henrique</h1>
    <h2>@gustavoHenrique</h2>

    <p>
      Developer at <a href='https://rocketseat.com.br' >@Macroplan</a>
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
  </Container>
  );
}