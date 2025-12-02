"use client";
import { Briefcase, Menu, X, Sparkles, Users, Mail, Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#jobs", label: "Browse Jobs", icon: Briefcase },
    { href: "#about", label: "About Us", icon: Users },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-100/50' 
          : 'bg-white/95 backdrop-blur-lg shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section with Glossy Effect */}
          <a 
            href="/" 
            className="flex items-center gap-3 group cursor-pointer relative"
          >
            {/* Glossy background effect */}
            {/* <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div> */}
            
            {/* Logo container with glass effect */}
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-200 group-hover:shadow-xl group-hover:shadow-blue-300 transition-all duration-300 group-hover:scale-110">
              <Briefcase className="h-7 w-7 text-white" />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Brand text with gradient */}
            <div className="relative">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-purple-700 transition-all duration-300">
                Internstap
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 rounded-full"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group px-5 py-2.5 rounded-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300"
              >
                {/* Glossy hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </span>
                
                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 rounded-full"></div>
              </a>
            ))}

            {/* CTA Button with Glossy Effect */}
            <button className="relative ml-4 group overflow-hidden">
              {/* Glossy gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl"></div>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Button content */}
              <div className="relative px-6 py-3 flex items-center gap-2 text-white font-bold">
                <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Post a Job</span>
              </div>
              
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 -z-10"></div>
            </button>
          </div>

          {/* Mobile Menu Button with Glossy Effect */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative group p-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation and Glass Effect */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group block relative overflow-hidden rounded-xl"
                style={{
                  animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {/* Glossy background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-3 px-4 py-3.5 text-gray-700 group-hover:text-blue-600 font-semibold transition-colors duration-300">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <span>{link.label}</span>
                  <Sparkles className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Left border animation */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full"></div>
              </a>
            ))}

            {/* Mobile CTA Button */}
            <button 
              className="w-full relative group overflow-hidden rounded-xl mt-4"
              style={{
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out 0.3s both` : 'none'
              }}
            >
              {/* Glossy gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
              
              {/* Animated shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Button content */}
              <div className="relative px-6 py-4 flex items-center justify-center gap-2 text-white font-bold">
                <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Post a Job</span>
              </div>
              
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 -z-10 rounded-xl"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}