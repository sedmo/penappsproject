import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyD2gA3UctkofmGVSsXgzyzaCHe8qy19BcI",
    authDomain: "languageproject-bf664.firebaseapp.com",
    databaseURL: "https://languageproject-bf664.firebaseio.com",
    projectId: "languageproject-bf664",
    storageBucket: "languageproject-bf664.appspot.com",
    messagingSenderId: "894265504537"
  };
  firebase.initializeApp(config);
   // Initialize Cloud Firestore through Firebase
   var db = firebase.firestore();
  
   // Disable deprecated features
   db.settings({
     timestampsInSnapshots: true
   });
   

  export default db;