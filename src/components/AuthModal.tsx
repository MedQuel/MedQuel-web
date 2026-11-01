import { Loader2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState, type FormEvent } from 'react';

import { useAuth } from '../context/useAuth';
import { describeAuthError } from '../context/authErrors';


interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const AuthModal = ({ open, onClose, onSuccess }: AuthModalProps) => {
  const { signInWithEmail, signInWithGoogle, resetPassword } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setError(null);
    setInfo(null);
    emailRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    setInfo(null);

    try {
      await action();
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(describeAuthError(err));
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void run(() => signInWithEmail(email, password));
  };

  const handleForgot = async () => {
    if (!email.trim()) {
      setError('Enter your email above first, then tap "Forgot password".');
      return;
    }
    setBusy(true);
    setError(null);

    try {
      await resetPassword(email);
      setInfo('If an account exists for this email, a reset link is on its way.');
    } catch (err) {
      setError(describeAuthError(err));
    } finally {
      setBusy(false);
    }
  };


  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm'
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            role='dialog'
            aria-modal='true'
            aria-labelledby='auth-title'
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className='relative w-full max-w-md rounded-xl border border-white/10 bg-[#111] p-6 sm:p-8'
          >
            <button
              onClick={onClose}
              aria-label='Close'
              className='absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white'
            >
              <X className='h-5 w-5' />
            </button>

            <h2 id='auth-title' className='f-display text-2xl text-white'>
              SIGN IN TO MEDQUEL
            </h2>
            <p className='f-body mt-2 text-sm text-white/50'>
              Use the same account you use in the MedQuel app, so your premium shows up there instantly.
            </p>

            <button
              type='button'
              disabled={busy}
              onClick={() => void run(signInWithGoogle)}
              className='f-body mt-6 flex w-full items-center justify-center gap-3 rounded-md border border-white/20 bg-white py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 disabled:opacity-60'
            >
              <svg className='h-5 w-5' viewBox='0 0 48 48' aria-hidden>
                <path fill='#EA4335' d='M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.9 2.4 30.4 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z' />
                <path fill='#4285F4' d='M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17.1z' />
                <path fill='#FBBC05' d='M10.5 28.7a14.5 14.5 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1z' />
                <path fill='#34A853' d='M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.9 2.3-8.5 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z' />
              </svg>
              Continue with Google
            </button>

            <div className='my-5 flex items-center gap-3 text-xs text-white/30'>
              <span className='h-px flex-1 bg-white/10' /> OR{' '}
              <span className='h-px flex-1 bg-white/10' />
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='auth-email' className='f-body mb-1.5 block text-xs font-medium text-white/60'>
                  Email
                </label>
                <input
                  id='auth-email'
                  ref={emailRef}
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='f-body w-full rounded-md border border-white/15 bg-[#0A0A0A] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C6F135]'
                />
              </div>

              <div>
                <label htmlFor='auth-password' className='f-body mb-1.5 block text-xs font-medium text-white/60'>
                  Password
                </label>
                <input
                  id='auth-password'
                  type='password'
                  autoComplete='current-password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='f-body w-full rounded-md border border-white/15 bg-[#0A0A0A] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C6F135]'
                />
              </div>

              {error && (
                <p role='alert' className='f-body text-sm text-red-400'>
                  {error}
                </p>
              )}
              {info && (
                <p role='status' className='f-body text-sm text-[#C6F135]'>
                  {info}
                </p>
              )}

              <button
                type='submit'
                disabled={busy}
                className='f-display flex w-full items-center justify-center gap-2 rounded-md bg-[#C6F135] py-3 text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a] disabled:opacity-60'
              >
                {busy && <Loader2 className='h-4 w-4 animate-spin' />}
                SIGN IN
              </button>

              <button
                type='button'
                onClick={() => void handleForgot()}
                disabled={busy}
                className='f-body block w-full text-center text-sm text-white/50 transition-colors hover:text-[#C6F135]'
              >
                Forgot password?
              </button>
            </form>

            <p className='f-body mt-6 text-center text-xs text-white/40'>
              New to MedQuel? Create your account in the app first, then come back here.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
