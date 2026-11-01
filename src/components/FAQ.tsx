import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';


const faqs = [
  {
    question: 'What is MedQuel?',
    answer: 'MedQuel is a gamified medical learning quiz platform designed specifically for medical aspirants. It transforms medical education into exciting quiz battles, competitive contests, social networking, and advanced analytics to make learning medical concepts fun, engaging, and effective through play.',
  },
  {
    question: 'Is MedQuel free to use?',
    answer: 'Yes! MedQuel offers a robust free plan that includes access to basic quizzes, limited challenges, weekly contests, and basic analytics. We also offer a Premium plan with unlimited quiz attempts, advanced analytics, exclusive contests, and an ad-free experience.',
  },
  {
    question: 'Which exams does MedQuel cover?',
    answer: 'MedQuel covers all major medical entrance exams including NEET, MBBS, AIIMS, USMLE, and various state medical entrance examinations. Our content is aligned with the complete MBBS curriculum covering 20+ subjects.',
  },
  {
    question: 'How does the contest system work?',
    answer: 'We offer three types of contests: Multiple Criterion Contests (mixed subjects), Subject-Wise Contests (focused on specific topics), and Random Challenge Contests (quick time-based daily challenges). Join contests, compete with thousands of aspirants!',
  },
  {
    question: 'Can I track my progress?',
    answer: 'Absolutely! MedQuel provides detailed analytics including quiz attempt history, score trends over time, subject-wise performance breakdown, accuracy rates, time management analysis, and personalized improvement suggestions with interactive charts and graphs.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security very seriously. All user data is encrypted and stored securely. We comply with industry-standard security practices and privacy regulations. Your personal information is never shared with third parties without your consent.',
  },
  // {
  //   question: 'How do I join the community?',
  //   answer: 'Once you sign up and create your profile, you automatically get access to our social learning network. You can join subject-specific discussion rooms, create or join study groups (up to 50 members), direct message fellow aspirants, and participate in community Q&A.',
  // },
  {
    question: 'What subjects are covered?',
    answer: 'We cover the complete MBBS curriculum including Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Community Medicine, Forensic Medicine, and 15+ more specializations.',
  },
  {
    question: 'Can I use it offline?',
    answer: 'Some features can be accessed offline. However, contests, leaderboards, analytics, and community features require an internet connection for real-time updates and synchronization.',
  },
  {
    question: 'How do I download the app?',
    answer: 'MedQuel is available on Google Play Store for Android devices. Simply search for "MedQuel" in the Play Store or click the download button on this page. iOS version is coming soon!',
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='relative overflow-hidden bg-[#0A0A0A] py-24 text-white'>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&display=swap');
        .f-display { font-family: 'Archivo Black', sans-serif; }
        .f-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-[0.05]'
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className='relative z-10 mx-auto max-w-6xl px-8 lg:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='f-display text-3xl leading-tight sm:text-4xl lg:text-5xl'>
            FREQUENTLY ASKED <span className='text-[#C6F135]'>QUESTIONS</span>
          </h2>
          <p className='f-body mx-auto mt-4 max-w-2xl text-lg text-white/50'>
            Everything you need to know about MedQuel
          </p>
        </motion.div>

        <div className='mx-auto max-w-4xl space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className='cursor-pointer rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-white/25'
              onClick={() => toggleFAQ(index)}
            >
              <div className='flex items-start justify-between gap-4'>
                <h3 className='f-body flex-1 text-base font-semibold text-white'>
                  {faq.question}
                </h3>

                <button className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C6F135]/15 transition-colors hover:bg-[#C6F135]/25'>
                  {openIndex === index ? (
                    <Minus className='h-5 w-5 text-[#C6F135]' />
                  ) : (
                    <Plus className='h-5 w-5 text-[#C6F135]' />
                  )}
                </button>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden'
              >
                <p className='f-body mt-4 text-sm leading-relaxed text-white/50'>
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-12 text-center'
        >
          <p className='f-body mb-4 text-white/50'>Still have questions?</p>
          <Link
            to='/contact'
            className='f-body font-semibold text-[#C6F135] transition-colors hover:text-[#d5fb5a]'
          >
            Contact our support team →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
