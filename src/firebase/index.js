import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBPgJXImDVQN7RhpBTKou-y_SKX4awT2tw",
        authDomain: "ecommerce-d785c.firebaseapp.com",
        projectId: "ecommerce-d785c",
        storageBucket: "ecommerce-d785c.appspot.com",
        messagingSenderId: "852931588512",
        appId: "1:852931588512:web:d0ae8488a6b1ffcd7cf4c5"
      }
)

export const getFirebase = () => {
    return app;
}


export const getFirestore = () => {
    return firebase.firestore();
}