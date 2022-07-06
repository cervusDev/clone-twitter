import styled from 'styled-components';

export const Container = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;
`; 


export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;

  > img {
    width: max(40px, min(130px, 21vw));
    height: max(40px, min(130px, 21vw));

    border-radius: 50%;

    position: absolute;
    top: -2.1px;
    right: -2.2px;
  }
`; 