import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Rocket } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Illustration (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-xl text-center relative z-10">
          <img 
            src="/auth-illustration.png" 
            alt="Start Learning" 
            className="w-full h-auto mb-0  transform hover:scale-[1.02] transition-transform duration-700"
          />
          <h1 className="text-4xl font-extrabold text-[#0f172a] mb-4 tracking-tight">
            Start Your Learning Journey<br />with SkillTrix <span className="inline-block animate-bounce">🚀</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium">Join 5,000+ students on the most practical learning platform.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-[#0f172a] mb-2 tracking-tight">Create Your Account</h2>
            <p className="text-gray-500 font-medium text-sm">Join SkillTrix today and start mastering new skills.</p>
          </div>

          <form className="space-y-6">
            {/* Username Field */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-bold text-gray-500 group-focus-within:text-indigo-600 transition-colors z-10">
                Username
              </label>
              <div className="flex items-center border-2 border-gray-100 group-focus-within:border-indigo-600 rounded-2xl px-4 py-4 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md">
                <User className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors mr-3" />
                <input 
                  type="text" 
                  placeholder="johndoe"
                  className="w-full focus:outline-none text-gray-700 font-medium placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-bold text-gray-500 group-focus-within:text-indigo-600 transition-colors z-10">
                Email Address
              </label>
              <div className="flex items-center border-2 border-gray-100 group-focus-within:border-indigo-600 rounded-2xl px-4 py-4 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md">
                <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors mr-3" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full focus:outline-none text-gray-700 font-medium placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-bold text-gray-500 group-focus-within:text-indigo-600 transition-colors z-10">
                Password
              </label>
              <div className="flex items-center border-2 border-gray-100 group-focus-within:border-indigo-600 rounded-2xl px-4 py-4 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md">
                <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors mr-3" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full focus:outline-none text-gray-700 font-medium placeholder:text-gray-300"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-indigo-600 transition-colors font-bold text-xs uppercase cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : "Show"}
                </button>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer">
              Sign Up
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500 font-medium text-sm">
              Already have an account? {' '}
              <Link to="/login" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
