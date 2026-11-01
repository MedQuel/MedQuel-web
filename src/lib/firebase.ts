import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { setPersistence, browserLocalPersistence } from 'firebase/auth';

import { env } from '../config/env';


const app = initializeApp(env.firebase);

export const auth = getAuth(app);
void setPersistence(auth, browserLocalPersistence);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
