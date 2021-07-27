import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMX88BZeQ9OrEbudMBhCOR86W15fbhkzU",
    authDomain: "whatsapp-clone-ece00.firebaseapp.com",
    projectId: "whatsapp-clone-ece00",
    storageBucket: "whatsapp-clone-ece00.appspot.com",
    messagingSenderId: "77832089356",
    appId: "1:77832089356:web:31e661a7c743e02e8ce329",
    measurementId: "G-23M02MY4Y0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth, provider};
