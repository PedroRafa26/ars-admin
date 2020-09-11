import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { FirebaseAppProvider } from 'reactfire';

const container = document.getElementById('root');

const firebaseConfig = {
  apiKey: "AIzaSyABvkbbwOmLblg3Z-9t4JogFbO8BlyCbG4",
  authDomain: "ars-app-ve.firebaseapp.com",
  databaseURL: "https://ars-app-ve.firebaseio.com",
  projectId: "ars-app-ve",
  storageBucket: "ars-app-ve.appspot.com",
  messagingSenderId: "742155764436",
  appId: "1:742155764436:web:a622699a9e1b3c4a0cb141",
  measurementId: "G-1HZKGVSNHY"
};

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la App...'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>
), container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
