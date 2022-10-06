import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDC5o9oSNsp6qSWW0kI4FYOjFUs_0irsCw',
  authDomain: 'deujob-e0f4b.firebaseapp.com',
  projectId: 'deujob-e0f4b',
  storageBucket: 'deujob-e0f4b.appspot.com',
  messagingSenderId: '362750161430',
  appId: '1:362750161430:web:581ca7738ebb13adc4fb37',
};

// export const firebaseImpl = firebase.initializeApp(config);
// export const firebaseDatabase = firebase.database();
export const app = initializeApp(config);
export const db = getFirestore(app);
