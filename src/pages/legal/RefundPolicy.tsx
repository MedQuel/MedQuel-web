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
    heading: 'When we refund',
    bullets: [
      'Your payment was successful but premium was not activated within 24 hours and we cannot fix it. You will receive a full refund.',
      'You were charged more than once for the same order. The extra amount is refunded in full.',
      'You were charged the wrong amount because of an error on our side. The difference is refunded.',
      'You contact us within 48 hours of purchase and have not used premium features. We will review it and may refund the plan.',
    ],
  },
  {
    heading: 'When we do not refund',
    bullets: [
      'After premium has been activated and used, except as described above or where required by law.',
      'Accounts closed for breaching our Terms (for example cheating or payment abuse).',
      'Change of mind after the first 48 hours, or not using the plan.',
    ],
  },
  {
    heading: 'Failed or pending payments',
    paragraphs: [
      'If money was debited but the payment failed, your bank or UPI app returns it automatically, usually within 5 to 7 business days. If it has not arrived after that, contact your bank with the Razorpay payment id shown in your payment receipt, or write to us and we will help trace it.',
    ],
  },
  {
    heading: 'How to request a refund',
    paragraphs: [
      `Email ${SITE.supportEmail} from your registered email address with your order id (it starts with "order_") and a short reason. We reply within 2 business days. Approved refunds are issued to the original payment method through Razorpay and typically reach you within 5 to 7 business days.`,
      'When a refund is issued, the premium time bought with that payment is removed from your account.',
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
