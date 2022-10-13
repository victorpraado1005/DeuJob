import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  text-align: center;
`;

export const CardEditarInformacoes = styled.div`
  width: 1227px;
  height: 380px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
  margin: 20px auto;

  .title-edit-user{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    button{
      width: 162px;
      height: 25px;
      background: #F6E51C;
      border-radius: 5px;
      margin-right: 5px;
    }
  }

  input{
    width: 581px;
    height: 52px;
    background: rgba(61, 61, 61, 0.8);
    border-radius: 12px;
    border: none;
    outline: none;
    padding: 12px;
    color: white;
    margin-bottom: 20px;
    margin-left: 10px;
  }

  .input-area{
    margin-top: 40px;
    margin-bottom: 20px;
  }

  button{
    width: 134px;
    height: 25px;
    background: #F6E51C;
    border-radius: 5px;
    border: none;
  }
`;
