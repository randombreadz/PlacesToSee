import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDSDMJUVTbuRpGLU5tN0CqNi1uUaRONumE",
  authDomain: "placestosee-e2151.firebaseapp.com",
  projectId: "placestosee-e2151",
  storageBucket: "placestosee-e2151.appspot.com",
  messagingSenderId: "550355934238",
  appId: "1:550355934238:web:4a45736c90557ad40ce20f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();