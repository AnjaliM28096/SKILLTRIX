import React from 'react';
import { useApp } from '../context/AppContext';

const Process = () => {
  const { CAREER_STEPS } = useApp();

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Career Path
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">From Learning to Earning</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Our proven 4-step process to transform you from a learner to a hired professional
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {CAREER_STEPS.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold text-xl flex items-center justify-center mb-4 shadow-md">
                {s.num}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-2xl transition-colors text-base">
            Start Your Journey Today 🎯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
