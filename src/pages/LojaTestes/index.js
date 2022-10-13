import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import UserService from '../../services/UserService';

import {
  TitleContainer, CardLoja, CardTesteLoja, HeaderLoja,
} from './style';

import Header from '../../Components/Header';

import imgPontos from '../../assets/images/ponto.png';

import { teste } from '../../utils/mock/teste';

import history from '../../history';

import arrowLeft from '../../assets/images/leftArrow.png';

export default function LojaTestes() {
  const UserId = localStorage.getItem('UserID');
  const [jobPoints, setJobPoints] = useState(0);
  const testesLoja = teste.filter(
    (testeAtual) => testeAtual.inscritos === '',
  );
  console.log(testesLoja);

  useEffect(() => {
    (async () => {
      try {
        const user = await UserService.getUserById(UserId);
        setJobPoints(user.pontos);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  async function handleComprarCurso(testeSelecionado) {
    if (testeSelecionado.preco <= jobPoints) {
      try {
        const pontos = jobPoints - testeSelecionado.preco;
        const Pontos = {
          pontos,
        };
        await UserService.updatePontosUser(UserId, Pontos);
        for (let auxTeste of testesLoja) {
          if (auxTeste.nome === testeSelecionado.nome) {
            auxTeste.inscritos = '123456';
          }
        }
        alert('Sua compra foi concluída com sucesso! Logo você receberá informações no seu e-mail.');
        history.push('/home/candidato');
      } catch {
        alert('Não foi possível concluir a compra do teste. Tente Novamente.');
      }
    } else {
      alert('Você não possui JobPoints necessário para comprar esse teste.');
    }
  }

  return (
    <>
      <Header />
      <HeaderLoja>
        <div>
          <Link to="/home/candidato">
            <img src={arrowLeft} alt="Voltar" width="40px" height="40px" />
          </Link>
        </div>
        <TitleContainer>
          <div className="points-user">
            <img src={imgPontos} alt="" />
            {jobPoints}
          </div>
          <span>Ganhe JobPoints e aproveite para ter acesso a cursos e outros benefícios</span>
        </TitleContainer>
        <div>
              &nbsp;
        </div>
      </HeaderLoja>
      <CardLoja>
        {testesLoja.map((testeAtualLoja) => (
          <CardTesteLoja>
            <div className="area-text">
              <span>{testeAtualLoja.nome}</span>
            </div>
            <div className="area-text">
              <span>Nível: </span>
              <span>{testeAtualLoja.nivel}</span>
            </div>
            <div className="area-text">
              <span>
                Preço:
                {' '}
              </span>
              <img src={imgPontos} alt="" width="14px" height="14px" />
              <span>
                {' '}
                {testeAtualLoja.preco}
              </span>
            </div>
            <div>
              <button type="button" onClick={() => handleComprarCurso(testeAtualLoja)}>Comprar</button>
            </div>
          </CardTesteLoja>
        ))}

      </CardLoja>
    </>
  );
}
