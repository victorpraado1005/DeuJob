import styled from 'styled-components';

export const CardVaga = styled.div`
  width: 1034px;
  height: 900px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
  text-align: center;
  margin: 20px auto;

  .title-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-area{
    margin-top: 20px;

    .pergunta{
      margin-top: 20px;
    }

    input{
      width: 983px;
      height: 64px;
      background: rgba(61, 61, 61, 0.8);
      border-radius: 12px;
      border: none;
      outline: none;
      padding: 12px;
      color: white;
      margin-bottom: 12px;
    }

    .alternativas-area{
      display: flex;
      justify-content: space-evenly;
      margin-top: 10px;
      input{
        width: 230px;
        height: 40px;
      }

      .alternativa{
        display: flex;
        flex-direction: column;
      }
    }
  }

  .button-area{
    button{
      width: 128px;
      height: 25px;
      background: #F6E51C;
      border-radius: 5px;
      border: none;
      margin-top: 20px;
    }
  }
`;
