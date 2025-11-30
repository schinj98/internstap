"use client";
import { Briefcase, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Internstap</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-gray-700 hover:text-blue-600 font-medium">Jobs</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Post a Job
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="#jobs" className="block">Jobs</a>
            <a href="#about" className="block">About</a>
            <a href="#contact" className="block">Contact</a>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Post a Job</button>
          </div>
        </div>
      )}
    </nav>
  );
}
