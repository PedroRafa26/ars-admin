import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from '../pages/Main';
import MainAdmin from '../pages/MainAdmin';
import { useFirebaseApp } from 'reactfire';


function App() {
  const firebase = useFirebaseApp();
    console.log(firebase);
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/admin' component={MainAdmin} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
