import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './style';

import Header from '../../Components/Header';

import VagasService from '../../services/VagasService';

import arrowLeft from '../../assets/images/leftArrow.png';

export default function AddVaga() {
  const [nome, setNome] = useState('');
  const [benefico, setBenefico] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [descricao, setDescricao] = useState('');

  async function handleCriarVaga() {
    if (!nome) {
      return alert('Favor preencher campo de nome');
    }

    if (!benefico) {
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
        beneficos: benefico,
        requisitos,
      };

      await VagasService.createVaga(Vaga);

      setNome('');
      setBenefico('');
      setRequisitos('');
      setDescricao('');
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
            onChange={(event) => setBenefico(event.target.value)}
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
