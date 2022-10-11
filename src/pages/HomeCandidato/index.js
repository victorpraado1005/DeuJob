import { useEffect, useState } from 'react';

import {
  PontosContainer,
  TitleContainer,
  ContainerCards,
  ContainerVagas,
  CardVaga, CardVagas,
} from './style';

// import { Context } from '../../Context/AuthContext';
import UserService from '../../services/UserService';
import CandidatoService from '../../services/CandidatoService';
import VagasService from '../../services/VagasService';

import imgPontos from '../../assets/images/ponto.png';
import like from '../../assets/images/like.png';
import dislike from '../../assets/images/dislike.png';

import Header from '../../Components/Header';

export default function HomeCandidato() {
  const UserId = localStorage.getItem('UserID');
  const [userData, setUserData] = useState('');
  const [candidaturas, setCandidaturas] = useState([]);
  const [vagas, setVagas] = useState([]);
  // const { authenticated } = useContext(Context);

  // if (authenticated === true) {
  //   UserId = localStorage.getItem('UserID');
  //   console.debug(UserId);
  // }

  useEffect(() => {
    (async () => {
      try {
        const user = await UserService.getUserById(UserId);
        setUserData(user);
        const vagaList = await VagasService.getVagas();
        setVagas(vagaList);
        const vagasCandidato = await CandidatoService.getVagasByCandidatoId(
          UserId,
        );
        setCandidaturas(vagasCandidato);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  function handleDislikeVaga(vagaClick) {
    setVagas((prevState) => prevState.filter((vaga) => vaga.id !== vagaClick.id));
  }

  async function handleCandidatar(vagaClick) {
    try {
      const Candidatura = {
        id_vaga: vagaClick.id,
        id_candidato: UserId,
      };

      await CandidatoService.createCandidatura(Candidatura);

      setCandidaturas(await CandidatoService.getVagasByCandidatoId(UserId));

      setVagas((prevState) => prevState.filter((vaga) => vaga.id !== vagaClick.id));
    } catch {
      alert('Não foi possível se candidatar a essa vaga. Tente Novamente.');
    }
  }

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
        <span>
          Visualize e encontre vagas de acordo com seu plano de carreira
        </span>
      </TitleContainer>
      <ContainerCards>
        <div className="card-testes">
          <h1>Alo</h1>
        </div>
        <div className="cardVagas">
          <>
            {vagas.map((vaga) => (
              <CardVagas key={vaga.id}>
                <div className="title-card">
                  <span>Vagas em Aberto</span>
                </div>
                <div className="container-card-info">
                  <div className="container-info-vaga">
                    <span>{vaga.nome}</span>
                  </div>
                  <div className="subtitle-card">
                    <span>Requisito:</span>
                  </div>
                  <div className="container-info-vaga">
                    <span>{vaga.requisitos}</span>
                  </div>
                  <div className="subtitle-card">
                    <span>Descrição:</span>
                  </div>
                  <div className="container-info-vaga">
                    <span>{vaga.descricao}</span>
                  </div>
                </div>
                <div className="button-area">
                  <button type="button" onClick={() => handleDislikeVaga(vaga)}>
                    <img src={dislike} alt="" />
                  </button>
                  <button type="button" onClick={() => handleCandidatar(vaga)}>
                    <img src={like} alt="" />
                  </button>
                </div>
              </CardVagas>
            ))}
          </>
        </div>
        <div>
          <ContainerVagas>
            <div className="title-card">
              <span>Histórico de Candidatura</span>
            </div>
            <span className="subtitle-card">
              A cada candidatura você ganha +5 JobPoints e +10XP
            </span>
            {candidaturas.map((vaga) => (
              <CardVaga key={vaga.id}>
                <div className="container-vaga">
                  <div className="container-info-vaga">
                    <span>{vaga.nome}</span>
                  </div>
                  <div>
                    <button type="button">Exibir Detalhes</button>
                  </div>
                </div>
              </CardVaga>
            ))}
          </ContainerVagas>
        </div>
      </ContainerCards>
    </>
  );
}
