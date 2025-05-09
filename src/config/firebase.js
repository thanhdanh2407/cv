import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyD73WUq0gbzuMbbmPQGbscbqiw-MMMDUcE",
  authDomain: "webcv-dace5.firebaseapp.com",
  projectId: "webcv-dace5",
  storageBucket: "webcv-dace5.firebasestorage.app",
  messagingSenderId: "240497253919",
  appId: "1:240497253919:web:ed49cc5ab6f8af3784ff2a",
  measurementId: "G-88MGVPXDDD",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = getFirestore(app);

export { db };
