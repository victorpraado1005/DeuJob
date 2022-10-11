import styled from 'styled-components';

import remove from '../../assets/images/remove_red.png';

export const CardTeste = styled.div`
  width: 1034px;
  height: 720px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
  text-align: center;
  margin: 20px auto;

  .title-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  button{
    margin-top: 20px;
    background: rgba(61, 61, 61, 0.1);
    background-image: url(${remove});
    background-size: cover;
    width: 40px;
    height: 40px;
    color: white;
  }
`;

export const CardPergunta = styled.div`
  width: 983px;
  height: 110px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 20px;
  text-align: start;

  h2{
    margin-bottom: 10px;
  }

  h5{
    margin-bottom: 10px;
  }

  .alternativas-area{
    display: flex;
    justify-content: space-around;
  }
`;
