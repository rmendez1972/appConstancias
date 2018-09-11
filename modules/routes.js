import React from "react";
import { Route, Switch, IndexRedirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Cerrar from "./Cerrar";
import Repos from "./Repos";
import Repo from "./Repo";
import Notfound from "./Notfound";

export default () =>
  <Switch>
  	<IndexRedirect to="/login" />
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/repos" exact component={Repos} />
    <Route path="/repos/:param1/:param2" exact component={Repo} />

    <Route path="/cerrarsesion" exact component={Cerrar} />
    { /* Si no coincide ninguna ruta, cargamos pagina de No encontrado */ }
	<Route component={Notfound} />

  </Switch>;