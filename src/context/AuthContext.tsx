import { useCallback, type ReactNode } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { signInWithPopup, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { type User, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';

import { AuthContext } from './contextValue';
import { auth, googleProvider } from '../lib/firebase';


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (next) => {
      setUser(next);
      setLoading(false);
    });
  }, []);

  const signInWithEmail = useCallback(
    async (email: string, password: string) => {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    }, []
  );

  const signInWithGoogle = useCallback(async () => {
    await signInWithPopup(auth, googleProvider);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    await sendPasswordResetEmail(auth, email.trim());
  }, []);

  const signOut = useCallback(() => firebaseSignOut(auth), []);

  const value = useMemo(
    () => ({
      user,
      loading,
      signInWithEmail,
      signInWithGoogle,
      resetPassword,
      signOut,
    }), [user, loading, signInWithEmail, signInWithGoogle, resetPassword, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
