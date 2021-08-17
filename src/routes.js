import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cargo from './pages/Cargos';
import Funcionario from './pages/Funcionarios';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Cargo} />
        <Route path="/funcionario" component={Funcionario} />
      </Switch>
    </BrowserRouter>
  );
}