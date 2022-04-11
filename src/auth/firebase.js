import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC1lBcJ5UfjZh-6zd7f5AreKGaUg_6mbY8",
  authDomain: "movie-app-d6045.firebaseapp.com",
  projectId: "movie-app-d6045",
  storageBucket: "movie-app-d6045.appspot.com",
  messagingSenderId: "342600979278",
  appId: "1:342600979278:web:bfc334ce55dd840739441f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
