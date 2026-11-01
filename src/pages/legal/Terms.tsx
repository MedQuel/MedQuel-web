import { SITE } from '../../config/site';
import LegalPage, { type LegalSection } from './LegalPage';


const sections: LegalSection[] = [
  {
    heading: 'Agreement',
    paragraphs: [
      `These Terms govern your use of the ${SITE.brand} mobile app and website (the "Service"), operated by ${SITE.legalName} ("we", "us"). By creating an account or using the Service you agree to these Terms. If you do not agree, please do not use the Service.`,
    ],
  },
  {
    heading: 'Eligibility and accounts',
    bullets: [
      'You must be 18 or older, or use the Service under the supervision of a parent or legal guardian who agrees to these Terms.',
      'You are responsible for the accuracy of your profile and for keeping your sign-in credentials safe.',
      'One person, one account. Sharing or selling accounts is not allowed.',
    ],
  },
  {
    heading: 'Educational use only',
    paragraphs: [
      `${SITE.brand} provides quizzes, explanations, study plans and contests to help you prepare for medical examinations. The content is for exam preparation and learning. It is not medical advice and must never be used to diagnose, treat or make decisions about real patients. Always verify clinical information against your textbooks, guidelines and faculty.`,
    ],
  },
  {
    heading: 'Premium plans and payments',
    bullets: [
      'Premium is sold as a prepaid plan for a fixed duration (for example 1 month, 3 months or 1 year). Plans do not renew automatically.',
      'Prices are shown in Indian Rupees (INR) at checkout and include applicable taxes unless stated otherwise.',
      'Payments are processed by Razorpay. We do not receive or store your card, UPI or bank credentials.',
      'Premium is activated on your account once the payment is confirmed, usually within seconds. If you buy another plan while premium is active, the new period starts after your current one ends.',
      'Refunds are governed by our Refund and Cancellation Policy.',
    ],
  },
  {
    heading: 'Acceptable use',
    paragraphs: ['You agree not to:'],
    bullets: [
      'cheat in contests or challenges, use bots or automation, or manipulate leaderboards, XP or EP;',
      'copy, scrape, redistribute or resell questions, explanations or other content;',
      'reverse engineer the app or attempt to bypass payment, premium or security controls;',
      'harass other users or post unlawful, abusive or misleading content;',
      'interfere with the normal operation of the Service.',
    ],
  },
  {
    heading: 'Content and intellectual property',
    paragraphs: [
      `All questions, explanations, designs, trademarks and software in the Service belong to ${SITE.legalName} or its licensors. We grant you a limited, personal, non-transferable licence to use them for your own study. You keep ownership of anything you submit, and give us a licence to display it within the Service.`,
    ],
  },
  {
    heading: 'Suspension and termination',
    paragraphs: [
      'We may suspend or terminate accounts that breach these Terms, with premium access ending without refund where the breach is serious (for example cheating or payment abuse). You can stop using the Service at any time, and you can ask us to delete your account by writing to the support address below.',
    ],
  },
  {
    heading: 'Availability and changes',
    paragraphs: [
      'We work hard to keep the Service running but do not promise it will be uninterrupted or error-free. We may add, change or remove features, contests and content. We may update these Terms; continued use after an update means you accept the new version.',
    ],
  },
  {
    heading: 'Disclaimer and limitation of liability',
    paragraphs: [
      'The Service is provided on an "as is" and "as available" basis. We do not guarantee any particular exam result. To the extent permitted by law, our total liability for any claim relating to the Service is limited to the amount you paid us in the 12 months before the claim arose.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      `These Terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at ${SITE.jurisdiction}.`,
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      `${SITE.legalName}, ${SITE.address}. Email: ${SITE.supportEmail}. Phone: ${SITE.supportPhone}.`,
    ],
  },
];


const Terms = () => <LegalPage title='Terms of Service' sections={sections} />;

export default Terms;
