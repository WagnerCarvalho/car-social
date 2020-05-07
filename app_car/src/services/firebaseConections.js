import firebase from 'firebase/app'
import 'firebase/auth'

let config = {
    apiKey: "AIzaSyAhJk2W5BXij63OGuFu2wLVLEzMKnMz0Fs",
    authDomain: "carsocial.firebaseapp.com",
    databaseURL: "https://carsocial.firebaseio.com",
    projectId: "carsocial",
    storageBucket: "carsocial.appspot.com",
    messagingSenderId: "838391032294",
    appId: "1:838391032294:web:3ad0b3e50b8491f15e0e27"
  };
  
  firebase.initializeApp(config);

  export default firebase
