import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Container, CardEditarInformacoes } from './style';

import UserService from '../../services/UserService';

import Header from '../../Components/Header';

import Loader from '../../Components/Loader';

import history from '../../history';

export default function InformacoesCandidatoProfissional() {
  const { id } = useParams();
  const [userData, setUserData] = useState('');
  const [formacao, setFormacao] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [historico, setHistorico] = useState('');
  const [pretensao, setPretensao] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const user = await UserService.getUserById(id);
        setUserData(user);
        setFormacao(user.formacao_academica);
        setHabilidades(user.habilidades);
        setHistorico(user.historico_profissional);
        setPretensao(user.pretensao_salarial);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function handleSalvarAlteracao() {
    try {
      setIsLoading(true);
      const User = {
        formacao_academica: formacao,
        habilidades,
        historico_profissional: historico,
        pretensao_salarial: pretensao,
      };
      console.log(User);
      await UserService.updateInfoProfissional(id, User);
      history.push('/home/candidato');
    } catch {
      alert('Não foi possível salvar as informações.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <h4>Preencha as informações do seu perfil</h4>
        <CardEditarInformacoes>
          <div className="title-edit-user">
            <button type="button" onClick={() => history.push(`/editarUsuario/${id}`)}>Informações Pessoais</button>
            <button type="button">Informações Profissionais</button>
          </div>
          <div className="input-area">
            <span>Formação Acadêmica:</span>
            <input
              type="text"
              placeholder={userData.formacao_academica}
              value={formacao}
              onChange={(event) => setFormacao(event.target.value)}
            />
            <span>Habilidades:</span>
            <input
              type="email"
              placeholder={userData.habilidades}
              value={habilidades}
              onChange={(event) => setHabilidades(event.target.value)}
            />
            <span>Histórico Profissional:</span>
            <input
              type="text"
              placeholder={userData.historico_profissional}
              value={historico}
              onChange={(event) => setHistorico(event.target.value)}
            />
            <span>Pretensão Salarial:</span>
            <input
              type="number"
              placeholder={userData.pretensao_salarial}
              value={pretensao}
              onChange={(event) => setPretensao(event.target.value)}
            />
          </div>
          <div className="
          "
          >
            <button type="button" onClick={handleSalvarAlteracao}>Salvar Informações</button>
          </div>
        </CardEditarInformacoes>
      </Container>
    </>
  );
}
