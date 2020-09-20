import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDCnjnt9sg24eXLcCn-fCmtcAsDZ06No0I",
  authDomain: "expensetrackerpwa-3e5aa.firebaseapp.com",
  databaseURL: "https://expensetrackerpwa-3e5aa.firebaseio.com",
  projectId: "expensetrackerpwa-3e5aa",
  storageBucket: "expensetrackerpwa-3e5aa.appspot.com",
  messagingSenderId: "967039831289",
  appId: "1:967039831289:web:542991aad97926b69b6628"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default firebase;