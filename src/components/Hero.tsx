import { env } from '../config/env';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className='relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white'>
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

      <div aria-hidden className='pointer-events-none absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#C6F135]/[0.06] blur-3xl' />
      <div aria-hidden className='pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#8B7FE8]/[0.08] blur-3xl' />

      <nav className='relative z-10 flex items-center justify-between px-8 py-6 lg:px-16'>
        <div className='f-display text-xl tracking-tight'>
          MED<span className='text-[#C6F135]'>QUEL</span>
        </div>
      </nav>

      <div className='relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-8 pb-20 pt-8 lg:min-h-[calc(80vh-5rem)] lg:grid-cols-[0.85fr_1.15fr] lg:px-16 lg:py-0'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative mx-auto w-[260px] select-none'
        >
          <div className='absolute -left-28 top-8 hidden rounded-xl border border-white/10 bg-[#151515]/90 px-4 py-3 shadow-2xl backdrop-blur-md lg:block'>
            <div className='flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/50'>
              <span className='h-2 w-2 rounded-full bg-[#C6F135] shadow-[0_0_12px_#C6F135]' />
              Live battle
            </div>
            <div className='mt-1 text-sm font-semibold text-white'>Dr. Aisha vs Dr. Kabir</div>
          </div>

          <div className='absolute -right-8 -bottom-16 hidden rounded-xl border border-white/10 bg-[#151515]/90 px-4 py-3 shadow-2xl backdrop-blur-md lg:block'>
            <div className='text-[10px] font-semibold uppercase tracking-wider text-white/50'>Today's streak</div>
            <div className='mt-1 flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#F5E6A8]'>
              <span className='text-lg'>🔥</span> 12 quizzes
            </div>
          </div>

          <div className='relative rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-black p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]'>
            <div className='rounded-[1.75rem] bg-[#111] p-4'>
              <div className='flex items-center justify-between text-[10px] text-white/50'>
                <span>07:05</span>
                <span>●●●</span>
              </div>

              <div className='mt-5 space-y-3'>
                <div className='rounded-lg bg-[#1a1a1a] p-3 text-center'>
                  <div className='f-display text-lg text-[#C6F135]'>2.5K+</div>
                  <div className='text-[9px] text-white/50'>Active Users</div>
                </div>

                <div className='rounded-lg bg-[#1a1a1a] p-3 text-center'>
                  <div className='f-display text-lg text-[#8B7FE8]'>50K+</div>
                  <div className='text-[9px] text-white/50'>Questions Answered</div>
                </div>

                <div className='rounded-lg bg-[#1a1a1a] p-3 text-center'>
                  <div className='f-display text-lg text-[#F5E6A8]'>10K+</div>
                  <div className='text-[9px] text-white/50'>Quizzes Completed</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className='f-body mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#C6F135]'>
            Learn smarter. Compete harder.
          </p>

          <h1 className='f-display break-words text-4xl leading-[1.1] sm:text-6xl lg:text-7xl'>
            MEDICAL
            <br />
            KNOWLEDGE
            <br />
            <span className='text-[#C6F135]'>MEETS COMPETITION</span>
          </h1>

          <p className='f-body mt-6 max-w-md text-lg text-white/50'>
            Build confidence, sharpen recall, and prove what you know - one duel at a time.
          </p>

          <a
            href={env.playStoreUrl}
            className='f-display mt-8 inline-block rounded-md border-2 border-[#C6F135] px-10 py-4 text-sm tracking-wide text-[#C6F135] transition-colors hover:bg-[#C6F135] hover:text-black'
          >
            START QUIZZING
          </a>

          <div className='mt-8 flex items-center gap-3 text-xs text-white/40'>
            <div className='flex -space-x-2'>
              <span className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-[#8B7FE8] text-[10px] font-bold text-black'>M</span>
              <span className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-[#F5E6A8] text-[10px] font-bold text-black'>A</span>
              <span className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-[#C6F135] text-[10px] font-bold text-black'>NA</span>
            </div>
            <span>Join thousands of medical aspirants already competing</span>
          </div>
        </motion.div>
      </div>

      <div className='pointer-events-none absolute bottom-20 left-1/2 z-10 hidden w-[min(calc(100%-4rem),72rem)] -translate-x-1/2 border-y border-white/10 py-4 lg:block'>
        <div className='grid grid-cols-3 divide-x divide-white/10 text-center'>
          <div>
            <div className='f-display text-lg text-[#C6F135]'>01</div>
            <div className='mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40'>Pick a subject</div>
          </div>
          <div>
            <div className='f-display text-lg text-[#8B7FE8]'>02</div>
            <div className='mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40'>Challenge a peer</div>
          </div>
          <div>
            <div className='f-display text-lg text-[#F5E6A8]'>03</div>
            <div className='mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40'>Climb the leaderboard</div>
          </div>
        </div>
      </div>

      <a
        href='#about'
        className='absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-[#C6F135] sm:flex'
      >
        <span>Scroll to explore</span>
        <span className='h-10 w-px bg-gradient-to-b from-[#C6F135] to-transparent' />
      </a>
    </section>
  );
};

export default Hero;
