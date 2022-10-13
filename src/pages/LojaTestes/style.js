import styled from 'styled-components';

export const HeaderLoja = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .points-user{
    margin-bottom: 20px;
  }
`;

export const CardLoja = styled.div`
  width: 1227px;
  height: 536px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
  margin: 20px auto
`;

export const CardTesteLoja = styled.div`
  width: 1188px;
  height: 52px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .area-text{
    width: 150px;
    font-size: 14px;
    display: flex;
    align-items: center;
    /* border: 1px solid; */
  }

  button{
    width: 114px;
    height: 25px;
    background: #F6E51C;
    border-radius: 5px;
    border: none;
  }
`;
