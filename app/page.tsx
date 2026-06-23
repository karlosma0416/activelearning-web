"use client";

import { motion } from "framer-motion";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Timetable", href: "#timetable" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const courses = [
  {
    title: "ENGG1101: Active Learning Studio",
    description:
      "A practice-based course where teams develop design briefs, rapid prototypes and reflective presentations for engineering challenges.",
    status: "Featured",
  },
  {
    title: "ENGG2202: Collaborative Systems",
    description:
      "Investigate how interdisciplinary teams use systems thinking and active pedagogy to shape real-world engineering solutions.",
    status: "Current",
  },
  {
    title: "ENGG3303: Innovation in Practice",
    description:
      "A module that blends studio work, technical experimentation and peer critique across project milestones.",
    status: "Upcoming",
  },
];

const team = [
  {
    name: "Dr. Olivia Chan",
    role: "Program Lead",
    note: "Leads the active learning curriculum and design-based teaching for engineering discovery.",
  },
  {
    name: "Prof. Marcus Lee",
    role: "Learning Architect",
    note: "Shapes studio workflows and assessment for collaborative engineering practice.",
  },
  {
    name: "Ms. Sara Wong",
    role: "Student Experience Coordinator",
    note: "Supports project teams, peer learning sessions and classroom design work.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.01, y: -2 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f7f2eb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
            HKU ENGG Active Learning
          </a>
          <nav>
            <ul className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-slate-950">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeIn}
          className="grid gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-8">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700/80">
              HKU Engineering active learning
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Design-led learning for engineering practice, studio culture and collaborative innovation.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                A single-page experience for the Faculty of Engineering that highlights real courses, flexible team rhythms and the campus learning environment.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#courses"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-24px_rgba(56,139,253,0.45)] transition hover:bg-sky-600 sm:w-auto"
              >
                Explore Courses
              </a>
              <a
                href="#timetable"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 sm:w-auto"
              >
                View Timetable
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.18)]">
            <div className="absolute inset-x-0 top-0 h-36 bg-slate-50" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="inline-flex rounded-full bg-sky-50 px-4 py-1 text-xs uppercase tracking-[0.22em] text-sky-700">
                  Visual concept
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-[#f7f4ef] p-6 shadow-sm">
                  <div className="mb-5 grid gap-4 rounded-[1.5rem] bg-white p-4 shadow-sm sm:grid-cols-[1.5fr_1fr]">
                    <div className="rounded-[1.5rem] bg-sky-50 p-4">
                      <div className="h-40 rounded-[1.25rem] bg-slate-100" />
                    </div>
                    <div className="space-y-4 rounded-[1.5rem] bg-amber-50/80 p-4">
                      <div className="h-12 rounded-[1rem] bg-white shadow-sm" />
                      <div className="h-12 rounded-[1rem] bg-white shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-2/3 rounded-full bg-slate-200" />
                    <div className="h-4 w-1/2 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>
              <div className="space-y-3 rounded-[1.75rem] bg-slate-50 p-5 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/70">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Studio preview</p>
                <p className="text-sm leading-7 text-slate-700">
                  A calm layout ready for future imagery, with subtle color accents that support the page hierarchy.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="about" className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">About</p>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Active learning in engineering is built around making, testing and reflecting together.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-700">
                This site frames HKU Engineering’s active learning initiative with a calm, focused layout that highlights course structure, team engagement and the rhythm of studio-based study.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Design-led learning",
                content: "Studio practice, rapid prototyping and curated critique are central to how students explore engineering problems.",
              },
              {
                title: "Integrated technology",
                content: "Hands-on modules combine physical systems, digital design and academic reflection for a richer classroom experience.",
              },
              {
                title: "Thoughtful structure",
                content: "Clear milestones, collaborative check-ins and focused project time help students stay confident with complex material.",
              },
            ].map((item, index) => (
              <motion.article key={item.title} whileInView="visible" initial="hidden" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.05 * index }} variants={fadeIn} className="rounded-[1.75rem] border border-slate-200/80 bg-[#f8f5f0] p-6">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.content}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="courses" className="mt-16 space-y-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">Courses</p>
            <div className="space-y-3 sm:flex sm:items-end sm:justify-between sm:gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Studio modules, course focus and cohort momentum.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-700">
                  The curriculum is presented as a set of active modules with clear status, course goals and structured time for teamwork.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 xl:grid-cols-3">
            {courses.map((course, index) => (
              <motion.article
                key={course.title}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_60px_-48px_rgba(15,23,42,0.18)] transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                      course.status === "Featured"
                        ? "text-sky-800"
                        : course.status === "Current"
                        ? "text-emerald-800"
                        : "text-amber-800"
                    }`}
                  >
                    {course.status}
                  </span>
                  <div className="h-10 w-10 rounded-2xl bg-slate-100 transition duration-300 group-hover:bg-slate-200" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-slate-950">{course.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{course.description}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <span className="rounded-full border border-slate-200 px-3 py-2">View details</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="timetable" className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn} className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">Timetable</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A clear preview of class groups, studio sessions and weekly rhythm.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Class A', 'Class B', 'Class C'].map((label, idx) => (
                <span
                  key={label}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    idx === 0
                      ? 'border-sky-200 bg-sky-50 text-sky-800'
                      : idx === 1
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border-amber-200 bg-amber-50 text-amber-800'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-px bg-slate-200 text-slate-500 text-sm font-semibold uppercase tracking-[0.16em]">
              {['Time', 'Room', 'Session', 'Instructor'].map((heading) => (
                <div key={heading} className="bg-slate-100 px-4 py-4">
                  {heading}
                </div>
              ))}
            </div>
            <div className="divide-y divide-slate-200 bg-white">
              {[
                { time: '09:00 – 11:00', room: 'Design Lab 1', session: 'Studio Review', instructor: 'Dr. Olivia Chan', tone: 'sky' },
                { time: '11:30 – 13:30', room: 'Project Space', session: 'Team Critique', instructor: 'Prof. Marcus Lee', tone: 'emerald' },
                { time: '14:00 – 16:00', room: 'Innovation Hub', session: 'Prototype Lab', instructor: 'Ms. Sara Wong', tone: 'amber' },
              ].map((item) => (
                <div key={item.time} className="grid grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-px px-4 py-5 text-sm text-slate-700 sm:px-5">
                  <div className="bg-white px-3 py-2">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                      item.tone === 'sky'
                        ? 'bg-sky-50 text-sky-700'
                        : item.tone === 'emerald'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                  <div className="bg-white px-3 py-2">{item.room}</div>
                  <div className="bg-white px-3 py-2">{item.session}</div>
                  <div className="bg-white px-3 py-2">{item.instructor}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="mt-16 space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">Team</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              The faculty and staff guiding active learning at HKU Engineering.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((person) => (
              <motion.article
                key={person.name}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 text-sm font-semibold text-slate-700">
                    {person.name.split(' ').map((part) => part[0]).join('')}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-950">{person.name}</p>
                    <p className="text-sm text-slate-600">{person.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-700">{person.note}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <footer id="contact" className="mt-20 rounded-[2rem] border border-slate-200/80 bg-slate-950 px-8 py-10 text-slate-200 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Contact</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">HKU ENGG Active Learning</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                For course details, schedule updates and team coordination, this page is the first step in presenting the active learning program in a concise, premium format.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Quick links</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>
                    <a href="#about" className="transition hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#courses" className="transition hover:text-white">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="transition hover:text-white">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Connect</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Placeholder for faculty contact details, project inquiries and course coordination information.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
