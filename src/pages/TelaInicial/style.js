import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;

  span{
    margin-bottom: 60px;
    font-size: 18px;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 454px;
  height: 365px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  color: white;

  button{
    width: 161px;
    height: 52px;
    background: #F6E51C;
    border-radius: 12px;
    border: none;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  margin-top: 12px;

   button ~ button {
    margin-left: 8px;
   }
`;
