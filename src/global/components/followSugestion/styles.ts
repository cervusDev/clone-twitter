import styled from 'styled-components';
import { TwitterButton } from '../button/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`  
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background: var(--gray);
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(TwitterButton)`
  padding: 6px 17px;
`;
