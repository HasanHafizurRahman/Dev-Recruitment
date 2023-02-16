import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJlcyTCtNG01qJIKjnG8c1EJX0c3eMCLY",
  authDomain: "job-point-a4c67.firebaseapp.com",
  projectId: "job-point-a4c67",
  storageBucket: "job-point-a4c67.appspot.com",
  messagingSenderId: "335396814185",
  appId: "1:335396814185:web:88ea97bf013e0a340c51f8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
