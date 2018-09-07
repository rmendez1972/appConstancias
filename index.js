import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./modules/App";

//import { Router, Route, browserHistory } from 'react-router'
//import routes from './modules/routes'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
   document.getElementById('app')
)
