import { useState } from 'react';

import { SITE } from '../config/site';
import { useAuth } from '../context/useAuth';
import { deleteMyAccount } from '../lib/api';
import PageShell from '../components/PageShell';
import AuthModal from '../components/AuthModal';


const DeleteAccount = () => {
  const { user, loading, signOut } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (!window.confirm('Delete your MedQuel account now? This is immediate and cannot be undone.')) {
      return;
    }

    setBusy(true);
    setError(null);
    try {
      await deleteMyAccount();
      setDone(true);
      await signOut().catch(() => undefined);
    } catch (err) {
      setError(err instanceof Error
        ? err.message
        : 'Could not delete your account. Please try again.'
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <PageShell>
      <div className='mx-auto max-w-2xl px-6 pb-24'>
        <h1 className='f-display text-3xl'>
          DELETE YOUR <span className='text-[#C6F135]'>MEDQUEL</span> ACCOUNT
        </h1>

        <p className='f-body mt-4 text-white/60'>
          Use this page to permanently delete your MedQuel account and personal data.
          The deletion happens right away.
        </p>

        <h2 className='f-body mt-8 text-lg font-semibold'>What gets deleted</h2>
        <ul className='f-body mt-2 list-disc space-y-1 pl-5 text-white/60'>
          <li>Your profile, email address and photo</li>
          <li>Your quiz history, scores, XP, EP, streaks and badges</li>
          <li>Your friends, challenges, study plan and notifications</li>
        </ul>

        <h2 className='f-body mt-6 text-lg font-semibold'>What we keep</h2>
        <p className='f-body mt-2 text-white/60'>
          Payment and tax records, which we must keep by law.
          Any active premium ends with the account and is not refunded.
        </p>

        <h2 className='f-body mt-6 text-lg font-semibold'>
          Delete your account
        </h2>
        <p className='f-body mt-2 text-white/60'>
          In the app: Settings, then Delete account.
          Or sign in below with the account you want to delete.
        </p>

        {loading ? null : done ? (
          <p className='f-body mt-6 rounded-md border border-[#C6F135]/40 bg-[#C6F135]/10 px-4 py-3 text-[#C6F135]'>
            Your account and data have been deleted.
          </p>
        ) : user ? (
          <div className='mt-6'>
            <p className='f-body text-sm text-white/50'>
              Signed in as <span className='text-white'>{user.email}</span>
            </p>
            <button
              onClick={() => void submit()}
              disabled={busy}
              className='f-display mt-3 rounded-md bg-red-600 px-6 py-3 text-sm tracking-wide text-white transition-colors hover:bg-red-500 disabled:opacity-60'
            >
              {busy ? 'DELETING…' : 'DELETE MY ACCOUNT'}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setAuthOpen(true)}
            className='f-display mt-6 rounded-md bg-[#C6F135] px-6 py-3 text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a]'
          >
            SIGN IN TO CONTINUE
          </button>
        )}

        {error && (
          <p
            role='alert'
            className='f-body mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300'
          >
            {error}
          </p>
        )}

        <p className='f-body mt-8 text-sm text-white/40'>
          Can't sign in? Email {SITE.supportEmail} from your registered address with the subject "Delete my MedQuel account".
        </p>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </PageShell>
  );
};

export default DeleteAccount;
