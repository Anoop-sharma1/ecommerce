import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK4WX_7Z-SHpip2m8OZlSQpJaL1C3tLeQ",
  authDomain: "react-c4297.firebaseapp.com",
  databaseURL: "https://react-c4297-default-rtdb.firebaseio.com",
  projectId: "react-c4297",
  storageBucket: "react-c4297.appspot.com",
  messagingSenderId: "387713735801",
  appId: "1:387713735801:web:31536b08b1826881c348a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
