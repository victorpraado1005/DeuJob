import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import { Container } from './style';

import logoDeuJob from '../../assets/images/logo.png';

export default function Header() {
  const { handleLogout } = useContext(Context);

  return (
    <Container>
      <div className="image-logo">
        <img src={logoDeuJob} alt="" />
      </div>
      <button type="button" onClick={handleLogout}>Sair</button>
    </Container>
  );
}
