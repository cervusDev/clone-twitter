import React from 'react';
import { 
  BellIcon, 
  HomeIcon, 
  EmailIcon, 
  Container, 
  SearchIcon
} from './styles';

export const BottomMenu: React.FC = () => {
  return (
    <Container>
      <HomeIcon />
      <SearchIcon />
      <BellIcon />
      <EmailIcon />
    </Container>
  );
};
