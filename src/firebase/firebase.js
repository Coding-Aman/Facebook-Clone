import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpwF5vtF13FSM2AH-cU-o6BllcJx-eMsc",
  authDomain: "fb-clone-df800.firebaseapp.com",
  projectId: "fb-clone-df800",
  storageBucket: "fb-clone-df800.appspot.com",
  messagingSenderId: "491549063104",
  appId: "1:491549063104:web:d8c11394c7d8b917a73a25",
  measurementId: "G-KZR3XJJ24Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
