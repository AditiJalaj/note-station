import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAgSUHS3edsK0Pq_1ZBlXiInamwWCzDtqU",
    authDomain: "onenote-d2949.firebaseapp.com",
    projectId: "onenote-d2949",
    storageBucket: "onenote-d2949.appspot.com",
    messagingSenderId: "863240246148",
    appId: "1:863240246148:web:1bc2db6cceacb1a484c3d1"
  };


  firebase.initializeApp(firebaseConfig)

const db=firebase.firestore()

export {db}
