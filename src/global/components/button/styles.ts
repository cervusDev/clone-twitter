import styled from 'styled-components';

interface IProps {
  outlined?: boolean;
}

export const TwitterButton = styled.button<IProps>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) => (props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)')};
  }
`;
