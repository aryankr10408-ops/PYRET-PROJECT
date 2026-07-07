import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5MAHLML_bSXTv30QJnXvOqmiRKrj5OEQ",
  authDomain: "pyret-7b081.firebaseapp.com",
  projectId: "pyret-7b081",
  storageBucket: "pyret-7b081.firebasestorage.app",
  messagingSenderId: "495278343046",
  appId: "1:495278343046:web:3c68d731ff9e6d64dd6207",
  measurementId: "G-L74NH5WX70"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;


