import { env } from '../config/env';


export function isAndroid(): boolean {
  return /android/i.test(navigator.userAgent);
}

export function buildAppLink(orderId: string): string {
  const path = `payment-success?order=${encodeURIComponent(orderId)}`;

  if (isAndroid()) {
    const fallback = encodeURIComponent(env.playStoreUrl);
    return `intent://${path}#Intent;scheme=${env.appScheme};package=${env.androidPackage};S.browser_fallback_url=${fallback};end`;
  }

  return `${env.appScheme}://${path}`;
}
