import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-6 pt-24">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-premium p-10 border border-gray-100">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-500">Join 5,000+ students on SkillTrix</p>
        </div>
        
        <form className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
              <input 
                type="text" 
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                placeholder="John"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
              <input 
                type="text" 
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              placeholder="Min. 8 characters"
            />
          </div>
          
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500" />
            <p className="text-sm text-gray-500 font-medium">
              I agree to the <a href="#" className="text-indigo-600 font-bold hover:text-indigo-700">Terms of Service</a> and <a href="#" className="text-indigo-600 font-bold hover:text-indigo-700">Privacy Policy</a>
            </p>
          </div>
          
          <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            Create Account
          </button>
        </form>
        
        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500">
            Already have an account? {' '}
            <Link to="/login" className="text-indigo-600 font-bold hover:text-indigo-700">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
