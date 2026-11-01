import { SITE } from '../../config/site';
import LegalPage, { type LegalSection } from './LegalPage';


const sections: LegalSection[] = [
  {
    heading: 'Who we are',
    paragraphs: [
      `${SITE.legalName} ("we", "us") operates ${SITE.brand}. This policy explains what personal data we collect, why, and the choices you have, in line with the Digital Personal Data Protection Act, 2023 and other applicable Indian law.`,
    ],
  },
  {
    heading: 'Data we collect',
    bullets: [
      'Account data: name, email address, profile photo (if you add one), sign-in method.',
      'Profile data you give us: role (for example MBBS student or postgraduate), year, specialties, target exam, institution.',
      'Learning activity: quiz and contest answers, scores, XP and EP, streaks, badges, study-plan progress, time spent.',
      'Social features: friends, friend requests and challenges you send or receive.',
      'Payment records: plan, amount, order and payment ids, status and dates. Card, UPI and bank details are handled by Razorpay and never reach our servers.',
      'Device data: push-notification tokens, app version and basic technical logs needed to run and secure the Service.',
    ],
  },
  {
    heading: 'How we use your data',
    bullets: [
      'To create your account, run quizzes and contests, calculate rankings and show your progress.',
      'To personalise content and generate AI study plans from your profile and performance.',
      'To process payments, activate premium and provide support.',
      'To send notifications you have allowed (streaks, contests, friends, account and payment updates).',
      'To keep the Service secure, prevent cheating and fraud, and meet legal obligations.',
    ],
  },
  {
    heading: 'Who we share it with',
    paragraphs: [
      'We do not sell your personal data. We share it only with service providers who help us run MedQuel:',
    ],
    bullets: [
      'Google (Firebase Authentication, Firestore, Cloud Run, BigQuery, Cloud Messaging) for hosting, sign-in, storage and notifications.',
      'Google Gemini API, which receives your exam, profile and subject-performance summary to generate study plans.',
      'Razorpay, which processes payments and has its own privacy policy.',
      'Other users, only the limited public profile data needed for leaderboards, friends and challenges (display name, photo, level, streak, EP).',
      'Authorities, where required by law.',
    ],
  },
  {
    heading: 'How long we keep it',
    paragraphs: [
      'We keep your data while your account is active. If you ask us to delete your account we remove your personal data, except records we must keep by law (for example payment and tax records) and anonymised statistics.',
    ],
  },
  {
    heading: 'Security',
    paragraphs: [
      'Data is encrypted in transit, access is restricted by authentication and security rules, and payments are verified server-side. No system is perfectly secure, so please use a strong, unique password.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'You can ask us to access, correct, update or delete your personal data, withdraw consent, or nominate someone to exercise these rights on your behalf. Write to the support address below and we will respond within a reasonable time.',
    ],
  },
  {
    heading: 'Children',
    paragraphs: [
      `${SITE.brand} is intended for medical students and professionals aged 18 and over. If you are under 18, please use the Service only with a parent or guardian's consent. If you believe a child has given us data without consent, contact us and we will delete it.`,
    ],
  },
  {
    heading: 'Cookies and analytics',
    paragraphs: [
      'The website uses essential storage to keep you signed in and may use privacy-respecting analytics to understand usage. You can clear this data in your browser at any time.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We will post updates on this page and change the date above. For significant changes we will also notify you in the app.',
    ],
  },
  {
    heading: 'Grievance officer and contact',
    paragraphs: [
      `Grievance Officer: ${SITE.grievanceOfficer}, ${SITE.legalName}, ${SITE.address}. Email: ${SITE.supportEmail}. Phone: ${SITE.supportPhone}. Hours: ${SITE.supportHours}.`,
    ],
  },
];


const Privacy = () => <LegalPage title='Privacy Policy' sections={sections} />;

export default Privacy;
