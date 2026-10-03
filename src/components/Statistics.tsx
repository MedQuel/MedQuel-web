import { motion } from 'framer-motion'
import { Users, BookCheck, Trophy, Star, BookOpen, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  { icon: Users, value: 100, suffix: '+', label: 'Active Users', accent: '#C6F135' },
  { icon: BookCheck, value: 500000, suffix: '+', label: 'Quiz Attempts Monthly', accent: '#8B7FE8' },
  { icon: Trophy, value: 50, suffix: '+', label: 'Daily Contests', accent: '#F5E6A8' },
  { icon: Star, value: 95, suffix: '%', label: 'User Satisfaction', accent: '#C6F135' },
  { icon: BookOpen, value: 20, suffix: '+', label: 'Subjects Covered', accent: '#8B7FE8' },
  { icon: MessageCircle, value: 10000, suffix: '+', label: 'Questions Bank', accent: '#F5E6A8' }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    exam: 'Medical Student',
    rating: 5,
    image: '👩‍⚕️',
    quote: 'Med Quel made learning so much fun! The quiz battles with friends turned boring study time into exciting gaming sessions. Absolutely loving it!'
  },
  {
    name: 'Rahul Verma',
    location: 'Mumbai',
    exam: 'MBBS Student',
    rating: 5,
    image: '👨‍⚕️',
    quote: 'Who knew medical quizzes could be this addictive? The leaderboards and daily challenges keep me hooked. Learning has never been this entertaining!'
  },
  {
    name: 'Ananya Patel',
    location: 'Bangalore',
    exam: 'Medical Aspirant',
    rating: 5,
    image: '👩‍🎓',
    quote: 'This app turned my study routine into a fun game! Competing with friends globally and earning badges makes every quiz session exciting. Highly recommend!'
  }
]

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end, hasStarted])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  )
}

const Statistics = () => {
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
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="f-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            LOVED BY <span className="text-[#C6F135]">THOUSANDS</span>
          </h2>
          <p className="f-body mt-4 text-lg text-white/50">
            Join the fastest-growing medical quiz community
          </p>
        </motion.div>

        <div className="mb-20 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
         {stats.map((stat, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="min-w-0 rounded-xl border border-white/10 bg-[#111] p-5 text-center transition-colors hover:border-white/25"
  >
    <stat.icon className="mx-auto mb-3 h-8 w-8 shrink-0" style={{ color: stat.accent }} />
    <div className="f-display text-xl sm:text-2xl break-words">
      <Counter end={stat.value} suffix={stat.suffix} />
    </div>
    <p className="f-body mt-1 text-xs text-white/50">{stat.label}</p>
  </motion.div>
))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="f-display text-2xl leading-tight sm:text-3xl lg:text-4xl">
            WHAT OUR <span className="text-[#C6F135]">PLAYERS SAY</span>
          </h2>
          <p className="f-body mt-4 text-base text-white/50">Real stories from quiz enthusiasts</p>
        </motion.div>

       <div className="relative overflow-hidden py-6">
  {/* Optional fade edges */}
  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

  <motion.div
    className="flex gap-6"
    animate={{ x: ["-50%", "0%"] }}
    transition={{
      duration: 20, // speed control - jitna zyada, utna slow
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {[...testimonials, ...testimonials].map((testimonial, index) => (
      <div
        key={index}
        className="w-[320px] flex-shrink-0 rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-white/25"
      >
        <div className="mb-4 flex items-center gap-4">
          <div className="text-5xl">{testimonial.image}</div>
          <div className="flex-1">
            <h4 className="f-body text-base font-semibold text-white">{testimonial.name}</h4>
            <p className="f-body text-xs text-white/50">{testimonial.location}</p>
            <p className="f-body text-xs font-medium text-[#C6F135]">{testimonial.exam}</p>
          </div>
        </div>

        <div className="mb-3 flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#F5E6A8] text-[#F5E6A8]" />
          ))}
        </div>

        <p className="f-body text-sm italic text-white/60">"{testimonial.quote}"</p>
      </div>
    ))}
  </motion.div>
</div>
      </div>
    </section>
  )
}

export default Statistics