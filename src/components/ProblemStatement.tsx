import { motion } from 'framer-motion';
import { Frown, Clock, Users } from 'lucide-react';
import { Target, BookOpen, TrendingDown } from 'lucide-react';


const problems = [
  {
    icon: BookOpen,
    title: 'Boring Study Sessions',
    description: 'Traditional learning feels monotonous and drains motivation',
    accent: '#C6F135',
  },
  {
    icon: Frown,
    title: 'No Excitement',
    description: 'Medical concepts seem dry without engaging, interactive experiences',
    accent: '#8B7FE8',
  },
  {
    icon: Target,
    title: 'Missing the Challenge',
    description: 'No competitive element to make learning thrilling and rewarding',
    accent: '#F5E6A8',
  },
  {
    icon: Users,
    title: 'Learning Alone',
    description: 'No community to share the journey and celebrate achievements',
    accent: '#C6F135',
  },
  {
    icon: Clock,
    title: 'Short Attention Spans',
    description: 'Hard to stay focused without bite-sized, gamified content',
    accent: '#8B7FE8',
  },
  {
    icon: TrendingDown,
    title: 'Zero Motivation',
    description: 'Lack of rewards and recognition for your learning efforts',
    accent: '#F5E6A8',
  },
];


const ProblemStatement = () => {
  return (
    <section className='relative overflow-hidden bg-[#0A0A0A] py-24 text-white'>
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

      <div className='relative z-10 mx-auto max-w-6xl px-8 lg:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='f-display text-3xl leading-tight sm:text-4xl lg:text-5xl'>
            SOLVING MEDICAL QUESTIONS
            <br />
            <span className='text-[#C6F135]'>COULD BE FUN TOO</span>
          </h2>
          <p className='f-body mx-auto mt-4 max-w-2xl text-lg text-white/50'>
            Learning doesn't have to be boring - let's make it exciting.
          </p>
        </motion.div>

        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='group rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-white/25'
            >
              <div className='flex items-start gap-4'>
                <div
                  className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg'
                  style={{ background: `${problem.accent}1A` }}
                >
                  <problem.icon className='h-5 w-5' style={{ color: problem.accent }} />
                </div>

                <div>
                  <h3 className='f-body text-base font-semibold text-white'>
                    {problem.title}
                  </h3>
                  <p className='f-body mt-1.5 text-sm text-white/50'>
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
