import React from 'react';

import { Container, Wrapper } from './styles';

interface IProps {
  children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
}