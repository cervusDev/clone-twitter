import styled from 'styled-components';
import { TwitterButton } from '../../../../global/components/button/styles'

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  max-height: 100%;

  // desabilitando scroll bar no container
  overflow-y: none;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;
`; 

export const EditButton = styled(TwitterButton)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }

  
`
