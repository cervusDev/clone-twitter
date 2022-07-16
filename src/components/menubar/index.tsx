import React from 'react';
import { TwitterButton } from '../../global/components/button/styles'
import { 
  Logo,
  Avatar,
  TopSide,
  BotSide, 
  HomeIcon,
  BellIcon,
  ExitIcon,
  EmailIcon,
  Container,
  MenuButton,
  ProfileIcon,
  ProfileData,
  FavoriteIcon,
} from './styles';

export const Menubar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon/>
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon/>
          <span>Notificações</span>
        </MenuButton>
        
        <MenuButton>
          <EmailIcon/>
          <span>Mensagens</span>
        </MenuButton>
        
        <MenuButton>
          <FavoriteIcon/>
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className='active'>
          <ProfileIcon/>
          <span>Perfil</span>
        </MenuButton>

        <TwitterButton>
          <span> Tweetar </span>
        </TwitterButton>
      </TopSide>

      <BotSide>
        <Avatar/>

        <ProfileData>
          <strong>Gustavo Henrique</strong>
          <span>@gucervus</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
}
