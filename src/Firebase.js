import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCsJ6_mfigLKU8aNM7HoPP1mKMMKIY4ICw",
  authDomain: "whatsapp-mern-2286e.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-2286e.firebaseio.com",
  projectId: "whatsapp-mern-2286e",
  storageBucket: "whatsapp-mern-2286e.appspot.com",
  messagingSenderId: "973255098226",
  appId: "1:973255098226:web:30f89bd5c23ec15aa767eb",
  measurementId: "G-E1LX9DH5SG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;