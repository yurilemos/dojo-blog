import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7rbEaNyZ2kRQxR6IUn3HqaYOQk0LfgYY",
    authDomain: "udemy-vue-firebase-sites-2c80c.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-2c80c",
    storageBucket: "udemy-vue-firebase-sites-2c80c.appspot.com",
    messagingSenderId: "899593597133",
    appId: "1:899593597133:web:f6025c6b9326b022ba7984"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }