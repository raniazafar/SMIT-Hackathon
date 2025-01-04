import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
 } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// yahan apna likhna hy code

const firebaseConfig = {
    apiKey: "AIzaSyAVz7TA0Zgr8NcOoLFHMr7T5uiqmQLK2z8",
    authDomain: "smithackathon-c076a.firebaseapp.com",
    projectId: "smithackathon-c076a",
    storageBucket: "smithackathon-c076a.firebasestorage.app",
    messagingSenderId: "34493442396",
    appId: "1:34493442396:web:5763e7a0f36b26505ab999"
  };

// yahan tak

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
}