import styled, { css } from 'styled-components';

export default styled.input`
  width: 410px;
  height: 52px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  border: none;
  outline: none;
  padding: 12px;
  color: #F6E51C;

  /* ${({ error }) => error && css`
    color: ${({ theme }) => theme.colors.danger.dark};
    border: 2px solid ${({ theme }) => theme.colors.danger.dark};
    font-weight: bold;
  `} */
`;
