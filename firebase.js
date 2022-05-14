const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8MGhdDpt2L7OXVgQuVFWAqjxIag4T7QI",
  authDomain: "todo-with-react-5d10e.firebaseapp.com",
  projectId: "todo-with-react-5d10e",
  storageBucket: "todo-with-react-5d10e.appspot.com",
  messagingSenderId: "18960417478",
  appId: "1:18960417478:web:574c7578eba28d4715cdc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

module.exports = storage;


