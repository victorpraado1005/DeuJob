import { Container, Content } from './style';

import Header from '../../Components/Header';

import history from '../../history';

export default function TelaInicial() {
  return (
    <>
      <Header />
      <Container>
        <span>Seja bem-vindo a plataforma de Recursos Humanos da EY</span>
        <Content>
          <h4>Selecione  o Tipo de Usuário que você se encaixa</h4>
          <button
            type="button"
            onClick={() => history.push('/login/recrutador')}
          >
            Sou Recruiter
          </button>
          <button
            type="button"
            onClick={() => history.push('/login/candidato')}
          >
            Sou Candidato
          </button>
        </Content>
      </Container>
    </>
  );
}
