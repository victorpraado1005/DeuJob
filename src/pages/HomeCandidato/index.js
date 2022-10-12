import { useEffect, useState } from 'react';

import {
  PontosContainer,
  TitleContainer,
  ContainerCards,
  ContainerVagas,
  CardVaga, CardVagas,
  CardTeste,
} from './style';

// import { Context } from '../../Context/AuthContext';
import UserService from '../../services/UserService';
import CandidatoService from '../../services/CandidatoService';
import VagasService from '../../services/VagasService';
import { teste } from '../../utils/mock/teste';

import imgPontos from '../../assets/images/ponto.png';
import like from '../../assets/images/like.png';
import dislike from '../../assets/images/dislike.png';

import Header from '../../Components/Header';

import history from '../../history';

export default function HomeCandidato() {
  const UserId = localStorage.getItem('UserID');
  const [userData, setUserData] = useState('');
  const [candidaturas, setCandidaturas] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [jobPoints, setJobPoints] = useState(0);
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
        setJobPoints(user.pontos);
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

      let { pontos } = userData;
      pontos += 50;
      const UserPonto = {
        pontos,
      };
      await UserService.updatePontosUser(UserId, UserPonto);
      setJobPoints(pontos);

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
        {jobPoints}
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
          <h4>Testes Cadastrados pela EY </h4>
          <div className="subtitle-card-teste">
            <img src={imgPontos} alt="ponto" />
            <span>A cada curso concluído você recebe 100 JobPoints</span>
          </div>
          {teste.map((testeAtual) => (
            <CardTeste>
              <h4>{testeAtual.nome}</h4>
              <div className="pontos-curso">
                <img src={imgPontos} alt="ponto" />
                <span>
                  {' '}
                  +100
                </span>
              </div>
              <button type="button" onClick={() => history.push(`/realizarTeste/${testeAtual.nome}`)}>Acessar</button>
            </CardTeste>
          ))}
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
            <div className="subtitle-card-candidatura">
              <img src={imgPontos} alt="ponto" />
              <span>
                A cada candidatura você ganha +50 JobPoints
              </span>
            </div>
            {candidaturas.map((vaga) => (
              <CardVaga key={vaga.id}>
                <div className="container-vaga">
                  <div className="container-info-vaga">
                    <span>{vaga.nome}</span>
                  </div>
                  <div>
                    <button type="button" onClick={() => history.push(`/detalhesVaga/${vaga.id_vaga}/${vaga.id}`)}>Exibir Detalhes</button>
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
