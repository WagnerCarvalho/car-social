import firebase from 'firebase/app'
import 'firebase/auth'

let config = {
    apiKey: "${apiKey}",
    authDomain: "carsocial.firebaseapp.com",
    databaseURL: "https://carsocial.firebaseio.com",
    projectId: "carsocial",
    storageBucket: "carsocial.appspot.com",
    messagingSenderId: "${messagingSenderId}",
    appId: "${appId}"
  };
  
  firebase.initializeApp(config);

  export default firebase
