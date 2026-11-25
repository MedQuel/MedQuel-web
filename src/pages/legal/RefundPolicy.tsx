import { SITE } from '../../config/site';
import LegalPage, { type LegalSection } from './LegalPage';


const sections: LegalSection[] = [
  {
    heading: 'How premium works',
    paragraphs: [
      'MedQuel Premium is a prepaid plan for a fixed period (PRO: 1 month, PRO PLUS: 3 months, MASTER: 1 year). It does not renew automatically, so you will never be charged again unless you choose to buy another plan.',
    ],
  },
  {
    heading: 'Cancellation',
    paragraphs: [
      'Because there is no auto-renewal, there is nothing to cancel. Your premium simply ends on its expiry date and your account continues on the free plan with all your progress intact.',
    ],
  },
  {
    heading: 'Where you bought matters',
    bullets: [
      'Bought in the Android app: the payment is taken and refunded by Google Play.',
      'Bought on our website: the payment is taken and refunded by Razorpay.',
    ],
  },
  {
    heading: 'When we refund',
    bullets: [
      'Your payment was successful but premium was not activated within 24 hours and we cannot fix it. You will receive a full refund.',
      'You were charged more than once for the same plan. The extra amount is refunded in full.',
      'You were charged the wrong amount because of an error on our side. The difference is refunded.',
      'Other requests are reviewed case by case, and we may refund where the law requires it.',
    ],
  },
  {
    heading: 'When we do not refund',
    bullets: [
      'After premium has been activated and used, except as described above or where required by law.',
      'Accounts closed for breaching our Terms (for example cheating or payment abuse).',
      'Change of mind or not using the plan.',
    ],
  },
  {
    heading: 'Premium bought in the app (Google Play)',
    paragraphs: [
      'If you were charged but premium is not active, open the Premium screen and tap Restore purchases first. If it still does not appear, contact us with your Google Play order number (it starts with "GPA.").',
      'Google Play also lets you request a refund from your order history on Google Play, subject to Google Play\'s own policy. Approved refunds go back to your original Google Play payment method, and the premium time bought with that order is removed from your account automatically.',
    ],
  },
  {
    heading: 'Premium bought on our website (Razorpay)',
    paragraphs: [
      'If money was debited but the payment failed, your bank or UPI app returns it automatically, usually within 5 to 7 business days. If it has not arrived after that, contact your bank with the Razorpay payment id from your receipt, or write to us and we will help trace it.',
      'Approved refunds are issued to the original payment method through Razorpay and typically reach you within 5 to 7 business days. When a refund is issued, the premium time bought with that payment is removed from your account.',
    ],
  },
  {
    heading: 'How to request a refund',
    paragraphs: [
      `Email ${SITE.supportEmail} from your registered email address with your order number (a Google Play order number starting with "GPA." or a website order id starting with "order_") and a short reason. We reply within 2 business days.`,
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      `${SITE.legalName}, ${SITE.address}. Email: ${SITE.supportEmail}. Phone: ${SITE.supportPhone}. Hours: ${SITE.supportHours}.`,
    ],
  },
];


const RefundPolicy = () => (
  <LegalPage title='Refund and Cancellation Policy' sections={sections} />
);

export default RefundPolicy;
