import { motion } from 'framer-motion'
import { Brain, Heart, Dna, Bug, Pill, Microscope, Stethoscope, Building2, Baby, User } from 'lucide-react'

const accents = ['#C6F135', '#8B7FE8', '#F5E6A8']

const subjects = [
  { icon: Brain, name: 'Anatomy' },
  { icon: Heart, name: 'Physiology' },
  { icon: Dna, name: 'Biochemistry' },
  { icon: Bug, name: 'Pathology' },
  { icon: Pill, name: 'Pharmacology' },
  { icon: Microscope, name: 'Microbiology' },
  { icon: Stethoscope, name: 'Medicine' },
  { icon: Building2, name: 'Surgery' },
  { icon: Baby, name: 'Pediatrics' },
  { icon: User, name: 'Obstetrics & Gynecology' }
]

const moreSubjects = [
  'Community Medicine',
  'Forensic Medicine',
  'Radiology',
  'Ophthalmology',
  'ENT',
  'Orthopedics',
  'Dermatology',
  'Psychiatry',
  'Anesthesiology',
  'Emergency Medicine'
]

const Subjects = () => {
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
            QUIZ ACROSS
            <br />
            <span className="text-[#C6F135]">20+ MEDICAL SUBJECTS</span>
          </h2>
          <p className="f-body mx-auto mt-4 max-w-2xl text-lg text-white/50">
            Test your knowledge with engaging quizzes and contests across all major medical
            specializations
          </p>
        </motion.div>

        {/* Main Subjects Grid */}
        <div className="mb-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {subjects.map((subject, index) => {
            const accent = accents[index % accents.length]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="cursor-pointer rounded-xl border border-white/10 bg-[#111] p-5 text-center transition-colors hover:border-white/25"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ background: `${accent}1A` }}
                >
                  <subject.icon className="h-6 w-6" style={{ color: accent }} />
                </div>
                <h3 className="f-body text-sm font-semibold text-white">{subject.name}</h3>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-white/10 bg-[#111] p-6"
        >
          <h3 className="f-body mb-4 text-center text-lg font-semibold text-white">
            Plus 10+ More Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {moreSubjects.map((subject, index) => (
              <span
                key={index}
                className="f-body cursor-pointer rounded-full border border-white/10 bg-[#1a1a1a] px-4 py-2 text-sm text-white/60 transition-colors hover:border-[#C6F135]/60 hover:text-[#C6F135]"
              >
                {subject}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6F135]/30 bg-[#C6F135]/10 px-6 py-3 text-[#C6F135]">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              />
            </svg>
            <span className="f-body text-sm font-semibold">
              1000+ Quiz Questions Across All Subjects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Subjects