// import { useContext } from 'react';

// import { Context } from '../../Context/AuthContext';

import { Container } from './style';

// import Button from '../../button';

import logoDeuJob from '../../assets/images/logo.png';

export default function Header() {
  // const { handleLogout } = useContext(Context);

  return (
    <Container>
      <div className="image-logo">
        <img src={logoDeuJob} alt="" />
      </div>
      <ul>
        <li>
          Login
        </li>
        <li>
          Criar Conta
        </li>
        <li>
          Sobre
        </li>
        <li>
          Contato
        </li>
      </ul>
    </Container>
  );
}
