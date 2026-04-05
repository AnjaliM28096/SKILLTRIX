import React from 'react';
import { useApp } from '../context/AppContext';
import { CodeIcon } from './Icons';

const TechStack = () => {
  const { TECH_STACK } = useApp();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Technologies You'll Master</h2>
          <p className="text-gray-500">Learn the most in-demand technologies used by top companies in 2025</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {TECH_STACK.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center gap-3 hover:border-indigo-300 hover:shadow-sm transition-all">
              <CodeIcon />
              <div className="text-center">
                <div className="font-bold text-gray-800 text-sm">{t.name}</div>
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
