import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyDZnNyp2mV6y-xTauXZ5M-0shEaU_QttPc",
  authDomain: "booking-system-covid-19-5ee02.firebaseapp.com",
  databaseURL: "https://booking-system-covid-19-5ee02.firebaseio.com",
  projectId: "booking-system-covid-19-5ee02",
  storageBucket: "booking-system-covid-19-5ee02.appspot.com",
  messagingSenderId: "664123378602",
  appId: "1:664123378602:web:8261459b33ffee90f7f9d3",
  measurementId: "G-QKKX307ZR4"
};
firebase.initializeApp(config);
export const creatUserProfileDocument= async (userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot= await userRef.get();

  if(!snapShot.exists){
    const {firstName,lastName,socialSecurityNumber, email, password,address, postNumber} = userAuth;
    const createAt =new Date();

    try {
      await userRef.set({
        firstName,
        lastName,
        socialSecurityNumber,
        email,
        password,
        address,
        postNumber,
        createAt,
        ...additionalData

      });

    } catch (error) {
      console.log('error creating user ',error.message);

    }


  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const Fire=firebase;
export default firebase;