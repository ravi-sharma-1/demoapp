import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBtw4kFOO45194cCWv3w-_GyRS5MBa1OAw",
    authDomain: "chat-bot-7447e.firebaseapp.com",
    databaseURL: "https://chat-bot-7447e-default-rtdb.firebaseio.com",
    projectId: "chat-bot-7447e",
    storageBucket: "chat-bot-7447e.appspot.com",
    messagingSenderId: "925702082431",
    appId: "1:925702082431:web:67ba19f60168b92c85144a",
    measurementId: "G-DTSFJR2J61"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();