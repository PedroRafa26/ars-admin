import firebase from 'firebase'

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

  const fire = firebase.initializeApp(firebaseConfig)
  
  export default fire