import firebase from 'firebase/app'
import 'firebase/auth'

let config = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    databaseURL: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXX",
    appId: "XXXX"
  };
  
  firebase.initializeApp(config);

  export default firebase
