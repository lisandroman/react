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


//Para evitar que el initializeApp se llame 2 veces (algo que puede pasar en firebase) con un ternario, 
// hago el initializeApp (?) - Pero si ya hay App deuelvo lo que está seteado, evitando la doble llamada (:) 
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// Agrego el collection para ya tenerlo definido y ahorrar línea de código.
// Cuando lo llame hago el get/query según necesite
export const database = firebase.firestore(app).collection("toys");
export const dbOrders = firebase.firestore(app).collection("orders");