// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FBKEY,

    authDomain: 'cywd-images.firebaseapp.com',

    projectId: 'cywd-images',

    storageBucket: 'cywd-images.appspot.com',

    messagingSenderId: '606489612504',

    appId: '1:606489612504:web:0a3682cb6655f440e507ad',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const projectStorage = getStorage(app)
export const projectFirestore = getFirestore(app)
export const timestamp = serverTimestamp
