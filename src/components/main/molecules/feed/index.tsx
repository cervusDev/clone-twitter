import React from 'react'
import { Container, Tab, Tweets } from './styles'

export const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        {/* tweets */}
      </Tweets>
    </Container>
  );
}