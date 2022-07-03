import React, { ReactNode } from 'react';

import { Container, Wrapper } from './styles';

interface IProps {
  children: ReactNode
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