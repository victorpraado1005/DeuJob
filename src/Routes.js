import { Switch, Route, Redirect } from 'react-router-dom';

import TelaInicial from './pages/TelaInicial';
import LoginRecrutador from './pages/LoginRecrutador';
import LoginCandidato from './pages/LoginCandidato';
import HomeCandidato from './pages/HomeCandidato';
import HomeRecrutador from './pages/HomeRecrutador';
import VagasDetalhes from './pages/VagasDetalhes';
import AddVaga from './pages/AddVaga';
import TesteDetalhes from './pages/TesteDetalhes';
import AddTeste from './pages/AddTeste';
import VagasDetalhesCandidato from './pages/VagasDetalhesCandidato';
import RealizarTeste from './pages/RealizarTeste';

function CustomRoute({ isPrivate, ...rest }) {
  const logged = localStorage.getItem('UserID');

  if (isPrivate && !logged) {
    return <Redirect to="/" />;
  }

  return <Route {... rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={TelaInicial} />
      <CustomRoute exact path="/login/recrutador" component={LoginRecrutador} />
      <CustomRoute exact path="/login/candidato" component={LoginCandidato} />
      <CustomRoute isPrivate exact path="/home/candidato" component={HomeCandidato} />
      <CustomRoute isPrivate exact path="/home/recrutador" component={HomeRecrutador} />
      <CustomRoute isPrivate exact path="/vaga/:id" component={VagasDetalhes} />
      <CustomRoute isPrivate exact path="/addVaga" component={AddVaga} />
      <CustomRoute isPrivate exact path="/testeDetalhes/:nome" component={TesteDetalhes} />
      <CustomRoute isPrivate exact path="/addTeste" component={AddTeste} />
      <CustomRoute isPrivate exact path="/detalhesVaga/:vaga_id/:candidatura_id" component={VagasDetalhesCandidato} />
      <CustomRoute isPrivate exact path="/realizarTeste/:nome" component={RealizarTeste} />
    </Switch>
  );
}
