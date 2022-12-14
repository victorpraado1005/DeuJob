import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './style';

import Header from '../../Components/Header';

import VagasService from '../../services/VagasService';

import arrowLeft from '../../assets/images/leftArrow.png';
import history from '../../history';

export default function AddVaga() {
  const [nome, setNome] = useState('');
  const [beneficios, setBeneficios] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [descricao, setDescricao] = useState('');

  async function handleCriarVaga() {
    if (!nome) {
      return alert('Favor preencher campo de nome');
    }

    if (!beneficios) {
      return alert('Favor preencher campo de Benefícios');
    }

    if (!requisitos) {
      return alert('Favor preencher campo de Requisitos');
    }

    if (!descricao) {
      return alert('Favor preencher campo de descricao');
    }

    try {
      const Vaga = {
        nome,
        descricao,
        beneficios,
        requisitos,
      };

      await VagasService.createVaga(Vaga);

      setNome('');
      setBeneficios('');
      setRequisitos('');
      setDescricao('');
      history.push('/home/recrutador');
    } catch {
      alert('Não foi possível criar a vaga  no momento. Tente Novamente.');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <div className="title-container">
          <Link to="/home/recrutador">
            <img src={arrowLeft} alt="Voltar" width="35px" height="35px" />
          </Link>
          <h3>Adicionar Vaga</h3>
          <div>
          &nbsp;
          </div>
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            className="input-beneficios"
            type="text"
            placeholder="Benefícios"
            onChange={(event) => setBeneficios(event.target.value)}
          />
          <input
            className="input-requisitos"
            type="text"
            placeholder="Requisitos"
            onChange={(event) => setRequisitos(event.target.value)}
          />
          <input
            className="input-descricao"
            type="text"
            placeholder="Descrição"
            onChange={(event) => setDescricao(event.target.value)}
          />
        </div>
        <div className="button-area">
          <button type="button" onClick={handleCriarVaga}>
            Cadastrar Vaga
          </button>
        </div>
      </Container>
    </>
  );
}
