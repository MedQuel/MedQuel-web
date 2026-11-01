import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Clock, Loader2, XCircle } from 'lucide-react';

import { env } from '../config/env';
import { SITE } from '../config/site';
import { formatDate } from '../lib/format';
import { useAuth } from '../context/useAuth';
import PageShell from '../components/PageShell';
import AuthModal from '../components/AuthModal';
import { buildAppLink, isAndroid } from '../lib/deepLink';
import { fetchPaymentStatus, type PaymentStatus } from '../lib/api';


type Phase = 'confirming' | 'success' | 'delayed' | 'failed';

const POLL_INTERVAL_MS = 2000;
const POLL_TIMEOUT_MS = 60_000;
const AUTO_OPEN_DELAY_MS = 1800;

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const orderId = params.get('order') ?? '';
  const { user, loading: authLoading } = useAuth();

  const [phase, setPhase] = useState<Phase>('confirming');
  const [status, setStatus] = useState<PaymentStatus | null>(null);
  const autoOpened = useRef(false);

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      meta.remove();
    };
  }, []);

  useEffect(() => {
    if (!user || !orderId) return;

    let cancelled = false;
    const startedAt = Date.now();

    const poll = async () => {
      try {
        const result = await fetchPaymentStatus(orderId);
        if (cancelled) return;
        setStatus(result);

        if (result.status === 'captured' && result.isPremium) {
          setPhase('success');
          return;
        }
        if (result.status === 'failed' || result.status === 'refunded') {
          setPhase('failed');
          return;
        }
      } catch {
        // transient errors: keep polling until the timeout
      }

      if (Date.now()-startedAt > POLL_TIMEOUT_MS) {
        if (!cancelled) setPhase('delayed');
        return;
      }

      setTimeout(() => {
        if (!cancelled) void poll();
      }, POLL_INTERVAL_MS);
    };

    void poll();
    return () => {
      cancelled = true;
    };
  }, [user, orderId]);

  const appLink = orderId ? buildAppLink(orderId) : env.playStoreUrl;
  const android = isAndroid();

  useEffect(() => {
    if (phase !== 'success' || !android || autoOpened.current) return;
    autoOpened.current = true;

    const timer = setTimeout(() => {
      window.location.href = appLink;
    }, AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, [phase, android, appLink]);

  if (!orderId) {
    return (
      <PageShell>
        <div className='mx-auto max-w-md px-6 pb-24 text-center'>
          <h1 className='f-display text-2xl'>NOTHING TO SHOW</h1>
          <p className='f-body mt-3 text-white/50'>
            This page is shown after a payment.
          </p>

          <Link
            to='/premium'
            className='f-body mt-6 inline-block text-[#C6F135] underline underline-offset-4'
          >
            View plans
          </Link>
        </div>
      </PageShell>
    );
  }


  return (
    <PageShell>
      <div className='mx-auto max-w-lg px-6 pb-24 text-center'>
        {authLoading ? (
          <Loader2 className='mx-auto h-10 w-10 animate-spin text-[#C6F135]' />
        ) : !user ? (
          <>
            <h1 className='f-display text-2xl'>SIGN IN TO SEE YOUR PAYMENT</h1>
            <p className='f-body mt-3 text-white/50'>
              Sign in with the account you paid with.
            </p>
            <AuthModal open onClose={() => undefined} />
          </>
        ) : phase === 'confirming' ? (
          <>
            <Loader2 className='mx-auto h-12 w-12 animate-spin text-[#C6F135]' />
            <h1 className='f-display mt-6 text-2xl'>
              CONFIRMING YOUR PAYMENT…
            </h1>
            <p className='f-body mt-3 text-white/50'>
              This usually takes a few seconds. Please don’t close this page.
            </p>
          </>
        ) : phase === 'success' ? (
          <>
            <CheckCircle2 className='mx-auto h-16 w-16 text-[#C6F135]' />
            <h1 className='f-display mt-6 text-3xl'>
              YOU’RE <span className='text-[#C6F135]'>PREMIUM</span>
            </h1>

            {status?.premiumExpiresAt && (
              <p className='f-body mt-3 text-white/60'>
                Active until{' '}
                <strong className='text-white'>
                  {formatDate(status.premiumExpiresAt)}
                </strong>
              </p>
            )}

            <p className='f-body mt-2 text-sm text-white/40'>Order {orderId}</p>
            <a
              href={appLink}
              className='f-display mt-8 inline-block w-full rounded-md bg-[#C6F135] py-4 text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a]'
            >
              {android ? 'OPEN MEDQUEL APP' : 'OPEN MEDQUEL'}
            </a>
            <p className='f-body mt-4 text-sm text-white/40'>
              {android
                ? 'Opening the app automatically… If nothing happens, tap the button above.'
                : 'Open MedQuel on your phone. Your premium is already active on your account.'}
            </p>
          </>
        ) : phase === 'delayed' ? (
          <>
            <Clock className='mx-auto h-16 w-16 text-amber-400' />
            <h1 className='f-display mt-6 text-2xl'>
              PAYMENT RECEIVED, ACTIVATION IS TAKING LONGER
            </h1>
            <p className='f-body mt-3 text-white/60'>
              Your money is safe. Premium will switch on automatically and we’ll
              send you a notification. If it hasn’t within 30 minutes, contact{' '}
              <span className='text-white'>{SITE.supportEmail}</span> with your
              order id.
            </p>

            <p className='f-body mt-2 text-sm text-white/40'>Order {orderId}</p>
            <Link
              to='/premium'
              className='f-body mt-6 inline-block text-[#C6F135] underline underline-offset-4'
            >
              Back to plans
            </Link>
          </>
        ) : (
          <>
            <XCircle className='mx-auto h-16 w-16 text-red-400' />
            <h1 className='f-display mt-6 text-2xl'>PAYMENT NOT COMPLETED</h1>
            <p className='f-body mt-3 text-white/60'>
              This payment didn’t go through or was refunded, so premium wasn’t
              activated. If money was debited, it is returned automatically by
              your bank in 5–7 business days.
            </p>

            <p className='f-body mt-2 text-sm text-white/40'>Order {orderId}</p>
            <Link
              to='/premium'
              className='f-display mt-8 inline-block rounded-md bg-[#C6F135] px-8 py-3 text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a]'
            >
              TRY AGAIN
            </Link>
          </>
        )}
      </div>
    </PageShell>
  );
};

export default PaymentSuccess;
