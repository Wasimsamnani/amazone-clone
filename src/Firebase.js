import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDIfIBpO6qcKy77mM8XlHfOuecJUVR1oyg",
  authDomain: "clone-de463.firebaseapp.com",
  projectId: "clone-de463",
  storageBucket: "clone-de463.appspot.com",
  messagingSenderId: "924085107333",
  appId: "1:924085107333:web:ccb600ad29fb853b40c7ec",
  measurementId: "G-5WTM7BJJKN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
 export {db,auth};
