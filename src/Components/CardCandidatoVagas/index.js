import { useEffect, useState } from 'react';

import { ContainerVagas, CardVaga } from './style';

import CandidatoService from '../../services/CandidatoService';

export default function CardCandidatoVagas() {
  // const [firstElement, setFirstElement] = useState([]);
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const vagaList = await CandidatoService.getVagasByCandidatoId('8a79694c-9a53-483f-b5c7-e4748573ecee');
        console.log(vagaList);
        setVagas(vagaList);
        // console.log('first element', firstElement);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <ContainerVagas>
      <div className="title-card">
        <span>Histórico de Candidatura</span>
      </div>
      <span className="subtitle-card">A cada candidatura você ganha +5 JobPoints e +10XP</span>
      {vagas.map((vaga) => (
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
  );
}
