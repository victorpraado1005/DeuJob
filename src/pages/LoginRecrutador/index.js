import { useState, useContext } from 'react';

import { Container, Content, ButtonArea } from './style';

import { Context } from '../../Context/AuthContext';

import Input from '../../input';
import Button from '../../button';
import Loader from '../../Components/Loader';
import Header from '../../Components/Header';

import history from '../../history';

export default function LoginRecrutador() {
  const { login } = useContext(Context);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setSenha(event.target.value);
  }

  async function handleLogin() {
    try {
      setIsLoading(true);
      await login(email, senha);
    } catch {
      console.log('erro');
    } finally {
      setIsLoading(false);
      history.push('/home/recrutador');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <Content>
          <h1>Login</h1>
          <p
            id="senha"
            style={{
              display: 'none',
              color: 'red',
              marginBottom: '10px',
              fontWeight: 'bold',
            }}
          >
            E-mail ou senha incorretos
          </p>
          <Input
            value={email}
            type="email"
            placeholder="E-mail"
            onChange={handleEmailChange}
          />
          <Input
            value={senha}
            type="password"
            placeholder="Senha"
            onChange={handlePasswordChange}
          />
          <ButtonArea>
            <Button type="submit" onClick={() => history.push('/')}>Criar Conta</Button>
            <Button type="submit" onClick={handleLogin}>Acessar</Button>
          </ButtonArea>
        </Content>
      </Container>
    </>
  );
}
