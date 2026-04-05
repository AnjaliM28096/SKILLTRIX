import React from 'react';
import { useApp } from '../context/AppContext';

const Programs = () => {
  const { COURSES } = useApp();

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Popular Courses
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Explore Our Programs</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Choose from industry-leading courses designed by experts and loved by thousands of students
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`relative h-44 bg-gradient-to-br ${c.bg} flex items-center justify-center`}>
                <span className="text-white text-5xl opacity-30">💻</span>
                <span className={`absolute top-3 right-3 ${c.levelColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {c.level}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span>🕐 {c.weeks}</span>
                  <span>👥 {c.enrolled}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.tags.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
                  Enroll Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
