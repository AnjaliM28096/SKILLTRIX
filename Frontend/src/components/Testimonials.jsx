import React from 'react';
import { useApp } from '../context/AppContext';
import { StarIcon } from './Icons';

const Testimonials = () => {
  const { TESTIMONIALS } = useApp();

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">What Our Students Say</h2>
          <p className="text-gray-500">Real stories from real students who transformed their careers with SkillTrix</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < t.stars} />)}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
