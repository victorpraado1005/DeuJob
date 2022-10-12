import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import UserService from '../../services/UserService';
import VagasService from '../../services/VagasService';
import CandidatoService from '../../services/CandidatoService';

import {
  Container,
  CardVaga,
  TitleCard,
  CardDescricaoVaga,
} from './style';

import Header from '../../Components/Header';
import arrowLeft from '../../assets/images/leftArrow.png';
import history from '../../history';

export default function VagasDetalhesCandidato() {
  const UserId = localStorage.getItem('UserID');
  const { vaga_id, candidatura_id } = useParams();
  const [infoVaga, setInfoVaga] = useState('');
  let [pontos, setPontos] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const user = await UserService.getUserById(UserId);
        setPontos(user.pontos);
        const dataVaga = await VagasService.getVagasById(vaga_id);
        setInfoVaga(dataVaga);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  async function handleRemoveCandidatura() {
    await CandidatoService.deleteById(candidatura_id);
    pontos -= 50;
    const UserPoints = {
      pontos,
    };
    await UserService.updatePontosUser(UserId, UserPoints);
    history.push('/home/candidato');
  }

  return (
    <>
      <Header />
      <Container>
        <CardVaga>
          <TitleCard>
            <Link to="/home/candidato">
              <img src={arrowLeft} alt="Voltar" width="40px" height="40px" />
            </Link>
            <h1>{infoVaga.nome}</h1>
            <button type="button" onClick={handleRemoveCandidatura}>
              Remover Candidatura
            </button>
          </TitleCard>
          <span>Descrição:</span>
          <CardDescricaoVaga>
            <span>{infoVaga.descricao}</span>
          </CardDescricaoVaga>
          <span>Requisitos:</span>
          <CardDescricaoVaga>
            <span>{infoVaga.requisitos}</span>
          </CardDescricaoVaga>
          <span>Beneficíos:</span>
          <CardDescricaoVaga>
            <span>{infoVaga.beneficios}</span>
          </CardDescricaoVaga>
        </CardVaga>
      </Container>
    </>
  );
}
