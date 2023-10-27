import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPbGuBcJlGsA1MYskMCOdFlYFYEDV7Aa8",
  authDomain: "task7-1p-20895.firebaseapp.com",
  projectId: "task7-1p-20895",
  storageBucket: "task7-1p-20895.appspot.com",
  messagingSenderId: "564384696178",
  appId: "1:564384696178:web:94d6820548059ba4987feb",
  measurementId: "G-VWRJ44DCJW"
};

export const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const imageDb = getStorage(firebaseapp);




provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();

export const createuserdocfromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userSnapShots = await getDoc(userDocRef);
  console.log(userSnapShots)
  console.log(userSnapShots.exists())

  if (!userSnapShots.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }
    catch (error) {
      console.log('error in creating', error.message)
    }

  }
  return userDocRef;
}


export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return
  return await createUserWithEmailAndPassword(auth, email, password)
}


export async function signinAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return
  return await signInWithEmailAndPassword(auth, email, password)
}