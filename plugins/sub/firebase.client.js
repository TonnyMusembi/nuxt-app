import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
export default defineNuxtPlugin(() => {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCKbznYvAkbOHuPRZU9flVnCuOjJIBbXSw",
    authDomain: "nuxta-pp.firebaseapp.com",
    projectId: "nuxta-pp",
    storageBucket: "nuxta-pp.appspot.com",
    messagingSenderId: "520746198600",
    appId: "1:520746198600:web:3891fcbf0aa0040bd31a7d",
    measurementId: "G-8BBJQYL2TQ",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  return {
    provide: { firebaseApp: app, db },
  };
});
const { $db } = useNuxtApp();
