import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7snMIZ1wDyB1nU9H8f3pNoGHQFRS3-eo",
  authDomain: "crwn-clothing-db-268f2.firebaseapp.com",
  projectId: "crwn-clothing-db-268f2",
  storageBucket: "crwn-clothing-db-268f2.appspot.com",
  messagingSenderId: "950406682868",
  appId: "1:950406682868:web:25652e3dc3c6e160ba26a1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users',userAuth.uid );

    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

}

export const createUserAuthWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);