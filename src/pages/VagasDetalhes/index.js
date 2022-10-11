import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import VagasService from '../../services/VagasService';
import CandidatoService from '../../services/CandidatoService';

import {
  Container,
  CardVaga,
  TitleCard,
  CardDescricaoVaga,
  CardCandidatosVaga,
  CardCandidatoVaga,
} from './style';

import Header from '../../Components/Header';
import arrowLeft from '../../assets/images/leftArrow.png';

export default function VagasDetalhes() {
  const { id } = useParams();
  const [infoVaga, setInfoVaga] = useState('');
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataVaga = await VagasService.getVagasById(id);
        setInfoVaga(dataVaga);
        const candidatosVaga = await CandidatoService.getCandidatosByVagaId(id);
        console.log(candidatosVaga);
        setCandidatos(candidatosVaga);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Link to="/home/recrutador">
          <img src={arrowLeft} alt="Voltar" width="40px" height="40px" />
        </Link>
        <CardVaga>
          <TitleCard>
            <h1>{infoVaga.nome}</h1>
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
        <CardCandidatosVaga>
          <TitleCard>
            <h1>Candidatos</h1>
          </TitleCard>
          {candidatos.map((candidato) => (
            <CardCandidatoVaga key={candidato.id}>
              <div className="container-info-candidato">
                <div className="info-user">
                  <div className="info-candidato">
                    <span className="font-yellow">Nome: </span>
                    <span>{candidato.nome}</span>
                  </div>
                  <div className="info-candidato">
                    <span className="font-yellow">Email: </span>
                    <span>{candidato.email}</span>
                  </div>
                  <div className="info-candidato">
                    <span className="font-yellow">Telefone: </span>
                    <span>{candidato.telefone}</span>
                  </div>
                  <div className="info-candidato">
                    <span className="font-yellow">Gênero: </span>
                    <span>{candidato.genero}</span>
                  </div>
                  <div className="info-candidato">
                    <span className="font-yellow">Cidade: </span>
                    <span>{candidato.cidade}</span>
                  </div>
                  <div className="info-candidato">
                    <span className="font-yellow">Estado: </span>
                    <span>{candidato.estado}</span>
                  </div>
                </div>
                <div className="info-historico-user">
                  <div className="info-candidato">
                    <span className="font-yellow">Formação Acadêmica: </span>
                    <span>{candidato.formacao_academica}</span>
                  </div>
                  <div className="info-candidato">
                    <span className="font-yellow">Idiomas e Habilidades: </span>
                    <span>{candidato.habilidades}</span>
                  </div>
                  <div className="info-candidato">
                    <span className="font-yellow">Histórico Profissional: </span>
                    <span>{candidato.historico_profissional}</span>
                  </div>
                </div>
              </div>
            </CardCandidatoVaga>
          ))}
        </CardCandidatosVaga>
      </Container>
    </>
  );
}
