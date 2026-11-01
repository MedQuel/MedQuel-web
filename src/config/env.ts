function read(key: string, fallback = '', required = false): string {
  const value = (import.meta.env as Record<string, string | undefined>)[key];
  if (!value) {
    if (required) console.error(`[env] Missing ${key}. Create .env.local from .env.example and restart the dev server.`);
    return fallback;
  }

  return value;
}

export const env = {
  appUrl: read('VITE_APP_URL', 'https://www.medquel.com'),
  playStoreUrl: read('VITE_PLAY_STORE_URL', 'https://play.google.com/store/apps/details?id=com.medquel.app'),
  appScheme: read('VITE_APP_SCHEME', 'medquel'),
  androidPackage: read('VITE_ANDROID_PACKAGE', 'com.medquel.app'),
  apiUrl: read('VITE_API_URL', '', true),

  firebase: {
    apiKey: read('VITE_FIREBASE_API_KEY', '', true),
    authDomain: read('VITE_FIREBASE_AUTH_DOMAIN', '', true),
    projectId: read('VITE_FIREBASE_PROJECT_ID', '', true),
    storageBucket: read('VITE_FIREBASE_STORAGE_BUCKET', '', true),
    messagingSenderId: read('VITE_FIREBASE_MESSAGING_SENDER_ID', '', true),
    appId: read('VITE_FIREBASE_APP_ID', '', true),
  },
};
