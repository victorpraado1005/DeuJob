import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import HomeRecrutador from './pages/HomeRecrutador';
import VagasDetalhes from './pages/VagasDetalhes';
import AddVaga from './pages/AddVaga';

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
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute isPrivate exact path="/home" component={Home} />
      <CustomRoute isPrivate exact path="/home/recrutador" component={HomeRecrutador} />
      <CustomRoute isPrivate exact path="/vaga/:id" component={VagasDetalhes} />
      <CustomRoute isPrivate exact path="/addVaga" component={AddVaga} />
    </Switch>
  );
}
