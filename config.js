import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCXbZoRHya9A8YrmhMAQGhk9FAoY4F7g0Y",
    authDomain: "personal-blogging-app-de648.firebaseapp.com",
    projectId: "personal-blogging-app-de648",
    storageBucket: "personal-blogging-app-de648.appspot.com",
    messagingSenderId: "624579127291",
    appId: "1:624579127291:web:e0299f4e27225e7e7b4d5e",
    measurementId: "G-54DZ1EVCFM"
  };


  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);