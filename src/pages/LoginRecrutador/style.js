import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

  img{
    position: relative;
    top: 100px;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 454px;
  height: 365px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  color: white;

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
  margin-top: 12px;

   button ~ button {
    margin-left: 8px;
   }
`;
