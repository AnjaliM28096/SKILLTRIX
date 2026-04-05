import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, Send } from 'lucide-react';

const FooterCol = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-white font-bold text-lg">{title}</h3>
    <ul className="flex flex-col gap-2">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f172a] pt-20 pb-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-600 rounded-lg shrink-0">
                <Send className="w-6 h-6 text-white rotate-45" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">SkillTrix</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              Empowering students with skills that matter. Learn, build, and launch your dream career with industry experts.
            </p>
            <div className="flex flex-wrap gap-2">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-gray-700/50 shrink-0">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="sm:col-span-1 lg:col-span-2">
            <FooterCol 
              title="Courses" 
              links={["Web Development", "AI & Machine Learning", "Data Science", "Cloud Computing", "Mobile Development"]} 
            />
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <FooterCol 
              title="Company" 
              links={["About Us", "Careers", "Blog", "Press Kit", "Partners"]} 
            />
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <FooterCol 
              title="Support" 
              links={["FAQ", "Help Center", "Contact Us", "Terms of Service", "Privacy Policy"]} 
            />
          </div>

          {/* Get in Touch & Newsletter Column */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Get in Touch</h3>
              <div className="space-y-3">
                <a href="mailto:hello@skilltrix.com" className="flex items-center gap-3 text-sm hover:text-indigo-400 transition-colors">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>hello@skilltrix.com</span>
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm hover:text-indigo-400 transition-colors">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>+91 98765 43210</span>
                </a>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Newsletter</h3>
              <p className="text-xs text-gray-400 mb-1">Stay updated with our latest courses.</p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-indigo-500/20 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
          <p>© 2026 SkillTrix. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
