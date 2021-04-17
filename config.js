import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCEWOMBH0nLBU-LfrQGDFJ6T3NgJZl218k",
    authDomain: "wily-app-d5d97.firebaseapp.com",
    projectId: "wily-app-d5d97",
    storageBucket: "wily-app-d5d97.appspot.com",
    messagingSenderId: "693551564003",
    appId: "1:693551564003:web:d1e3616e519ad1960ef1d6"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()