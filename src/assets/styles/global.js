import { createGlobalStyle } from 'styled-components';

import fundo from '../images/fundo.png';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Farro', sans-serif;
}

body {
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

  button{
    cursor: pointer;
  }
`;
