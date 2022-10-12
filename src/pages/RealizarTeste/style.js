import styled from 'styled-components';

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
    background: #F6E51C;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    border: none;
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
