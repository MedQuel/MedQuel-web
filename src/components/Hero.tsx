import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&display=swap');
        .f-display { font-family: 'Archivo Black', sans-serif; }
        .f-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* subtle grid background, like the reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-16">
        <div className="f-display text-xl tracking-tight">
          MED<span className="text-[#C6F135]">QUEL</span>
        </div>
        {/* <a
          href="#download"
          className="f-body rounded-md border border-white/20 px-5 py-2 text-sm font-medium transition-colors hover:border-[#C6F135]/60"
        >
          Play on Desktop
        </a> */}
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-8 pb-20 pt-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-16 lg:pt-16">
        {/* Left: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-[260px] select-none"
        >
          <div className="relative rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-black p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <div className="rounded-[1.75rem] bg-[#111] p-4">
              <div className="flex items-center justify-between text-[10px] text-white/50">
                <span>4:29</span>
                <span>●●●</span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-lg bg-[#1a1a1a] p-3 text-center">
                  <div className="f-display text-lg text-[#C6F135]">10K+</div>
                  <div className="text-[9px] text-white/50">Active Users</div>
                </div>
                <div className="rounded-lg bg-[#1a1a1a] p-3 text-center">
                  <div className="f-display text-lg text-[#8B7FE8]">100K+</div>
                  <div className="text-[9px] text-white/50">
                    Questions Answered
                  </div>
                </div>
                <div className="rounded-lg bg-[#1a1a1a] p-3 text-center">
                  <div className="f-display text-lg text-[#F5E6A8]">100K+</div>
                  <div className="text-[9px] text-white/50">
                    Quizzes Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="f-display break-words text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
            MEDICAL
            <br />
            KNOWLEDGE
            <br />
            <span className="text-[#C6F135]">MEETS COMPETITION</span>
          </h1>

          <p className="f-body mt-6 max-w-md text-lg text-white/50">
            Quiz duels against real students, worldwide.
          </p>

          <a
            href="#download"
            className="f-display mt-8 inline-block rounded-md border-2 border-[#C6F135] px-10 py-4 text-sm tracking-wide text-[#C6F135] transition-colors hover:bg-[#C6F135] hover:text-black"
          >
            START QUIZZING
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
