import { useParams, Link } from 'react-router-dom';

import { CardTeste, CardPergunta } from './style';

import Header from '../../Components/Header';

import { teste } from '../../utils/mock/teste';

import arrowLeft from '../../assets/images/leftArrow.png';

export default function TesteDetalhes() {
  const { nome } = useParams();
  const testeAtualizado = teste.filter(
    (testeAtual) => testeAtual.nome === nome,
  );
  console.log(testeAtualizado[0].questoes);

  return (
    <>
      <Header />
      <CardTeste>
        <div className="title-container">
          <Link to="/home/recrutador">
            <img src={arrowLeft} alt="Voltar" width="30px" height="30px" />
          </Link>
          <h3>
            Teste de
            {' '}
            {testeAtualizado[0].nome}
          </h3>
          <h3>&nbsp;</h3>
        </div>
        {testeAtualizado[0].questoes.map((questao) => (
          <CardPergunta>
            <h2>{questao.pergunta}</h2>
            <h5>Alternativas:</h5>
            <div className="alternativas-area">
              <div>
                <input type="checkbox" name="resposta" />
                <span>
                  {' '}
                  {questao.alternativa1}
                </span>
              </div>
              <div>
                <input type="checkbox" name="resposta" />
                <span>
                  {' '}
                  {questao.alternativa2}
                </span>
              </div>
              <div>
                <input type="checkbox" name="resposta" />
                <span>
                  {' '}
                  {questao.alternativa3}
                </span>
              </div>
              <div>
                <input type="checkbox" name="resposta" />
                <span>
                  {' '}
                  {questao.alternativa4}
                </span>
              </div>
            </div>
          </CardPergunta>
        ))}
      </CardTeste>
    </>
  );
}
