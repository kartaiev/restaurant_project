import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBOcXN9n36Qq8f2l-tpMufMLG8J_7b_fVc',
  authDomain: 'epam-restaurant-project.firebaseapp.com',
  databaseURL: 'https://epam-restaurant-project.firebaseio.com',
  projectId: 'epam-restaurant-project',
  storageBucket: 'epam-restaurant-project.appspot.com',
  messagingSenderId: '119446644156',
  appId: '1:119446644156:web:1214bb4281f96b76d5f7b9'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
const fb = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export default fb;
