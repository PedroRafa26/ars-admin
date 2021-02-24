import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import MainMenu from '../pages/MainMenu';
import MainAdmin from '../pages/MainAdmin';
import CreateUser from '../pages/CreateUser';
import {UserContextProvider} from '../context/UserContext'
import {UserAuthContextProvider} from '../context/UserAuthContext'
import CarsRegistration from '../pages/cars_registration/cars_registration';


function App() {
  return(
    <BrowserRouter>
      <UserAuthContextProvider>
        <UserContextProvider>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/create' component={CreateUser} />
            <Route exact path='/admin' component={MainAdmin} />
            <Route exact strict path='/menu/:uid' component={MainMenu} />
            <Route exact path='/cars-add' component={CarsRegistration} />
            {/* <Route exact path='/cars-add' component={CarsRegistration} /> */}
            {/* <Route exact path='/cars-add' component={CarsRegistration} /> */}
            {/* <Route exact path='/cars-add' component={CarsRegistration} /> */}
          </Switch>
        </UserContextProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
