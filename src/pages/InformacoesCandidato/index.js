import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Container, CardEditarInformacoes } from './style';

import UserService from '../../services/UserService';

import Header from '../../Components/Header';

import Loader from '../../Components/Loader';

import history from '../../history';

import arrowLeft from '../../assets/images/leftArrow.png';

export default function InformacoesCandidato() {
  const { id } = useParams();
  const [userData, setUserData] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const user = await UserService.getUserById(id);
        setUserData(user);
        setNome(user.nome);
        setEmail(user.email);
        setGenero(user.genero);
        setTelefone(user.telefone);
        setCidade(user.cidade);
        setEstado(user.estado);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function handleSalvarAlteracao() {
    if (!nome) {
      return alert('Preencher campo de nome.');
    }
    try {
      setIsLoading(true);
      const User = {
        nome,
        email,
        telefone,
        genero,
        cidade,
        estado,
      };
      console.log(User);
      await UserService.updateInfoPessoais(id, User);
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
            <div>
              <Link to="/home/candidato">
                <img src={arrowLeft} alt="Voltar" width="40px" height="40px" />
              </Link>
            </div>
            <div>
              <button type="button">Informações Pessoais</button>
              <button type="button" onClick={() => history.push(`editarInfoProfissional/${id}`)}>Informações Profissionais</button>
            </div>
            <div>
              &nbsp;
            </div>
          </div>
          <div className="input-area">
            <input
              type="text"
              placeholder={userData.nome}
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <input
              type="email"
              placeholder={userData.email}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="number"
              placeholder={userData.telefone}
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
            <input
              type="text"
              placeholder={userData.genero}
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
            />
            <input
              type="text"
              placeholder={userData.cidade}
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
            <input
              type="text"
              placeholder={userData.estado}
              value={estado}
              onChange={(event) => setEstado(event.target.value)}
            />
          </div>
          <button type="button" onClick={handleSalvarAlteracao}>Salvar Informações</button>
        </CardEditarInformacoes>
      </Container>
    </>
  );
}
