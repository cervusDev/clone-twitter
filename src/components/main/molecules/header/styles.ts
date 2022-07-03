import styled from 'styled-components';

export const Container = styled.header`
z-index: 2;
position: sticky;
top: 0;

background: var(--primary);

display: flex;
align-items: center;

text-align: left;

padding: 8px 0 9px 13px;
border-bottom: 1px solid var(--outline);

> button {
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }
}
`;