import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-6 pt-24">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-premium p-10 border border-gray-100">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500">Sign in to continue your learning journey</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Forgot?</a>
            </div>
            <input 
              type="password" 
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            Sign In
          </button>
        </form>
        
        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500">
            Don't have an account? {' '}
            <Link to="/signup" className="text-indigo-600 font-bold hover:text-indigo-700">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
