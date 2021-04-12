import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAewbWOm2jHfRUXs0-p7ZP4AaWJHsNMPn4",
    authDomain: "pokemon-21-4e313.firebaseapp.com",
    projectId: "pokemon-21-4e313",
    storageBucket: "pokemon-21-4e313.appspot.com",
    messagingSenderId: "252104385409",
    appId: "1:252104385409:web:9085e5f995afd81126be80"
  };

  firebase.initializeApp(firebaseConfig)

export default firebase;