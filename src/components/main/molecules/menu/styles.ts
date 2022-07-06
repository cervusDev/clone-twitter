import styled, { css } from 'styled-components';
import { 
  Home, 
  Email, 
  Search, 
  Notifications, 
} from '../../../../global/styles/icons';

export const Container = styled.div`
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  position: fixed;
  background: var(--primary);
  justify-content: space-between;
  border-top: 1px solid var(--outline);
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCss = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover, &.active {
    fill: var(--twitter);
  }
`

export const HomeIcon = styled(Home)`
  ${iconCss}
`
export const EmailIcon = styled(Email)`
  ${iconCss}
`
export const SearchIcon = styled(Search)`
  ${iconCss}
  `
export const BellIcon = styled(Notifications)`
  ${iconCss}
`
