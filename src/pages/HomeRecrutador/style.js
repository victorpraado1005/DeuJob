import styled from 'styled-components';

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  h1 {
    margin-bottom: 20px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`;

export const CardTodosTestes = styled.div`
  width: 358px;
  height: 563px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 12px;
  text-align: center;

  h4{
    margin-top: 20px;
    font-weight: normal;
    margin-bottom: 20px;
  }

  .title-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const CardTeste = styled.div`
  width: 320px;
  height: 52px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    width: 114px;
    height: 25px;
    background: #F6E51C;
    border-radius: 5px;
  }
`;

export const CardVagasEmAberto = styled.div`
  width: 454px;
  height: 563px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
  text-align: center;

  .title-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h4{
    margin-top: 20px;
    font-weight: normal;
    margin-bottom: 20px;
  }
`;

export const CardVagas = styled.div`
  width: 410px;
  height: 52px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    width: 114px;
    height: 25px;
    background: #F6E51C;
    border-radius: 5px;
  }
`;
