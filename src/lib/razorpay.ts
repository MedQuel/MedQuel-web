export interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
export interface RazorpayFailureResponse {
  error: { description?: string; reason?: string };
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description: string;
  prefill?: { name?: string; email?: string };
  theme?: { color?: string };
  modal?: { ondismiss?: () => void; confirm_close?: boolean };
  handler: (response: RazorpaySuccessResponse) => void;
}


export interface RazorpayInstance {
  open: () => void;
  on: (
    event: 'payment.failed',
    cb: (response: RazorpayFailureResponse) => void
  ) => void;
}
type RazorpayConstructor = new (options: RazorpayOptions) => RazorpayInstance;

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

const SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js';
let loading: Promise<RazorpayConstructor> | null = null;


export function loadRazorpay(): Promise<RazorpayConstructor> {
  if (window.Razorpay) return Promise.resolve(window.Razorpay);
  if (loading) return loading;

  loading = new Promise<RazorpayConstructor>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => window.Razorpay
      ? resolve(window.Razorpay)
      : reject(new Error('Razorpay failed to initialise.'));
    script.onerror = () => {
      loading = null;
      reject(
        new Error('Could not load the payment window. Check your connection and try again.')
      );
    };
    document.body.appendChild(script);
  });

  return loading;
}
