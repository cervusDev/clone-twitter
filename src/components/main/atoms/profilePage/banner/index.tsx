import React from 'react';

import { Container, Avatar } from './styles';
import ProfilePicture from '../../../../../assets/profile.jpg'

export const Banner: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img src={ProfilePicture} />
      </Avatar>
    </Container>
  );
}
