import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJ_ID,
  storageBucket: process.env.STOR_BUCKET,
  messagingSenderId: process.env.MSG_ID,
  appId: process.env.APP_ID,
};

firebase.initializeApp(config);
export const auth = firebase.auth();
const fb = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export default fb;
