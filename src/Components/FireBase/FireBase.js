// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBYdQomSkDdUFkbSggS66EAuN2GlN13DJ4",
  authDomain: "branding-device.firebaseapp.com",
  projectId: "branding-device",
  storageBucket: "branding-device.firebasestorage.app",
  messagingSenderId: "449271124527",
  appId: "1:449271124527:web:2a043cbcd2a1c20d13acda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;