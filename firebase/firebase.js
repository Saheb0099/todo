import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB74TNI0RuhDsM7HlTyrClH8vQYEolNiWc",
  authDomain: "todo-726ee.firebaseapp.com",
  projectId: "todo-726ee",
  storageBucket: "todo-726ee.appspot.com",
  messagingSenderId: "128985358807",
  appId: "1:128985358807:web:70a454b82d17665c24eb92",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
