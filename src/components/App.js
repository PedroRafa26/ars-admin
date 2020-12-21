import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import MainMenu from '../pages/MainMenu';
import MainAdmin from '../pages/MainAdmin';
import CreateUser from '../pages/CreateUser';


function App() {
  return(
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/create' component={CreateUser} />
          <Route exact path='/admin' component={MainAdmin} />
          <Route exact strict path='/menu/:uid' component={MainMenu} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
