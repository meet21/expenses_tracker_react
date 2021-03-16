import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import {BrowserRouter, Switch ,Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Switch>
       <Route exact path="/" component={Login} />
       {/* <Route exact path="/App" component={App} /> */}
        </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);