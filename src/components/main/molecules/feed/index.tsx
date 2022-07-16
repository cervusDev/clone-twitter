import React from 'react'
import { Container, Tab } from './styles'
import { Tweets } from '../../../../global/components/tweets'
export const Feed: React.FC = () => {
  
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets />
      <Tweets />
      <Tweets />
      
    </Container>
  );
}