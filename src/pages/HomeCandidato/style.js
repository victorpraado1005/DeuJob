import styled from 'styled-components';

export const PontosContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    margin-right: 5px;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding: 12px;

  .card-testes{
    width: 358px;
    height: 563px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 25px;
    padding: 12px;
    text-align: center;

    .subtitle-card-teste{
      font-size: 14px;
      display: flex;
      align-items: start;
      width: 220px;
      margin: 20px auto;
    }
  }

  .cardVagas{
    width: 454px;
  }
`;

export const CardTeste = styled.div`
  width: 320px;
  height: 52px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    width: 72px;
    height: 25px;
    background: #F6E51C;
    border-radius: 5px;
    border: none;
   }

   .pontos-curso{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
   }
`;

export const CardVagas = styled.div`
  /* left: 580px; */
  position: absolute;
  width: 454px;
  height: 563px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 25px;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .title-card {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .subtitle-card {
      margin-bottom: 10px;
  }

  .container-info-vaga{
    width: 100%;
    background: rgba(61, 61, 61, 0.8);
    border-radius: 12px;
    text-align: center;
    padding: 12px;
    margin-bottom: 20px;
  }

  .button-area{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    button {
      width: 74px;
      height: 72px;
      background: #F6E51C;
      border-radius: 200px;
      border: none;
    }
  }
`;

export const ContainerVagas = styled.div`
  width: 358px;
  height: 563px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */

  .title-card {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
  }

  .subtitle-card-candidatura{
    font-size: 14px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 220px;
    margin: 20px auto;
  }
`;

export const CardVaga = styled.div`
    width: 100%;
    background: rgba(61, 61, 61, 0.8);
    border-radius: 12px;
    text-align: center;
    font-size: 18px;
    padding: 12px;
    margin-bottom: 20px;

    .container-vaga{
      display: flex;
      justify-content: space-between;
    }

    button{
      width: 114px;
      height: 25px;
      background: #F6E51C;
      border-radius: 5px;
      border: none;
     }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button{
    width: 134px;
    height: 25px;
    background: #F6E51C;
    border-radius: 5px;
    border: none;
  }
`;
