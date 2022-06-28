import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFusAeqdTQYqbbhqanwJTA6c1X9LoCmPQ",
  authDomain: "todo-list-78336.firebaseapp.com",
  projectId: "todo-list-78336",
  storageBucket: "todo-list-78336.appspot.com",
  messagingSenderId: "551596821007",
  appId: "1:551596821007:web:fd9691f538d566f65eb17a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);