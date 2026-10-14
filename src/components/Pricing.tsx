import { motion } from "framer-motion";
import { Check, Zap, Crown, Calendar } from "lucide-react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&display=swap');
        .f-display { font-family: 'Archivo Black', sans-serif; }
        .f-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="f-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            START YOUR GAMIFIED
            <br />
            <span className="text-[#C6F135]">MEDICAL QUIZ JOURNEY</span> TODAY
          </h2>
          <p className="f-body mx-auto mt-4 max-w-2xl text-lg text-white/50">
            Download for free and start competing in minutes!
          </p>
        </motion.div>

        <div className="mb-16 mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-[#111] p-6"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B7FE8]/15">
                <Zap className="h-6 w-6 text-[#8B7FE8]" />
              </div>
              <div>
                <h3 className="f-body text-xl font-semibold text-white">
                  Free Plan
                </h3>
                <p className="f-body text-sm text-white/50">
                  Get started today
                </p>
              </div>
            </div>

            <div className="mb-6">
              <span className="f-display text-3xl">$0</span>
              <span className="f-body text-sm text-white/50"> /forever</span>
            </div>

            <ul className="mb-6 space-y-3">
              {[
                "Access to basic quizzes",
                "Community chat & discussions",
                "Weekly contests",
                "Basic analytics dashboard",
                "Profile & achievements",
                "Leaderboard access",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8B7FE8]" />
                  <span className="f-body text-sm text-white/60">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="f-body block w-full rounded-md border border-white/20 py-3 text-center text-sm font-medium transition-colors hover:border-white/40"
            >
              Download Free
            </a>
          </motion.div>

          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-[#111] p-6"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4ADE80]/15">
                <Calendar className="h-6 w-6 text-[#4ADE80]" />
              </div>
              <div>
                <h3 className="f-body text-xl font-semibold text-white">
                  Monthly
                </h3>
                <p className="f-body text-sm text-white/50">
                  Flexible, cancel anytime
                </p>
              </div>
            </div>

            <div className="mb-6">
              <span className="f-display text-3xl">$4.99</span>
              <span className="f-body text-sm text-white/50"> /month</span>
            </div>

            <ul className="mb-6 space-y-3">
              {[
                "Everything in Free plan",
                "Unlimited quiz attempts",
                "Advanced performance analytics",
                "Exclusive monthly contests",
                "Ad-free experience",
                "Cancel anytime",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4ADE80]" />
                  <span className="f-body text-sm text-white/60">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="f-body block w-full rounded-md border border-white/20 py-3 text-center text-sm font-medium transition-colors hover:border-white/40"
            >
              Start Monthly Plan
            </a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border-2 border-[#C6F135] bg-[#111] p-6"
          >
            <div className="f-body absolute right-0 top-0 bg-[#C6F135] px-4 py-1 text-xs font-bold text-black">
              POPULAR
            </div>

            <div className="mb-6 mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C6F135]/15">
                <Crown className="h-6 w-6 text-[#C6F135]" />
              </div>
              <div>
                <h3 className="f-body text-xl font-semibold text-white">
                  Premium
                </h3>
                <p className="f-body text-sm text-white/50">
                  Unlock full potential
                </p>
              </div>
            </div>

            <div className="mb-6">
              <span className="f-display text-3xl">$39.99</span>
              <span className="f-body text-sm text-white/50"> /year</span>
            </div>

            <ul className="mb-6 space-y-3">
              {[
                "Everything in Free plan",
                "Unlimited quiz attempts",
                "Advanced performance analytics",
                "Exclusive premium contests",
                "Priority support",
                "Ad-free experience",
                "Early access to new quizzes",
                "Personalized challenge recommendations",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C6F135]" />
                  <span className="f-body text-sm text-white/60">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="f-display block w-full rounded-md bg-[#C6F135] py-3 text-center text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a]"
            >
              GET PREMIUM
            </a>
          </motion.div>
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-[#111] p-8">
            <h3 className="f-display text-2xl sm:text-3xl">
              READY TO CHALLENGE YOURSELF?
            </h3>
            <p className="f-body mt-4 text-white/50">
              Download Med Quel now and join 50,000+ medical quiz enthusiasts!
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-black px-8 py-4 text-white transition-colors hover:border-[#C6F135]/60"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" />
                </svg>
                <div className="text-left">
                  <div className="f-body text-xs text-white/50">GET IT ON</div>
                  <div className="f-body text-lg font-semibold">
                    Google Play
                  </div>
                </div>
              </a>

              <div className="flex flex-col items-center gap-2">
                <div className="h-32 w-32 rounded-lg bg-white p-2">
                  <div className="flex h-full w-full items-center justify-center rounded bg-gray-200 text-xs text-gray-400">
                    QR Code
                  </div>
                </div>
                <p className="f-body text-sm text-white/50">Scan to download</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#C6F135]" />
                <span className="f-body">Free to download</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#C6F135]" />
                <span className="f-body">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#C6F135]" />
                <span className="f-body">Start quizzing in 2 minutes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;