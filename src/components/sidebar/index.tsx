import React from 'react';
import { List } from '../../global/components/list'
import { FollowSugestion } from '../../global/components/followSugestion'
import { News } from '../../global/components/news'
import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  SidebarBody,
} from './styles';

import StyckyBox from 'react-sticky-box'

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no twitter' />
        <SearchIcon />
      </SearchWrapper>

      <StyckyBox>
        <SidebarBody> 
          <List 
            title='Talvez você curta'
            elements={[
              <FollowSugestion
                name='Gustavo Henrique'
                nickname='@gucervus'
              />,
              <FollowSugestion
                name='Gustavo Henrique'
                nickname='@gucervus'
              />,
              <FollowSugestion
                name='Gustavo Henrique'
                nickname='@gucervus'
              />,
            ]}
          />

          <List 
            title='Informações'
            elements={[
              <News
                title='VueJS'
                content='VueJS é uma framework JavaScript de código aberto, desenvolvido pelo Vue.js Team e publicado no Npm.'
              />,

              <News
                title='ReactJS'
                content='ReactJS é uma biblioteca JavaScript de código aberto, desenvolvido pelo Facebook e publicado no Npm.'
              />,

              <News
                title='React Native'
                content='React Native é uma biblioteca JavaScript de código aberto, desenvolvido pelo Facebook e publicado no Npm.'
              />,
            ]}
          />

          <List 
            title='Informações'
            elements={[
              <News
                title='VueJS'
                content='VueJS é uma framework JavaScript de código aberto, desenvolvido pelo Vue.js Team e publicado no Npm.'
              />,

              <News
                title='ReactJS'
                content='ReactJS é uma biblioteca JavaScript de código aberto, desenvolvido pelo Facebook e publicado no Npm.'
              />,

              <News
                title='React Native'
                content='React Native é uma biblioteca JavaScript de código aberto, desenvolvido pelo Facebook e publicado no Npm.'
              />,
            ]}
          />

          <List 
            title='Informações'
            elements={[
              <News
                title='VueJS'
                content='VueJS é uma framework JavaScript de código aberto, desenvolvido pelo Vue.js Team e publicado no Npm.'
              />,

              <News
                title='ReactJS'
                content='ReactJS é uma biblioteca JavaScript de código aberto, desenvolvido pelo Facebook e publicado no Npm.'
              />,

              <News
                title='React Native'
                content='React Native é uma biblioteca JavaScript de código aberto, desenvolvido pelo Facebook e publicado no Npm.'
              />,
            ]}
          />
        </SidebarBody>
      </StyckyBox>

    </Container>
  );
}
