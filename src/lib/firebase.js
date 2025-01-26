// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Inicializa Firebase
import { getDatabase } from "firebase/database"; // Importa Realtime Database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1m9raMBuThjIJ7Hy0U2rP61lhkhbsJfg",
  authDomain: "recetacomidaperuana.firebaseapp.com",
  databaseURL: "https://recetacomidaperuana-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recetacomidaperuana",
  storageBucket: "recetacomidaperuana.firebasestorage.app",
  messagingSenderId: "640178479800",
  appId: "1:640178479800:web:2a78308ad2ba434f27ca4d",
  measurementId: "G-THFMC7032E"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de la base de datos
export const database = getDatabase(app.database);