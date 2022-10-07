import styled from 'styled-components';

export const CardVagas = styled.div`
  width: 454px;
  height: 563px;
  background: rgba(0, 0, 0, 1);
  border-radius: 25px;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* position: absolute; */

  .title-card {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .container-info-vaga{
    width: 100%;
    background: rgba(61, 61, 61, 0.8);
    border-radius: 12px;
    text-align: center;
    font-size: 18px;
    padding: 12px;
    margin-bottom: 20px;
  }
`;
