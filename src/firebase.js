import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyCMw8kNt_uHYIQ6ubE6tJr2tMWgR3CDNWE",
    authDomain: "react-firebase-chatapp-3c115.firebaseapp.com",
    projectId: "react-firebase-chatapp-3c115",
    storageBucket: "react-firebase-chatapp-3c115.appspot.com",
    messagingSenderId: "877809346079",
    appId: "1:877809346079:web:f2785c81f3780b9f88172a",
    measurementId: "G-158THH84EG"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
