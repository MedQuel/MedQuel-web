import { motion } from 'framer-motion'
import { Sparkles, Brain, Users, BarChart, Trophy } from 'lucide-react'

const differentiators = [
  {
    icon: Sparkles,
    title: 'Addictively Fun Quizzes',
    description: 'Bite-sized quiz challenges that keep you coming back for more',
    accent: '#C6F135'
  },
  {
    icon: Trophy,
    title: 'Compete & Win Rewards',
    description: 'Battle friends globally, climb leaderboards, and earn exciting prizes',
    accent: '#8B7FE8'
  },
  {
    icon: Users,
    title: 'Vibrant Quiz Community',
    description: 'Join thousands playing, learning, and celebrating together',
    accent: '#F5E6A8'
  },
  {
    icon: BarChart,
    title: 'Track Your Streak',
    description: 'Watch your progress grow with daily streaks and achievement badges',
    accent: '#C6F135'
  },
  {
    icon: Brain,
    title: 'Learn Through Play',
    description: 'Master medical concepts naturally while having a blast',
    accent: '#8B7FE8'
  }
]

const Solution = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white">
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
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
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
            MEET <span className="text-[#C6F135]">MED QUEL</span>
          </h2>
          <p className="f-body mt-4 text-lg text-white/70">
            The ultimate quizzing experience in medical science
          </p>
          <p className="f-body mx-auto mt-3 max-w-2xl text-sm text-white/45">
            We've transformed medical learning into an exciting quiz game. Med Quel combines
            gamification, competition, and social features to make learning medical concepts
            addictively fun and surprisingly effective.
          </p>
        </motion.div>

        <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-white/10 bg-[#111] p-6 text-center transition-colors hover:border-white/25"
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ background: `${item.accent}1A` }}
              >
                <item.icon className="h-6 w-6" style={{ color: item.accent }} />
              </div>
              <h3 className="f-body text-base font-semibold text-white">{item.title}</h3>
              <p className="f-body mt-1.5 text-sm text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#features"
            className="f-display inline-flex items-center gap-2 rounded-md border-2 border-[#C6F135] px-10 py-4 text-sm tracking-wide text-[#C6F135] transition-colors hover:bg-[#C6F135] hover:text-black"
          >
            EXPLORE FEATURES
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution