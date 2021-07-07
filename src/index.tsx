import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "./Views/Login"
import Main from "./Components/Main"

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/" component={Login} />
    </Switch>
  </Router>,
  document.getElementById('root')
);