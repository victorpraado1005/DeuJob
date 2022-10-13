import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import VagasService from '../../services/VagasService';

import Header from '../../Components/Header';

import { teste } from '../../utils/mock/teste';

import history from '../../history';

import Loader from '../../Components/Loader';

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
  const UserName = localStorage.getItem('UserName');
  const [isLoading, setIsLoading] = useState(false);
  const [vagas, setVagas] = useState([]);
  // const [testes] = useState(teste);
  const testesEy = teste.filter(
    (testeAtual) => testeAtual.inscritos === '8a79694c-9a53-483f-b5c7-e4748573ecee',
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const vagaList = await VagasService.getVagas();
        setVagas(vagaList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <TitleContainer>
        <h1>
          Bem-vindo,
          {' '}
          {UserName}
          !
        </h1>
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
          {testesEy.map((testeAtual) => (
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
