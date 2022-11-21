import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCcbmjn4ln7ucLajqJUYClOQU-yk69LsMo",
  authDomain: "biblioteca-eletronica-5d977.firebaseapp.com",
  projectId: "biblioteca-eletronica-5d977",
  storageBucket: "biblioteca-eletronica-5d977.appspot.com",
  messagingSenderId: "1004594699616",
  appId: "1:1004594699616:web:787f432c74ef7e3b139205"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
