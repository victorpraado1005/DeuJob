import { useEffect, useState } from 'react';

import { Container, CardVagas } from './style';

import VagasService from '../../services/VagasService';
import CandidatoService from '../../services/CandidatoService';

import like from '../../assets/images/like.png';
import dislike from '../../assets/images/dislike.png';

export default function CardVagasEmAberto() {
  const UserId = '8a79694c-9a53-483f-b5c7-e4748573ecee';
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const vagaList = await VagasService.getVagas();
        setVagas(vagaList);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  function handleDislikeVaga(vagaClick) {
    setVagas((prevState) => prevState.filter(
      (vaga) => vaga.id !== vagaClick.id,
    ));
  }

  async function handleCandidatar(vagaClick) {
    try {
      const Candidatura = {
        id_vaga: vagaClick.id,
        id_candidato: UserId,
      };

      await CandidatoService.createCandidatura(Candidatura);

      setVagas((prevState) => prevState.filter(
        (vaga) => vaga.id !== vagaClick.id,
      ));
    } catch {
      alert('Não foi possível se candidatar a essa vaga. Tente Novamente.');
    }
  }

  return (
    <Container>
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
    </Container>
  );
}
