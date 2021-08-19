import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKLOJFhpJj3jeFhG3Jx-JUjyV_tN3Kw4Y",
  authDomain: "to-do-list-397ef.firebaseapp.com",
  projectId: "to-do-list-397ef",
  storageBucket: "to-do-list-397ef.appspot.com",
  messagingSenderId: "333350945363",
  appId: "1:333350945363:web:f64e0b55dcc4a08960fca6",
  measurementId: "G-WQBCLG0S9T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
