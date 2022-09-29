import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    position: relative;
    top: 100px;
  }

`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.colors.primary.dark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  padding: 40px 0;

  h1{
    color: ${({ theme }) => theme.colors.background};
    font-size: 26px;
    margin-bottom: 16px;
  }

  span{
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;
    font-size: 14px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  margin-top: 24px;

  button{
    width: 100px;
   }

   button ~ button {
    margin-left: 8px;
   }

   .button-login{
    background: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.background};
   }
`;
