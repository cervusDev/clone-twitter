import { Container } from './styles'
import { HeaderButton } from '../../atoms/header/button'
import { ProfileInfo } from '../../atoms/header/profileInfo'

export const Header: React.FC = () => {
 return (
  <Container>
    <HeaderButton />
    <ProfileInfo />
  </Container>
 ) 
}