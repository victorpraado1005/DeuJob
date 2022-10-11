import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import VagasService from '../../services/VagasService';

import Header from '../../Components/Header';

import { teste } from '../../utils/mock/teste';

import history from '../../history';

import {
  TitleContainer,
  ContainerCards,
  CardTeste,
  CardVagasEmAberto,
  CardVagas,
  CardTodosTestes,
} from './style';

import add from '../../assets/images/add.png';

export default function HomeRecrutador() {
  const [vagas, setVagas] = useState([]);
  const [testes] = useState(teste);

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
  return (
    <>
      <Header />
      <TitleContainer>
        <h1>Bem-vindo!</h1>
        <span>
          Visualize e cadastre suas vagas e tenha acesso a central de mensagens
          com os candidatos
        </span>
      </TitleContainer>
      <ContainerCards>
        <CardTodosTestes>
          <div className="title-container">
            <h4>Lista de Testes Cadastrados</h4>
            <Link to="/addTeste">
              <img src={add} alt="" />
            </Link>
          </div>
          {testes.map((testeAtual) => (
            <CardTeste>
              <h4>{testeAtual.nome}</h4>
              <button
                type="button"
                onClick={() => history.push(`/testeDetalhes/${testeAtual.nome}`)}
              >
                Exibir detalhes
              </button>
            </CardTeste>
          ))}
        </CardTodosTestes>
        <CardVagasEmAberto>
          <div className="title-container">
            <h4>Vagas em Aberto</h4>
            <Link to="/addVaga">
              <img src={add} alt="" />
            </Link>
          </div>
          {vagas.map((vaga) => (
            <CardVagas key={vaga.id}>
              <span>{vaga.nome}</span>
              <button
                type="button"
                onClick={() => history.push(`/vaga/${vaga.id}`)}
              >
                Exibir detalhes
              </button>
            </CardVagas>
          ))}
        </CardVagasEmAberto>
      </ContainerCards>
    </>
  );
}
