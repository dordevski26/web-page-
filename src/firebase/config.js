import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDXUiX1PzgywxzLreBJklGVzjalsbsQmrY",
  authDomain: "audiophile-86a6f.firebaseapp.com",
  projectId: "audiophile-86a6f",
  storageBucket: "audiophile-86a6f.appspot.com",
  messagingSenderId: "29020032162",
  appId: "1:29020032162:web:38d075f9e8a61457c5dbfb"
};



// init firebase

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }


 // NISAM KORISTIO FIREBASE