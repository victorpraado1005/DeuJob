import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { CardTeste, CardPergunta } from './style';

import Header from '../../Components/Header';

import { teste } from '../../utils/mock/teste';

import arrowLeft from '../../assets/images/leftArrow.png';
import history from '../../history';

import UserService from '../../services/UserService';

export default function RealizarTeste() {
  const UserId = localStorage.getItem('UserID');
  const { nome } = useParams();
  const testeAtualizado = teste.filter(
    (testeAtual) => testeAtual.nome === nome,
  );
  const questao1 = testeAtualizado[0].questoes[0];
  const questao2 = testeAtualizado[0].questoes[1];
  const questao3 = testeAtualizado[0].questoes[2];
  const questao4 = testeAtualizado[0].questoes[3];
  const [respQ1, setRespQ1] = useState('');
  const [respQ2, setRespQ2] = useState('');
  const [respQ3, setRespQ3] = useState('');
  const [respQ4, setRespQ4] = useState('');
  const [jobPoints, setJobPoints] = useState(0);

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

  async function handleFinalizarTeste() {
    if (!respQ1) {
      return alert('Responser Questão 1');
    }
    if (!respQ2) {
      return alert('Responser Questão 2');
    }
    if (!respQ3) {
      return alert('Responser Questão 3');
    }
    if (!respQ4) {
      return alert('Responser Questão 4');
    }

    let pontos = 0;

    if (respQ1 === 'A') {
      pontos += 1;
    }

    if (respQ2 === 'C') {
      pontos += 1;
    }

    if (respQ3 === 'D') {
      pontos += 1;
    }

    if (respQ4 === 'B') {
      pontos += 1;
    }

    if (pontos >= 2) {
      alert('Parábens! Você atingiu a média do teste e ganhou 100 JobPoints!');
      try {
        let pontosUsuario = jobPoints + 100;
        const userPoints = {
          pontos: pontosUsuario,
        };
        await UserService.updatePontosUser(UserId, userPoints);
      } catch {
        console.log('Erro no update de pontos');
      } finally {
        history.push('/home/candidato');
      }
    } else {
      alert('Você não atingiu a média necessária para concluir esse teste, mas não se preocupe, logo você poderá repetir o teste!');
      return history.push('/home/candidato');
    }
  }

  return (
    <>
      <Header />
      <CardTeste>
        <div className="title-container">
          <Link to="/home/candidato">
            <img src={arrowLeft} alt="Voltar" width="30px" height="30px" />
          </Link>
          <h3>
            Teste de
            {' '}
            {testeAtualizado[0].nome}
          </h3>
          <h3>&nbsp;</h3>
        </div>
        <CardPergunta>
          <h2>{questao1.pergunta}</h2>
          <h5>Alternativas:</h5>
          <div className="alternativas-area">
            <div>
              <input
                type="radio"
                name="respostaQ1"
                value="A"
                onChange={(event) => setRespQ1(event.target.value)}
              />
              <span>
                {' '}
                {questao1.alternativa1}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ1"
                value="B"
                onChange={(event) => setRespQ1(event.target.value)}
              />
              <span>
                {' '}
                {questao1.alternativa2}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ1"
                value="C"
                onChange={(event) => setRespQ1(event.target.value)}
              />
              <span>
                {' '}
                {questao1.alternativa3}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ1"
                value="D"
                onChange={(event) => setRespQ1(event.target.value)}
              />
              <span>
                {' '}
                {questao1.alternativa4}
              </span>
            </div>
          </div>
        </CardPergunta>
        <CardPergunta>
          <h2>{questao2.pergunta}</h2>
          <h5>Alternativas:</h5>
          <div className="alternativas-area">
            <div>
              <input
                type="radio"
                name="respostaQ2"
                value="A"
                onChange={(event) => setRespQ2(event.target.value)}
              />
              <span>
                {' '}
                {questao2.alternativa1}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ2"
                value="B"
                onChange={(event) => setRespQ2(event.target.value)}
              />
              <span>
                {' '}
                {questao2.alternativa2}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ2"
                value="C"
                onChange={(event) => setRespQ2(event.target.value)}
              />
              <span>
                {' '}
                {questao2.alternativa3}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ2"
                value="D"
                onChange={(event) => setRespQ2(event.target.value)}
              />
              <span>
                {' '}
                {questao2.alternativa4}
              </span>
            </div>
          </div>
        </CardPergunta>
        <CardPergunta>
          <h2>{questao3.pergunta}</h2>
          <h5>Alternativas:</h5>
          <div className="alternativas-area">
            <div>
              <input
                type="radio"
                name="respostaQ3"
                value="A"
                onChange={(event) => setRespQ3(event.target.value)}
              />
              <span>
                {' '}
                {questao3.alternativa1}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ3"
                value="B"
                onChange={(event) => setRespQ3(event.target.value)}
              />
              <span>
                {' '}
                {questao3.alternativa2}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ3"
                value="C"
                onChange={(event) => setRespQ3(event.target.value)}
              />
              <span>
                {' '}
                {questao3.alternativa3}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ3"
                value="D"
                onChange={(event) => setRespQ3(event.target.value)}
              />
              <span>
                {' '}
                {questao3.alternativa4}
              </span>
            </div>
          </div>
        </CardPergunta>
        <CardPergunta>
          <h2>{questao4.pergunta}</h2>
          <h5>Alternativas:</h5>
          <div className="alternativas-area">
            <div>
              <input
                type="radio"
                name="respostaQ4"
                value="A"
                onChange={(event) => setRespQ4(event.target.value)}
              />
              <span>
                {' '}
                {questao4.alternativa1}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ4"
                value="B"
                onChange={(event) => setRespQ4(event.target.value)}
              />
              <span>
                {' '}
                {questao4.alternativa2}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ4"
                value="C"
                onChange={(event) => setRespQ4(event.target.value)}
              />
              <span>
                {' '}
                {questao4.alternativa3}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="respostaQ4"
                value="D"
                onChange={(event) => setRespQ4(event.target.value)}
              />
              <span>
                {' '}
                {questao4.alternativa4}
              </span>
            </div>
          </div>
        </CardPergunta>
        <button type="button" onClick={handleFinalizarTeste}>
          Finalizar
        </button>
      </CardTeste>
    </>
  );
}
