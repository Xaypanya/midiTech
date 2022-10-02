import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyACImVPZAM3xqLUsv7fY16AuQ3xcGGtvwk",
  authDomain: "miditech-247ec.firebaseapp.com",
  projectId: "miditech-247ec",
  storageBucket: "miditech-247ec.appspot.com",
  messagingSenderId: "703888602842",
  appId: "1:703888602842:web:6f772cffcba2db2b13d7e3",
  measurementId: "G-DTEYS41D5S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);