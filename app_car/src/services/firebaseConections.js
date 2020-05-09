import firebase from 'firebase/app'
import 'firebase/auth'

let config = {
    apiKey: "AIzaSyBWi7K734pvCmyX5PmRl3GDh84bCAA2w7s",
    authDomain: "carsocial-276712.firebaseapp.com",
    databaseURL: "https://carsocial-276712.firebaseio.com",
    projectId: "carsocial-276712",
    storageBucket: "carsocial-276712.appspot.com",
    messagingSenderId: "50621144583",
    appId: "1:50621144583:web:361ac76569f20f4162d4a2"
  };
  
  firebase.initializeApp(config);

  export default firebase
