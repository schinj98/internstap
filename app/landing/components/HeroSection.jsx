"use client";
import { Search } from "lucide-react";

export default function HeroSection({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Internship</h1>
        <p className="text-xl text-blue-100 mb-8">
          Discover opportunities from top companies across India
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-4">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by job title, company, or qualification..."
              className="w-full py-3 text-gray-900 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
            onClick={() =>
              document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
