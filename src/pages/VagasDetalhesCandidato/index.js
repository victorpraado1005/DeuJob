import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

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
  const { id } = useParams();
  const [infoVaga, setInfoVaga] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const dataVaga = await VagasService.getVagasById(id);
        setInfoVaga(dataVaga);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  async function handleRemoveVaga() {
    await CandidatoService.deleteCandidaturasByVagaId(id);
    await VagasService.deleteVaga(id);
    history.push('/home/recrutador');
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
            <button type="button" onClick={handleRemoveVaga}>
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
