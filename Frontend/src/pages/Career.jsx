import React from 'react';
import { Link } from 'react-router-dom';

/* ── shared check icon ── */
const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#ede9fe" />
    <path d="M6 10.5l2.5 2.5 5-5" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── data ── */
const FEATURES = [
  {
    icon: (
      <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#ede9fe" />
        <path d="M13 17h14v10a2 2 0 01-2 2H15a2 2 0 01-2-2V17z" fill="#6366f1" opacity=".2" />
        <rect x="17" y="13" width="6" height="4" rx="1" stroke="#6366f1" strokeWidth="1.5" />
        <rect x="13" y="17" width="14" height="10" rx="2" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M17 21h6" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Internship Experience',
    points: [
      'Work on guided tasks and basic real-world projects',
      'Get practical exposure along with learning',
      'Build small projects for your portfolio',
      'Receive internship certificate after completion',
      'Opportunity for a Pre-Placement Offer (PPO) based on performance',
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#ede9fe" />
        <circle cx="20" cy="17" r="4" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M12 29c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 14l2 2" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Placement Support',
    points: [
      'Basic resume guidance',
      'Interview preparation support',
      'Guidance on applying for opportunities',
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#ede9fe" />
        <path d="M11 27l6-6 4 4 8-10" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="29" cy="15" r="2" fill="#6366f1" />
      </svg>
    ),
    title: 'Career Growth Focus',
    points: [
      'Focus on improving practical skills',
      'Build confidence through hands-on work',
      'Get direction for career growth',
    ],
  },
];

const STEPS = [
  {
    num: 1,
    title: 'Join the program',
    desc: 'Start your learning journey with Skilltrix',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
        <circle cx="18" cy="13" r="5" stroke="#6366f1" strokeWidth="1.8" />
        <path d="M8 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 10l3 2M27 10v4M29 12h-4" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: 2,
    title: 'Learn and practice',
    desc: 'Gain knowledge and improve skills',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
        <rect x="6" y="10" width="24" height="16" rx="2" stroke="#6366f1" strokeWidth="1.8" />
        <path d="M12 18h4M12 22h8" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 14l2 4-4 2 4 2" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: 3,
    title: 'Work on projects',
    desc: 'Apply your learning to real-world tasks',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
        <rect x="6" y="8" width="24" height="20" rx="2" stroke="#6366f1" strokeWidth="1.8" />
        <path d="M13 16l3 3 7-7" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12h16" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: 4,
    title: 'Get career guidance',
    desc: 'Receive support for your career growth',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
        <circle cx="14" cy="13" r="4" stroke="#6366f1" strokeWidth="1.8" />
        <path d="M6 28c0-4.418 3.582-8 8-8" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="17" r="4" stroke="#6366f1" strokeWidth="1.8" />
        <path d="M18 28c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const GAINS = [
  'Practical learning experience',
  'Basic project portfolio',
  'Better understanding of industry work',
];

/* ── page ── */
const Career = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[240px] mt-15 w-full overflow-hidden flex items-center">
        {/* Background Image (Covering entire hero) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Gemini_Generated_Image_khb1smkhb1smkhb1.png"
            alt="Career Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to ensure text readability if needed */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-[3.8rem] font-bold text-[#1a1a2e] leading-none mb-3">
              Career
            </h1>
            <p className="text-white font-bold text-[1.1rem] leading-snug font-medium">
              Learn, gain real experience, and move towards<br />
              your first job with Skilltrix
            </p>
          </div>
        </div>

        {/* Bottom edge wave divider (keeping it for a smooth transition if desired, or can be removed) */}
        <div className="absolute bottom-0 left-0 w-full h-10 z-20">
          <svg className="w-full h-full block" viewBox="0 0 1440 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 V40 H0 V20 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>




      {/* ── WHAT MAKES DIFFERENT ── */}
      <section className="pt-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl">🚀</span>
              <h2 className="text-3xl font-extrabold text-gray-900">What Makes This Program Different</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
              At Skilltrix, we focus on practical learning and gradual career growth. The program is
              designed to help students understand real work and improve their skills step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-7 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 hover:border-indigo-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  {f.icon}
                  <h3 className="text-base font-bold text-gray-900">{f.title}</h3>
                </div>
                <ul className="space-y-3">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug">
                      <CheckIcon />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-3xl">🚀</span>
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto flex-wrap">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.num}>
              <div className="bg-white border border-gray-200 rounded-2xl p-5 w-full md:w-48 min-h-[150px] flex flex-col gap-3 shrink-0 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 hover:border-indigo-200">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                <div className="flex justify-end">{step.icon}</div>
              </div>
              {i < STEPS.length - 1 && (
                <svg className="w-9 h-4 flex-shrink-0 opacity-50 hidden md:block" viewBox="0 0 36 16" fill="none">
                  <path d="M0 8h30M24 2l8 6-8 6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU WILL GAIN ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* left */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <path d="M10 4h12v10a6 6 0 01-12 0V4z" fill="#ede9fe" stroke="#6366f1" strokeWidth="1.6" />
              <path d="M10 8H6a4 4 0 004 4M22 8h4a4 4 0 01-4 4" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M16 20v4M11 28h10" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <h2 className="text-2xl font-extrabold text-gray-900">What You Will Gain</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GAINS.map((g, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-100 hover:border-indigo-200"
              >
                <CheckIcon />
                <span className="text-sm text-gray-700 font-medium leading-snug">{g}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right CTA */}
        <div className="bg-gradient-to-br from-violet-50 to-indigo-100 border border-indigo-200 rounded-2xl p-10 flex flex-col items-center gap-6 text-center">
          <p className="text-lg font-semibold text-gray-900 leading-relaxed">
            Start your journey with Skilltrix and improve<br />your skills step by step.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-300"
          >
            Apply Now &nbsp;→
          </Link>
        </div>
      </section>
    </>
  );
};

export default Career;
