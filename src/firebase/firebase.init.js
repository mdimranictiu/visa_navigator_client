// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE5-IZ6Etzlpe6ACdTj0fmSjFzj-BT4eI",
  authDomain: "visa-navigator-97b76.firebaseapp.com",
  projectId: "visa-navigator-97b76",
  storageBucket: "visa-navigator-97b76.firebasestorage.app",
  messagingSenderId: "869883116568",
  appId: "1:869883116568:web:4bbf4d8cf2920384b7976d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);