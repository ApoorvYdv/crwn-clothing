import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAZcSYJtEv6as_viBYShGlBfKM4FXoJhs0",
    authDomain: "crwn-db-70047.firebaseapp.com",
    databaseURL: "https://crwn-db-70047.firebaseio.com",
    projectId: "crwn-db-70047",
    storageBucket: "crwn-db-70047.appspot.com",
    messagingSenderId: "877734225762",
    appId: "1:877734225762:web:bad9a1a58489adf74a2e3b",
    measurementId: "G-5ZL9Y89RSZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef; 
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
