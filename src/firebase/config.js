import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD36kavDZFS_6XDw401iNrnl3MmxbhFs-w",
  authDomain: "livechat-e0e98.firebaseapp.com",
  projectId: "livechat-e0e98",
  storageBucket: "livechat-e0e98.appspot.com",
  messagingSenderId: "215024722550",
  appId: "1:215024722550:web:5eafb029f5a7d458863557"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
