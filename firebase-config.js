import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEJyIcK7doWCR2zAyq4tFsbt0Y87wn_wU",
  authDomain: "newtube-fa58c.firebaseapp.com",
  projectId: "newtube-fa58c",
  storageBucket: "newtube-fa58c.firebasestorage.app",
  messagingSenderId: "570873720795",
  appId: "1:570873720795:web:144cdfbea43fa3f424c1fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
