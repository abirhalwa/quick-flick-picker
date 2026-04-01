import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyButImyQ5c1OHK6YFts-UxHPZyODoakwBE",
  authDomain: "quick-flick-picker-3075d.firebaseapp.com",
  databaseURL: "https://quick-flick-picker-3075d-default-rtdb.firebaseio.com",
  projectId: "quick-flick-picker-3075d",
  storageBucket: "quick-flick-picker-3075d.firebasestorage.app",
  messagingSenderId: "754356416254",
  appId: "1:754356416254:web:4333b0be38afe56245bfaf"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;







