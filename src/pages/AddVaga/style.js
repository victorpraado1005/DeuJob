import styled from 'styled-components';

export const Container = styled.div`
  width: 1034px;
  height: 642px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
  margin: 20px auto;
  text-align: center;

  h3{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .title-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-area{
    input {
      width: 983px;
      height: 64px;
      background: rgba(61, 61, 61, 0.8);
      border-radius: 12px;
      border: none;
      outline: none;
      color: white;
      padding: 12px;
      margin-bottom: 20px;
    }

    .input-beneficios{
      height: 113px;
    }

    .input-requisitos{
      height: 111px;
    }

    .input-descricao{
      height: 165px;
    }
  }

  .button-area{
    button{
      width: 128px;
      height: 25px;
      background: #F6E51C;
      border-radius: 5px;
      border: none;
    }
  }
`;
