import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

import { env } from '../config/env';
import { SITE } from '../config/site';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from './icons/SocialIcons';


const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Features', to: '/#features' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'FAQ', to: '/#faq' },
];

// Social profiles are not live yet: shown greyed-out and not clickable.
// To enable one later, set its `href` (e.g. "https://instagram.com/medquel"); it becomes a normal link automatically.
const socials: {
  icon: typeof InstagramIcon;
  label: string;
  href: string | null;
}[] = [
  { icon: TwitterIcon, label: 'Twitter', href: null },
  { icon: LinkedinIcon, label: 'LinkedIn', href: null },
  { icon: InstagramIcon, label: 'Instagram', href: null },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Refund & Cancellation Policy', to: '/refund-policy' },
  { label: 'Contact Us', to: '/contact' },
];


const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to a real mailing list before launch, or remove this block.
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className='border-t border-white/10 bg-[#0A0A0A] text-white'>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&display=swap');
        .f-display { font-family: 'Archivo Black', sans-serif; }
        .f-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className='py-20'>
        <div className='mx-auto max-w-6xl px-8 lg:px-16'>
          <div className='mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <h3 className='f-display mb-4 text-xl'>
                MED<span className='text-[#C6F135]'>QUEL</span>
              </h3>
              <p className='f-body mb-4 text-sm text-white/50'>
                Revolutionizing medical education through gamified learning
              </p>
              <p className='f-body text-xs text-white/30'>
                Empowering medical aspirants since 2026. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className='f-body mb-4 text-sm font-semibold text-white'>
                Quick Links
              </h4>

              <ul className='space-y-2'>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className='f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='f-body mb-4 text-sm font-semibold text-white'>
                Legal
              </h4>

              <ul className='space-y-2'>
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className='f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='f-body mb-4 text-sm font-semibold text-white'>
                Support
              </h4>

              <ul className='space-y-2'>
                <li>
                  <Link to='/contact' className='f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]'>
                    Help &amp; Contact
                  </Link>
                </li>

                <li>
                  <a
                    href={`mailto:${SITE.supportEmail}`}
                    className='f-body flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#C6F135]'
                  >
                    <Mail className='h-4 w-4' />
                    {SITE.supportEmail}
                  </a>
                </li>

                <li>
                  <Link to='/#faq' className='f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]'>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='mx-auto mb-12 max-w-2xl rounded-xl border border-white/10 bg-[#111] p-6'
          >
            <div className='mb-4 text-center'>
              <h4 className='f-body text-lg font-semibold text-white'>
                Stay Updated
              </h4>
              <p className='f-body mt-1 text-sm text-white/50'>
                Get study tips, contest alerts, and updates directly to your inbox
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className='flex flex-col gap-3 sm:flex-row'
            >
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                aria-label='Email address'
                className='f-body min-w-0 flex-1 rounded-lg border border-white/15 bg-[#1a1a1a] px-4 py-3 text-white placeholder:text-white/30 focus:border-[#C6F135] focus:outline-none'
                required
              />
              <button
                type='submit'
                className='f-body flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#C6F135] px-6 py-3 font-medium text-black transition-colors hover:bg-[#d5fb5a]'
              >
                <Send className='h-4 w-4' />
                Subscribe
              </button>
            </form>
          </motion.div>

          <div className='flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row'>
            <div className='flex items-center gap-4'>
              <span className='f-body mr-2 text-sm text-white/40'>
                Follow Us:
              </span>
              {socials.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111] transition-colors hover:border-[#C6F135]/60'
                  >
                    <Icon className='h-4 w-4 text-white/50 transition-colors group-hover:text-[#C6F135]' />
                  </a>
                ) : (
                  <span
                    key={label}
                    role='img'
                    aria-label={`${label} (coming soon)`}
                    title='Coming soon'
                    className='flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-white/5 bg-[#111] opacity-40'
                  >
                    <Icon className='h-4 w-4 text-white/50' />
                  </span>
                )
              )}
            </div>

            <a
              href={env.playStoreUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black px-6 py-3 text-white transition-colors hover:border-[#C6F135]/60'
            >
              <svg
                className='h-6 w-6'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden
              >
                <path d='M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z' />
              </svg>

              <div className='text-left'>
                <div className='f-body text-xs text-white/50'>Download on</div>
                <div className='f-body text-sm font-semibold'>Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto max-w-6xl px-8 py-6 lg:px-16'>
          <div className='flex flex-col items-center justify-between gap-4 text-sm text-white/30 md:flex-row'>
            <p className='f-body'>&copy; 2026 MedQuel. All rights reserved.</p>
            <p className='f-body'>
              Made with ❤️ for medical aspirants worldwide by the Team GrayCode. |{' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
