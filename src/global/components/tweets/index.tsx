import React from 'react';
import {
  Dot, 
  Body, 
  Icons, 
  Header, 
  Avatar, 
  Status, 
  Content,
  LikeIcon,  
  Retweeted, 
  Container,
  Description, 
  CommentIcon, 
  RetweetIcon, 
  ImageContent, 
  RocketseatIcon, 
} from './styles';

export const Tweets: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Macroplan</strong>
            <span>@Macroplan</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>Foguete não tem ré </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
