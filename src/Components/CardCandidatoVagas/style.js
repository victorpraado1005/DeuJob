import styled from 'styled-components';

export const ContainerVagas = styled.div`
  width: 358px;
  height: 563px;
  background: rgba(0, 0, 0, 1);
  border-radius: 25px;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */

  .title-card {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
  }

  .subtitle-card{
    margin-bottom: 40px;
    font-size: 14px;
    text-align: center;
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
