import React from 'react';
import { Rocket, PhoneCall, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-3xl mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-16 shadow-2xl relative overflow-hidden group">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl md:text-2xl text-indigo-50 mb-10 font-medium">
          Join 500+ students who are already learning and earning with SkillTrix.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer">
            <span>Get Started Free</span>
            <Rocket className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-8 py-4 bg-indigo-500/30 border border-indigo-200/50 text-white font-bold rounded-xl hover:bg-indigo-500/40 transition-all transform hover:-translate-y-1 backdrop-blur-sm cursor-pointer">
            <span>Talk to an Advisor</span>
            <PhoneCall className="w-5 h-5 opacity-80" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-indigo-100 text-sm font-medium">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          <span>No credit card required</span>
          <span className="mx-2">•</span>
          <span>Start learning in 2 minutes</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
