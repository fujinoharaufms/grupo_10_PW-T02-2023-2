//Importação das bibliotecas de configuração do firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configurações encontradas no console do Firebase
//Insira aqui as configurações
const firebaseConfig = {
  apiKey: "AIzaSyClXELcWDRkYl3cnuuFDpoyhfIhRqkzBA0",
  authDomain: "quizzes-453d4.firebaseapp.com",
  projectId: "quizzes-453d4",
  storageBucket: "quizzes-453d4.appspot.com",
  messagingSenderId: "476044908872",
  appId: "1:476044908872:web:e45baa72086594a76c3b7d"
};

//Inicialização do firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
