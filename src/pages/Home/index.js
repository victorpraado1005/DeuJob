import { useEffect, useState } from 'react';

import { PontosContainer, TitleContainer, ContainerCards } from './style';

// import { Context } from '../../Context/AuthContext';
import UserService from '../../services/UserService';
// import CandidatoService from '../../services/CandidatoService';

import imgPontos from '../../assets/images/ponto.png';

import Header from '../../Components/Header';
import CardVagasEmAberto from '../../Components/CardVagasEmAberto';
import CardCandidatoVagas from '../../Components/CardCandidatoVagas';

export default function Home() {
  const [userData, setUserData] = useState('');
  // const { authenticated } = useContext(Context);
  const UserId = '8a79694c-9a53-483f-b5c7-e4748573ecee';

  // if (authenticated === true) {
  //   UserId = localStorage.getItem('UserID');
  //   console.debug(UserId);
  // }

  useEffect(() => {
    (async () => {
      try {
        const user = await UserService.getUserById(UserId);
        setUserData(user);
        // const vagasCandidato = await CandidatoService.getVagasByCandidatoId(UserId);
        // console.log(vagasCandidato);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <PontosContainer>
        <img src={imgPontos} alt="" />
        {userData.pontos}
      </PontosContainer>
      <TitleContainer>
        <h3>
          Bem vindo,
          {' '}
          {userData.nome}
          !
        </h3>
        <span>Visualize e encontre vagas de acordo com seu plano de carreira</span>
      </TitleContainer>
      <ContainerCards>
        <CardVagasEmAberto />
        <CardCandidatoVagas />
      </ContainerCards>
    </>
  );
}
