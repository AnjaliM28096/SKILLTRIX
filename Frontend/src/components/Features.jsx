import React from 'react';
import { useApp } from '../context/AppContext';
import { CodeIcon } from './Icons';

const Features = () => {
  const { FEATURES } = useApp();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Everything You Need to Succeed</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            We provide comprehensive support to ensure your learning journey leads to career success
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-lg mb-4">
                {f.icon === "📈" ? "📈" : f.icon === "💼" ? "💼" : f.icon === "🕐" ? "🕐" : f.icon === "💬" ? "💬" : f.icon === "👥" ? "👥" : <CodeIcon />}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
