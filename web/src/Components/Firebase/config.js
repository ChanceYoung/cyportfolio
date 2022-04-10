// Import the functions you need from the SDKs you need

import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FBKEY,

    authDomain: 'cywd-images.firebaseapp.com',

    projectId: 'cywd-images',

    storageBucket: 'cywd-images.appspot.com',

    messagingSenderId: '606489612504',

    appId: '1:606489612504:web:0a3682cb6655f440e507ad',
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
