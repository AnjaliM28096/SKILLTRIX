import React from 'react';
import { useApp } from '../context/AppContext';
import { TechIcon } from './TechIcons';

const TechStack = () => {
  const { TECH_STACK } = useApp();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Technologies You'll Master</h2>
          <p className="text-gray-500">Learn the most in-demand technologies used by top companies in 2026</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {TECH_STACK.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center gap-4 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-indigo-50 transition-colors">
                <TechIcon name={t.name} />
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800 text-sm group-hover:text-indigo-600 transition-colors">{t.name}</div>
                <div className="text-xs text-gray-400">{t.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
