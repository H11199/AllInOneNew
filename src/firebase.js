import firebase from "firebase/compat/app";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "@firebase/database";
export { getDatabase } from "firebase/database";
const app = firebase.initializeApp({
  apiKey: "AIzaSyAegm5HZnZ4lhx52Nmo8P8uK2GZBKK_qU8",
  authDomain: "all-in-one-6d8cb.firebaseapp.com",
  databaseURL: "https://all-in-one-6d8cb-default-rtdb.firebaseio.com",
  projectId: "all-in-one-6d8cb",
  storageBucket: "all-in-one-6d8cb.appspot.com",
  messagingSenderId: "620594604869",
  appId: "1:620594604869:web:c8d75bd0d1bcb73953ec2c",
  measurementId: "G-TNZQMFS344",
});

export const auth = getAuth();
export default app;
