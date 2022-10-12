import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  `;

export const CardVaga = styled.div`
  width: 1034px;
  height: 630px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
`;

export const TitleCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* text-align: center; */
  margin-top: 20px;
  margin-bottom: 30px;

  h1{
    font-weight: normal;
    font-size: 18px;
   }

   img{
    width: 32px;
    height: 32px;
   }

   button{
    width: 135px;
    height: 25px;
    border: none;
    border-radius: 5px;
    background: #F6E51C;
    background-size: cover;
    font-size: 12px;
   }
`;

export const CardDescricaoVaga = styled.div`
  width: 983px;
  height: 120px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  margin: 20px auto;
`;
