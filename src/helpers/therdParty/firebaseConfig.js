import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAlRKgjintV53w6oCMWI0acowkYYL4M810",
  authDomain: ["kallummakkayazz-c4336.firebaseapp.com","http://localhost:3000","kallummakkayzz.com"],
  projectId: "kallummakkayazz-c4336",
  storageBucket: "kallummakkayazz-c4336.firebasestorage.app",
  messagingSenderId: "463105598082",
  appId: "1:463105598082:web:e3864dc405a5b5fef94a9b",
  measurementId: "G-LDJJMEL6HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Functions
const functions = getFunctions(app);

export { app, functions };