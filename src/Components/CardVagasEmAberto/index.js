import { useEffect, useState } from 'react';

import { CardVagas } from './style';

import VagasService from '../../services/VagasService';

export default function CardVagasEmAberto() {
  // const [firstElement, setFirstElement] = useState([]);
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const vagaList = await VagasService.getVagas();
        vagaList.length = 1;
        setVagas(vagaList);
        // console.log('first element', firstElement);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  function handleCandidatar() {
    setVagas(vagas.slice(1));
  }

  return (
    <>
      {vagas.map((vaga) => (
        <CardVagas key={vaga.id}>
          <div className="title-card">
            <span>Vagas em Aberto</span>
          </div>
          <div>
            <div className="container-info-vaga">
              <span>{vaga.nome}</span>
            </div>
            <span>Requisito:</span>
            <div className="container-info-vaga">
              <span>{vaga.requisitos}</span>
            </div>
            <span>Descrição:</span>
            <div className="container-info-vaga">
              <span>{vaga.descricao}</span>
            </div>
          </div>
          <div className="button-area">
            <button type="button">Não</button>
            <button type="button" onClick={handleCandidatar}>
              Sim
            </button>
          </div>
        </CardVagas>
      ))}
    </>
  );
}
