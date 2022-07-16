import React from 'react';

import { Container, Avatar, FollowButton, Info } from './styles';

interface IProps {
  name: string;
  nickname: string;
}

export const FollowSugestion: React.FC<IProps> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}