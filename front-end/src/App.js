import Veiculos from "./pages/Veiculos";
import EditarVeiculos from "./pages/Veiculos/Editar";
import PesquisarVeiculos from "./pages/Veiculos/Pesquisar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
          <Veiculos />
        </Route>
        <Route path="/editar/:id">
          <EditarVeiculos />
        </Route>
        <Route path="/pesquisar">
          <PesquisarVeiculos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
