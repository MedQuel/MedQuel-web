import { motion } from "framer-motion";
import {
  Trophy,
  MessageCircle,
  BarChart3,
  Medal,
  User,
  Bell,
  ListChecks,
  CalendarCheck,
  HelpCircle,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Gamified Contest System",
    description:
      "Multiple contest types including Mixed subjects, Subject-wise deep-dives, and Random 15-minute challenges with live tracking and attractive prize pools.",
    highlights: [
      "Multiple contest types",
      "Real-time rankings",
      "Post-contest analytics",
      "Ranking system",
    ],
    accent: "#C6F135",
  },
  {
    icon: MessageCircle,
    title: "Social Learning Network",
    description:
      "Subject-specific discussion rooms, direct messaging, study groups up to 50 members, and community Q&A with voting system.",
    highlights: [
      "Discussion rooms by subject",
      "Study group creation",
      "Share notes & diagrams",
      "Follow top performers",
    ],
    accent: "#8B7FE8",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description:
      "Detailed quiz history, score trends, subject-wise breakdown, accuracy rates, time management analysis, and personalized improvement suggestions.",
    highlights: [
      "Score trends over time",
      "Strengths & weaknesses",
      "Interactive charts",
      "Peer comparison",
    ],
    accent: "#F5E6A8",
  },
  {
    icon: Medal,
    title: "Global Leaderboard System",
    description:
      "Global and country based rankings with weekly, monthly, and all-time standings. Track your position and climb to the top!",
    highlights: [
      "Multiple ranking types",
      "Top 3 podium display",
      "Rank change indicators",
      "Profile badges for top performers",
    ],
    accent: "#C6F135",
  },
  {
    icon: User,
    title: "Rich Profile & Achievements",
    description:
      "Customizable profile with photo, 50+ unique badges to collect, milestone achievements, study statistics dashboard, and shareable achievement cards.",
    highlights: [
      "50+ unique badges",
      "Study streak tracking",
      "Achievement cards",
      "Global rank display",
    ],
    accent: "#8B7FE8",
  },
  {
    icon: Bell,
    title: "Smart Notification System",
    description:
      "Customizable daily study reminders, contest announcements, leaderboard updates, achievement alerts, and personalized study tips.",
   highlights: [
  "Daily reminders",
  "Contest alerts",
  "Achievement badges",
  "Streak warnings",
],
    accent: "#F5E6A8",
  },
  {
    icon: HelpCircle,
    title: "Quizzes Section",
    description:
      "Access a huge library of subject-wise and topic-wise quizzes designed to test your knowledge, track progress, and strengthen weak areas through consistent practice.",
    highlights: [
      "Subject-wise quiz library",
      "Instant result & explanation",
      "Bookmark tough questions",
      "Retake & track improvement",
    ],
    accent: "#C6F135",
  },
  {
    icon: CalendarCheck,
    title: "Study Plan",
    description:
      "Get a personalized, day-by-day study schedule tailored to your exam date, syllabus, and current preparation level — helping you stay consistent and cover every topic on time.",
    highlights: [
      "Personalized daily schedule",
      "Syllabus-wise coverage tracking",
      "Auto-adjusts to your pace",
      "Exam countdown reminders",
    ],
    accent: "#F5A8D8",
  },
  {
    icon: ListChecks,
    title: "Challenges Selection",
    description:
      "Choose challenges based on your preparation level and goals — from daily practice to full-length mock tests, customized options are available for every difficulty level.",
    highlights: [
      "Daily practice challenges",
      "Topic-wise custom challenges",
      "Difficulty level selection",
      "Timed mock challenges",
    ],
    accent: "#8FD4FF",
  },
];

const Features = () => {
  return (
    <section
      id="features"
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
            POWERFUL FEATURES FOR
            <br />
            <span className="text-[#C6F135]">QUIZ MASTERY</span>
          </h2>
          <p className="f-body mx-auto mt-4 max-w-2xl text-lg text-white/50">
            Everything you need to master medical concepts through gamified
            quizzes
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-white/25"
            >
              <div className="mb-4 flex items-start gap-4">
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${feature.accent}1A` }}
                >
                  <feature.icon
                    className="h-6 w-6"
                    style={{ color: feature.accent }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="f-body text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="f-body mt-2 text-sm text-white/50">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pl-[4.5rem]">
                {feature.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-center gap-2 min-w-0">
                    <div
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: feature.accent }}
                    />
                    <span className="f-body text-xs text-white/60 break-words">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
