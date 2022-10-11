import { useState } from 'react';

import { Link } from 'react-router-dom';

import { CardVaga } from './style';

import Header from '../../Components/Header';

import arrowLeft from '../../assets/images/leftArrow.png';

import { teste } from '../../utils/mock/teste';

import history from '../../history';

export default function AddTeste() {
  const [nomeTeste, setNomeTeste] = useState('');
  const [pergunta1, setPergunta1] = useState('');
  const [pergunta2, setPergunta2] = useState('');
  const [pergunta3, setPergunta3] = useState('');
  const [pergunta4, setPergunta4] = useState('');
  const [alternativaP1A, setAlternativaP1A] = useState('');
  const [alternativaP1B, setAlternativaP1B] = useState('');
  const [alternativaP1C, setAlternativaP1C] = useState('');
  const [alternativaP1D, setAlternativaP1D] = useState('');
  const [alternativaP2A, setAlternativaP2A] = useState('');
  const [alternativaP2B, setAlternativaP2B] = useState('');
  const [alternativaP2C, setAlternativaP2C] = useState('');
  const [alternativaP2D, setAlternativaP2D] = useState('');
  const [alternativaP3A, setAlternativaP3A] = useState('');
  const [alternativaP3B, setAlternativaP3B] = useState('');
  const [alternativaP3C, setAlternativaP3C] = useState('');
  const [alternativaP3D, setAlternativaP3D] = useState('');
  const [alternativaP4A, setAlternativaP4A] = useState('');
  const [alternativaP4B, setAlternativaP4B] = useState('');
  const [alternativaP4C, setAlternativaP4C] = useState('');
  const [alternativaP4D, setAlternativaP4D] = useState('');

  function handleCriarTeste() {
    const testeCadastrar = {
      nome: nomeTeste,
      questoes: [
        {
          pergunta: pergunta1,
          alternativa1: alternativaP1A,
          alternativa2: alternativaP1B,
          alternativa3: alternativaP1C,
          alternativa4: alternativaP1D,
        },
        {
          pergunta: pergunta2,
          alternativa1: alternativaP2A,
          alternativa2: alternativaP2B,
          alternativa3: alternativaP2C,
          alternativa4: alternativaP2D,
        },
        {
          pergunta: pergunta3,
          alternativa1: alternativaP3A,
          alternativa2: alternativaP3B,
          alternativa3: alternativaP3C,
          alternativa4: alternativaP3D,
        },
        {
          pergunta: pergunta4,
          alternativa1: alternativaP4A,
          alternativa2: alternativaP4B,
          alternativa3: alternativaP4C,
          alternativa4: alternativaP4D,
        },
      ],
    };

    teste.push(testeCadastrar);
    history.push('/home/recrutador');
  }

  return (
    <>
      <Header />
      <CardVaga>
        <div className="title-container">
          <Link to="/home/recrutador">
            <img src={arrowLeft} alt="Voltar" width="30px" height="30px" />
          </Link>
          <h3>Adicionar novo Teste</h3>
          <h3>&nbsp;</h3>
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => setNomeTeste(event.target.value)}
          />
          <div className="pergunta">
            <input
              type="text"
              placeholder="Pergunta 1"
              onChange={(event) => setPergunta1(event.target.value)}
            />
            <div className="alternativas-area">
              <div className="alternativa">
                <span>Alternativa A:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP1A(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa B:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP1B(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa C:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP1C(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa D:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP1D(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="pergunta">
            <input
              type="text"
              placeholder="Pergunta 2"
              onChange={(event) => setPergunta2(event.target.value)}
            />
            <div className="alternativas-area">
              <div className="alternativa">
                <span>Alternativa A:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP2A(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa B:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP2B(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa C:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP2C(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa D:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP2D(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="pergunta">
            <input
              type="text"
              placeholder="Pergunta 3"
              onChange={(event) => setPergunta3(event.target.value)}
            />
            <div className="alternativas-area">
              <div className="alternativa">
                <span>Alternativa A:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP3A(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa B:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP3B(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa C:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP3C(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa D:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP3D(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="pergunta">
            <input
              type="text"
              placeholder="Pergunta 4"
              onChange={(event) => setPergunta4(event.target.value)}
            />
            <div className="alternativas-area">
              <div className="alternativa">
                <span>Alternativa A:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP4A(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa B:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP4B(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa C:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP4C(event.target.value)}
                />
              </div>
              <div className="alternativa">
                <span>Alternativa D:</span>
                <input
                  type="text"
                  onChange={(event) => setAlternativaP4D(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-area">
          <button type="button" onClick={handleCriarTeste}>Cadastrar Teste</button>
        </div>
      </CardVaga>
    </>
  );
}
