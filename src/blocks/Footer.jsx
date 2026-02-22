
import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Judges', href: '#judges' },
    { name: 'FAQ', href: '#faq' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/gdg_iilm' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/gdgiilm?originalSubdomain=in' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'GitHub', icon: Github, href:'https://github.com/GDG-IILM' },
  ];

  return (
    <footer id="contact" className="bg-[#000001] text-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E10600]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E10600]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20 pt-16 lg:pt-24 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-h4 sm:text-h3 font-bold text-white mb-4">
              Hack O' Clock<span className="text-[#E10600]">.</span>
            </h2>
            <p className="text-p text-white/70 max-w-md mb-6 leading-relaxed">
              A high-impact hackathon connecting academic learning with real-world tech challenges. Build, innovate, and launch your career.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E10600] hover:border-[#E10600] transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon size={18} className="text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-h6 font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-p text-white/70 hover:text-[#E10600] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-h6 font-semibold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E10600] mt-1 flex-shrink-0" />
                <span className="text-p text-white/70">Plot No.18, IILM College Of Engineering & Technology 16, Knowledge Park II, Greater Noida, Uttar Pradesh 201306</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#E10600] flex-shrink-0" />
                <a href="mailto:hackoclock2.0@gmail.com" className="text-p text-white/70 hover:text-white transition-colors">
                  hackoclock2.0@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#E10600] flex-shrink-0" />
                <a href="tel:+918538936858" className="text-p text-white/70 hover:text-white transition-colors">
                  +91 85389 36858
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-h6 font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-xs text-white/60">Get the latest news, updates, and exclusive content.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-p text-white placeholder-white/40 focus:outline-none focus:border-[#E10600] transition-colors"
              />
              <button className="px-6 py-3 bg-[#E10600] text-white font-semibold rounded-full hover:bg-[#c10500] hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Large Brand Title */}
        <h2
          className="
            text-white/5 font-bold text-center select-none
            text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]
            leading-none tracking-tight
            mb-8
          "
        >
          HACK O' CLOCK
        </h2>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/80">
            © {currentYear} Hack O' Clock. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-white/50 hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/50 hover:text-white/80 transition-colors">Terms of Service</Link>
            <Link to="/conduct" className="text-xs text-white/50 hover:text-white/80 transition-colors">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
