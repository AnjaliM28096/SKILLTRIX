import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-indigo-600 text-sm">⭐ Trusted by 500+ Students</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Learn Skills That Get<br />You Hired 🚀
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-md">
            Free training + real-world projects + career guidance to launch your dream career
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
              Start Learning Free →
            </button>
            <button className="px-6 py-3 border border-gray-300 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Explore Courses
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 h-72 md:h-80 flex items-center justify-center">
            <div className="text-center opacity-90">
              <div className="text-6xl mb-2">
                <img src="/public/images/data-science.png" alt="" />
              </div>
              
            </div>
          </div>
          {/* Floating stats */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <span className="text-indigo-500 text-xl">👥</span>
            <div>
              <div className="text-lg font-bold text-gray-800">500+</div>
              <div className="text-xs text-gray-500">Active Learners</div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <span className="text-indigo-500 text-xl">🏆</span>
            <div>
              <div className="text-lg font-bold text-gray-800">97%</div>
              <div className="text-xs text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
