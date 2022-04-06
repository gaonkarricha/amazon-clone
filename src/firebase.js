
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRB82kEw7fTJuEzzfXMfnqiuDCYZOzzvY",
    authDomain: "clone-e50f8.firebaseapp.com",
    projectId: "clone-e50f8",
    storageBucket: "clone-e50f8.appspot.com",
    messagingSenderId: "1044426525329",
    appId: "1:1044426525329:web:c058d0ff3ab60467490d30",
    measurementId: "G-T6YNB167E9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export { app, auth };