import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCo_2thcgZUK__LF0TRdW7o_IgubLjh53A",
    authDomain: "booking-system-covid-19.firebaseapp.com",
    databaseURL: "https://booking-system-covid-19.firebaseio.com",
    projectId: "booking-system-covid-19",
    storageBucket: "booking-system-covid-19.appspot.com",
    messagingSenderId: "171640063831",
    appId: "1:171640063831:web:005c7296495f7318686012",
    measurementId: "G-0BYKG1GYN4"
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
export default firebase;