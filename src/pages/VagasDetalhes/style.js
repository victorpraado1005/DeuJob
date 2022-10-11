import styled from 'styled-components';

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
  text-align: center;
  margin-top: 20px;

  h1{
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 20px;
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
