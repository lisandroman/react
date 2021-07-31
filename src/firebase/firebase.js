import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  //OBJETO DE FIREBASE
  aapiKey: "AIzaSyDaQYydmiZhDh7x0TG9d6MooAUlNSsTW9Q",
  authDomain: "woodtoys-3c4bb.firebaseapp.com",
  projectId: "woodtoys-3c4bb",
  storageBucket: "woodtoys-3c4bb.appspot.com",
  messagingSenderId: "1041104780779",
  appId: "1:1041104780779:web:b6be486981f8278e5c2dae"

};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const database = firebase.firestore(app).collection("toys");