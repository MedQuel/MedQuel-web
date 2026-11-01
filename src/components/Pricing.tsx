import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Zap } from 'lucide-react';

import PlanCard from './PlanCard';
import { env } from '../config/env';
import { usePlans } from '../hooks/usePlans';


const FREE_FEATURES = [
  'Access to basic quizzes',
  'Play 5 challenges per week',
  'Basic analytics dashboard',
  'Profile & achievements',
  'Leaderboard access',
];

const Pricing = () => {
  const { plans, loading, error, retry } = usePlans();

  return (
    <section id='pricing' className='relative overflow-hidden bg-[#0A0A0A] py-24 text-white'>
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
            START YOUR GAMIFIED
            <br />
            <span className='text-[#C6F135]'>MEDICAL QUIZ JOURNEY</span> TODAY
          </h2>
          <p className='f-body mx-auto mt-4 max-w-2xl text-lg text-white/50'>
            Download for free and start competing in minutes. Go premium whenever you’re ready.
          </p>
        </motion.div>

        <div className='mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex flex-col rounded-xl border border-white/10 bg-[#111] p-6'
          >
            <div className='mb-6 mt-2 flex items-center gap-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B7FE8]/15'>
                <Zap className='h-6 w-6 text-[#8B7FE8]' />
              </div>

              <div>
                <h3 className='f-body text-xl font-semibold text-white'>
                  Free
                </h3>
                <p className='f-body text-sm text-white/50'>
                  Get started today
                </p>
              </div>
            </div>

            <div className='mb-1'>
              <span className='f-display text-3xl'>₹0</span>
              <span className='f-body text-sm text-white/50'> /forever</span>
            </div>
            <p className='f-body mb-6 min-h-[20px] text-xs text-white/40'>
              No card required
            </p>

            <ul className='mb-6 space-y-3'>
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className='flex items-start gap-3'>
                  <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-[#8B7FE8]' />
                  <span className='f-body text-sm text-white/60'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={env.playStoreUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='f-body mt-auto block w-full rounded-md border border-white/20 py-3 text-center text-sm font-medium transition-colors hover:border-white/40'
            >
              Download Free
            </a>
          </motion.div>

          {loading &&
            [0, 1, 2].map((i) => (
              <div key={i} className='h-[420px] animate-pulse rounded-xl border border-white/10 bg-[#111]' />
            ))}

          {!loading && error && (
            <div className='rounded-xl border border-white/10 bg-[#111] p-6 text-center md:col-span-2 lg:col-span-3'>
              <p className='f-body text-white/60'>
                Premium plans couldn’t be loaded right now.
              </p>

              <button
                onClick={retry}
                className='f-body mt-4 rounded-md border border-white/20 px-6 py-2.5 text-sm font-medium transition-colors hover:border-[#C6F135]'
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error &&
            plans.map((plan) => {
              const highlighted = plan.badge === 'Most Popular';
              return (
                <PlanCard
                  key={plan.planId}
                  plan={plan}
                  allPlans={plans}
                  highlighted={highlighted}
                  featureLimit={6}
                  action={
                    <Link
                      to={`/premium?plan=${plan.planId}`}
                      className={`f-display block w-full rounded-md py-3 text-center text-sm tracking-wide transition-colors ${
                        highlighted ? 'bg-[#C6F135] text-black hover:bg-[#d5fb5a]' : 'border border-white/20 text-white hover:border-[#C6F135]'
                      }`}
                    >
                      GET {plan.name}
                    </Link>
                  }
                />
              );
            })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <div className='mx-auto max-w-3xl rounded-xl border border-white/10 bg-[#111] p-8'>
            <h3 className='f-display text-2xl sm:text-3xl'>
              READY TO CHALLENGE YOURSELF?
            </h3>
            <p className='f-body mt-4 text-white/50'>
              Download MedQuel now and join thousands of medical quiz enthusiasts!
            </p>

            <div className='mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row'>
              <a
                href={env.playStoreUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 rounded-lg border border-white/20 bg-black px-8 py-4 text-white transition-colors hover:border-[#C6F135]/60'
              >
                <svg
                  className='h-8 w-8'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden
                >
                  <path d='M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z' />
                </svg>

                <div className='text-left'>
                  <div className='f-body text-xs text-white/50'>GET IT ON</div>
                  <div className='f-body text-lg font-semibold'>Google Play</div>
                </div>
              </a>

              <div className='flex flex-col items-center gap-2'>
                <div className='h-32 w-32 rounded-lg bg-white p-2'>
                  <div className='flex h-full w-full items-center justify-center rounded bg-gray-200 text-xs text-gray-400'>
                    QR Code
                  </div>
                </div>
                <p className='f-body text-sm text-white/50'>Scan to download</p>
              </div>
            </div>

            <div className='mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/50'>
              {[
                'Free to download',
                'No credit card required',
                'Start quizzing in 2 minutes',
              ].map((item) => (
                <div key={item} className='flex items-center gap-2'>
                  <Check className='h-4 w-4 text-[#C6F135]' />
                  <span className='f-body'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
