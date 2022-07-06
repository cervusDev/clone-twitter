import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);
    
    & + span {
      margin-left: 20px;
    }
  }
  
`;
