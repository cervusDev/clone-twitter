import { Container } from './styles'
import { HeaderButton } from '../../atoms/button'
import { ProfileInfo } from '../../atoms/profileInfo'

export const Header: React.FC = () => {
 return (
  <Container>
    <HeaderButton />
    <ProfileInfo />
  </Container>
 ) 
}