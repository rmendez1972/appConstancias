import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Repos from "./Repos";
import Repo from "./Repo";
import Notfound from "./Notfound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/repos" exact component={Repos} />
    <Route path="/repos/:param1/:param2" exact component={Repo} />

    <Route path="/about" exact component={About} />
    { /* Si no coincide ninguna ruta, cargamos pagina de No encontrado */ }
	<Route component={Notfound} />

  </Switch>;