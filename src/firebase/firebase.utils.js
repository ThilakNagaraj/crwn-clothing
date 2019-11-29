import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {

        apiKey: "AIzaSyDJBf_uFTPpxbGE_pLYy6zwTqQSUxBtydw",
        authDomain: "crown-db-efade.firebaseapp.com",
        databaseURL: "https://crown-db-efade.firebaseio.com",
        projectId: "crown-db-efade",
        storageBucket: "crown-db-efade.appspot.com",
        messagingSenderId: "643213176294",
        appId: "1:643213176294:web:5be2e9f890e96b648b3a27",
        measurementId: "G-SPPZ5PK2CF"
      
}

firebase.initializeApp(config);

export const auth = firebase.auth() // .auth is a function and we can use it where ever we need
export const firestore= firebase.firestore() //.firestore is a function and we can use it where ever we need

const provider = new firebase.auth.GoogleAuthProvider(); //will give access to .GoogleAuthProvider from auth library
provider.setCustomParameters({prompt: 'select_account'}); // launch google login when ever we use .GoogleAuthProvider for auth and sign
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;