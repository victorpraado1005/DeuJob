import styled from 'styled-components';

import remove from '../../assets/images/remove.png';

export const FiltroPretensaoSalarial = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* text-align: center; */

  img{
    margin-right: 10px;
   }

  h3{
    font-size: 18px;
    font-weight: normal;
  }

  input{
    margin: 0 15px;
    width: 125px;
    height: 28px;
    background: rgba(83, 83, 83, 0.7);
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 12px;
    color: yellow;
  }

  button{
    width: 100px;
    height: 25px;
    background: #F6E51C;
    border-radius: 5px;
    border: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;

  img{
    position: relative;
    left: 40px;
  }
  `;

export const CardVaga = styled.div`
  width: 448px;
  height: 608px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
`;

export const TitleCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* text-align: center; */
  margin-top: 20px;
  margin-bottom: 20px;

  h1{
    font-weight: normal;
    font-size: 18px;
   }

   img{
    width: 32px;
    height: 32px;
   }

   button{
    width: 35px;
    height: 35px;
    border-radius: 120px;
    border: none;
    background: rgba(61, 61, 61, 0.1);
    background-image: url(${remove});
    background-size: cover;
   }
`;

export const CardDescricaoVaga = styled.div`
  width: 406px;
  height: 120px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  margin: 20px auto;
`;

export const CardCandidatosVaga = styled.div`
  width: 751px;
  height: 608px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 12px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const CardCandidatoVaga = styled.div`
  width: 708px;
  height: 245px;
  background: rgba(61, 61, 61, 0.8);
  border-radius: 12px;
  padding: 12px;
  margin: 20px auto;

  .container-info-candidato{
    display: flex;
    justify-content: space-between;

    .info-user{
      width: 500px;
    }
  }

  .info-candidato{
    margin-bottom: 20px;
  }

  .font-yellow{
    color: yellow;
  }
`;
