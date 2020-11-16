import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import CreateUser from '../pages/CreateUser';


function App() {
  return(
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/create' component={CreateUser} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
