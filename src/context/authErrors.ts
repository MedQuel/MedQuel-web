export function describeAuthError(err: unknown): string | null {
  const code = (err as { code?: string }).code ?? '';

  if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request'  ) {
    console.error('[auth] sign-in failed:', code || err);
  }

  switch (code) {
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return null;
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
    case 'auth/invalid-email':
      return 'Incorrect email or password.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please wait a few minutes or reset your password.';
    case 'auth/popup-blocked':
      return 'Your browser blocked the Google sign-in window. Allow pop-ups for this site and try again.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection and try again.';
    case 'auth/invalid-api-key':
    case 'auth/api-key-not-valid.-please-pass-a-valid-api-key.':
      return 'Sign-in is not configured correctly (invalid Firebase API key). Check the VITE_FIREBASE_* values.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorised for sign-in. Add it in Firebase Authentication, Settings, Authorized domains.';
    case 'auth/operation-not-allowed':
      return 'This sign-in method is not enabled in Firebase Authentication.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Contact support.';
    case 'auth/account-exists-with-different-credential':
      return 'This email is registered with another sign-in method. Try the other option.';
    default:
      return 'Something went wrong while signing in. Please try again.';
  }
}
