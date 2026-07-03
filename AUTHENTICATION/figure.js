// 1. We import the main starter engine
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

// 2. We import our Account Security Guard tools instead of analytics
import { getAuth, createUserWithEmailAndPassword,  } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5MAHLML_bSXTv30QJnXvOqmiRKrj5OEQ",
  authDomain: "pyret-7b081.firebaseapp.com",
  projectId: "pyret-7b081",
  storageBucket: "pyret-7b081.firebasestorage.app",
  messagingSenderId: "495278343046",
  appId: "1:495278343046:web:3c68d731ff9e6d64dd6207",
  measurementId: "G-L74NH5WX70"
};

// 3. Start the connection engine
const app = initializeApp(firebaseConfig);

// 4. Wake up the Security Guard (auth) so we can use it below
export const auth = getAuth(app);



