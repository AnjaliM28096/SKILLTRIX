import React from 'react';
import { useApp } from '../context/AppContext';

const Stats = () => {
  const { STATS } = useApp();

  return (
    <section className="bg-white border-y border-gray-100 py-12">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-10">
        Our Graduates Work at Leading Companies
      </p>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold text-indigo-500 mb-1">{s.value}</div>
            <div className="text-sm text-gray-500 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
