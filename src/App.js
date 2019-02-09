import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './pages/Login';
import Timeline from './pages/Timeline';

class App extends Component {
  render() {
    return (
      // fica o caminho na URL
      <BrowserRouter>
       {/* garantir que apenas uma rota seja chamada por endereço */}
        <Switch>
          {/* indica cada rota da aplicação */}
          <Route path="/" exact component={Login}/>
          <Route path="/timeline" component={Timeline}/>
        </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
