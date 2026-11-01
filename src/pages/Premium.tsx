import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Crown, Loader2, LogOut, ShieldCheck, Smartphone } from 'lucide-react';

import PlanCard from '../components/PlanCard';
import PageShell from '../components/PageShell';
import AuthModal from '../components/AuthModal';

import { env } from '../config/env';
import { formatDate } from '../lib/format';
import { useAuth } from '../context/useAuth';
import { usePlans } from '../hooks/usePlans';
import { loadRazorpay } from '../lib/razorpay';
import { verifyPayment, initiatePayment } from '../lib/api';
import { type PremiumStatus, fetchPremiumStatus, ApiError } from '../lib/api';


const Premium = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, loading: authLoading, signOut } = useAuth();
  const { plans, loading: plansLoading, error: plansError, retry } = usePlans();

  const preselected = searchParams.get('plan');
  const [authOpen, setAuthOpen] = useState(false);
  const [pendingPlanId, setPendingPlanId] = useState<string | null>(null);
  const [busyPlanId, setBusyPlanId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);
  const [premiumStatus, setPremiumStatus] = useState<PremiumStatus | null>(null);
  const checkoutRunning = useRef(false);

  useEffect(() => {
    if (!user) {
      setPremiumStatus(null);
      setNeedsOnboarding(false);
      return;
    }

    let cancelled = false;
    fetchPremiumStatus()
      .then((status) => {
        if (!cancelled) {
          setPremiumStatus(status);
          setNeedsOnboarding(false);
        }
      })
      .catch((err: ApiError) => {
        if (!cancelled && err.code === 'NOT_ONBOARDED') {
          setNeedsOnboarding(true);
          setPremiumStatus(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  const startCheckout = useCallback(
    async (planId: string) => {
      if (checkoutRunning.current) return;
      checkoutRunning.current = true;
      setBusyPlanId(planId);
      setError(null);

      try {
        const order = await initiatePayment(planId);
        const Razorpay = await loadRazorpay();

        const checkout = new Razorpay({
          key: order.keyId,
          amount: order.amount,
          currency: order.currency,
          order_id: order.orderId,
          name: 'MedQuel',
          description: `${order.planName} plan`,
          prefill: {
            name: order.prefillName ?? undefined,
            email: order.prefillEmail ?? undefined,
          },
          theme: { color: '#C6F135' },
          modal: {
            confirm_close: true,
            ondismiss: () => {
              checkoutRunning.current = false;
              setBusyPlanId(null);
            },
          },
          handler: (response) => {
            void verifyPayment({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            })
              .catch((err) =>
                console.warn('[checkout] verify failed, relying on webhook:', err)
              )
              .finally(() => {
                checkoutRunning.current = false;
                navigate(`/payment/success?order=${encodeURIComponent(order.orderId)}`, { replace: true });
              });
          },
        });

        checkout.on('payment.failed', (response) => {
          setError(response.error.description ?? 'The payment failed. You have not been charged. Please try again.');
        });
        checkout.open();
      } catch (err) {
        checkoutRunning.current = false;
        setBusyPlanId(null);

        if (err instanceof ApiError && err.code === 'NOT_ONBOARDED') {
          setNeedsOnboarding(true);
        } else if (err instanceof ApiError && err.code === 'RATE_LIMITED') {
          setError('Too many attempts. Please wait a minute and try again.');
        } else {
          setError(err instanceof Error ? err.message : 'Could not start the payment. Please try again.');
        }
      }
    }, [navigate]
  );

  useEffect(() => {
    if (user && pendingPlanId && !needsOnboarding) {
      const planId = pendingPlanId;
      setPendingPlanId(null);
      setAuthOpen(false);
      void startCheckout(planId);
    }
  }, [user, pendingPlanId, needsOnboarding, startCheckout]);

  const handleSelect = (planId: string) => {
    setError(null);
    if (!user) {
      setPendingPlanId(planId);
      setAuthOpen(true);
      return;
    }

    void startCheckout(planId);
  };


  return (
    <PageShell>
      <section className='relative overflow-hidden pb-24'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 opacity-[0.05]'
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className='relative z-10 mx-auto max-w-6xl px-8 lg:px-16'>
          <div className='mb-10 text-center'>
            <h1 className='f-display text-3xl leading-tight sm:text-4xl lg:text-5xl'>
              GO <span className='text-[#C6F135]'>PREMIUM</span>
            </h1>
            <p className='f-body mx-auto mt-4 max-w-2xl text-lg text-white/50'>
              Pay securely here and your premium unlocks in the MedQuel app within seconds.
            </p>
          </div>

          <div className='mx-auto mb-10 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50'>
            {user ? (
              <>
                <span className='f-body'>
                  Signed in as <span className='text-white'>{user.email}</span>
                </span>
                <button
                  onClick={() => void signOut()}
                  className='f-body inline-flex items-center gap-1.5 text-white/50 transition-colors hover:text-[#C6F135]'
                >
                  <LogOut className='h-4 w-4' /> Sign out
                </button>
              </>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className='f-body text-[#C6F135] underline-offset-4 hover:underline'
              >
                Already use MedQuel? Sign in
              </button>
            )}
          </div>

          {premiumStatus?.isPremium && (
            <div className='f-body mx-auto mb-10 max-w-2xl space-y-4'>
              <div className='rounded-2xl border border-[#8B7FE8] bg-gradient-to-br from-[#171b3d] to-[#11152c] p-6 text-center shadow-[0_0_40px_rgba(139,127,232,0.12)]'>
                <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e7f2ff] text-[#536dff] shadow-lg'>
                  <Crown className='h-8 w-8' />
                </div>

                <h2 className='f-display mt-4 text-2xl text-white'>
                  Premium is active
                </h2>
                <p className='mt-2 text-sm text-white/60'>
                  Your premium benefits are available now.
                </p>
              </div>

              <div className='rounded-2xl border border-[#3d6aa8] bg-[#12254a]/80 p-5'>
                {[
                  ['Plan', premiumStatus.planName ?? premiumStatus.planId ?? 'Premium'],
                  ['Status', premiumStatus.state || 'Active'],
                  ['Valid until', premiumStatus.premiumExpiresAt ? formatDate(premiumStatus.premiumExpiresAt) : '—'],
                  ['Days left', premiumStatus.daysRemaining == null ? '—' : `${premiumStatus.daysRemaining} days`],
                  ['Last activated', premiumStatus.lastPurchasedAt ? formatDate(premiumStatus.lastPurchasedAt) : '—'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className='flex items-center justify-between gap-4 border-b border-white/15 py-3 last:border-b-0'
                  >
                    <span className='text-sm text-blue-100/80'>{label}</span>
                    <strong className='text-right text-sm text-white'>
                      {value}
                    </strong>
                  </div>
                ))}

                {premiumStatus.planDurationDays &&
                  premiumStatus.daysRemaining != null && (
                    <div className='mt-4 h-2 overflow-hidden rounded-full bg-white/15'>
                      <div
                        className='h-full rounded-full bg-gradient-to-r from-[#8B7FE8] to-[#C6F135]'
                        style={{ width: `${Math.min(100, Math.max(0, (premiumStatus.daysRemaining/premiumStatus.planDurationDays) * 100))}%` }}
                      />
                    </div>
                  )}
              </div>
            </div>
          )}

          {needsOnboarding && (
            <div
              role='alert'
              className='mx-auto mb-10 max-w-2xl rounded-xl border border-white/15 bg-[#111] p-6 text-center'
            >
              <Smartphone className='mx-auto mb-3 h-8 w-8 text-[#C6F135]' />
              <h2 className='f-body text-lg font-semibold'>
                Finish setting up in the app first
              </h2>
              <p className='f-body mt-2 text-sm text-white/50'>
                We couldn’t find a MedQuel profile for this account. Open the
                app, complete the quick setup, then come back here to upgrade.
              </p>

              <a
                href={env.playStoreUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='f-display mt-5 inline-block rounded-md bg-[#C6F135] px-6 py-3 text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a]'
              >
                GET THE APP
              </a>
            </div>
          )}

          {error && (
            <p
              role='alert'
              className='f-body mx-auto mb-8 max-w-2xl rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300'
            >
              {error}
            </p>
          )}

          {plansLoading || authLoading ? (
            <div className='grid gap-6 md:grid-cols-3'>
              {[0, 1, 2].map((i) => (
                <div key={i} className='h-[520px] animate-pulse rounded-xl border border-white/10 bg-[#111]' />
              ))}
            </div>
          ) : plansError ? (
            <div className='mx-auto max-w-md text-center'>
              <p className='f-body text-white/60'>
                We couldn’t load the plans right now.
              </p>
              <p className='f-body mt-1 text-xs text-white/30'>{plansError}</p>

              <button
                onClick={retry}
                className='f-body mt-4 rounded-md border border-white/20 px-6 py-2.5 text-sm font-medium transition-colors hover:border-[#C6F135]'
              >
                Try again
              </button>
            </div>
          ) : (
            <div className='grid gap-6 md:grid-cols-3'>
              {plans.map((plan) => {
                const busy = busyPlanId === plan.planId;
                const highlighted = preselected ? preselected === plan.planId : plan.badge === 'Most Popular';

                return (
                  <PlanCard
                    key={plan.planId}
                    plan={plan}
                    allPlans={plans}
                    highlighted={highlighted}
                    action={
                      <button
                        onClick={() => handleSelect(plan.planId)}
                        disabled={busyPlanId !== null || needsOnboarding}
                        className={`f-display flex w-full items-center justify-center gap-2 rounded-md py-3 text-sm tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
                          highlighted ? 'bg-[#C6F135] text-black hover:bg-[#d5fb5a]' : 'border border-white/20 text-white hover:border-[#C6F135]'
                        }`}
                      >
                        {busy && <Loader2 className='h-4 w-4 animate-spin' />}
                        {busy ? 'OPENING PAYMENT…' : `GET ${plan.name}`}
                      </button>
                    }
                  />
                );
              })}
            </div>
          )}

          <div className='f-body mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 text-center text-sm text-white/40'>
            <p className='inline-flex items-center gap-2'>
              <ShieldCheck className='h-4 w-4 text-[#C6F135]' />
              Payments are processed by Razorpay (UPI, cards, net banking, wallets). We never see or store your card details.
            </p>
            <p>
              One-time payment, no auto-renewal. By paying you agree to our{' '}
              <Link to='/terms' className='underline underline-offset-4 hover:text-[#C6F135]'>
                Terms
              </Link>
              ,{' '}
              <Link to='/privacy' className='underline underline-offset-4 hover:text-[#C6F135]'>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to='/refund-policy' className='underline underline-offset-4 hover:text-[#C6F135]'>
                Refund Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <AuthModal
        open={authOpen}
        onClose={() => {
          setAuthOpen(false);
          setPendingPlanId(null);
        }}
      />
    </PageShell>
  );
};

export default Premium;
