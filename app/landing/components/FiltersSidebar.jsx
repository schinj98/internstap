"use client";

import { Filter, X, MapPin, GraduationCap, DollarSign, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function FiltersSidebar({
  locationFilter,
  setLocationFilter,
  batchFilter,
  setBatchFilter,
  salaryFilter,
  setSalaryFilter,
  uniqueLocations,
  uniqueBatches,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const activeFilterCount = [
    locationFilter,
    batchFilter,
    salaryFilter
  ].filter(Boolean).length;

  const clearFilters = () => {
    setLocationFilter("");
    setBatchFilter("");
    setSalaryFilter("");
  };

  return (
    <div className="w-full mb-6 lg:mb-8">
      {/* Main Filter Bar */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Filter className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-white">
                  Filter Jobs
                </h2>
                <p className="text-xs lg:text-sm text-blue-100">
                  {activeFilterCount > 0 
                    ? `${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} active` 
                    : 'Refine your search'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span className="hidden sm:inline">Clear All</span>
                </button>
              )}
              
              {/* Mobile Toggle Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="lg:hidden bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-lg transition-all duration-300"
              >
                {isExpanded ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Filter className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Filters Content */}
        <div className={`
          lg:block
          ${isExpanded ? 'block' : 'hidden'}
          transition-all duration-300
        `}>
          <div className="p-6">
            {/* Desktop: Horizontal Layout, Mobile: Vertical Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              
              {/* Location Filter */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <div className="bg-blue-50 p-1.5 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  Location
                </label>
                <div className="relative">
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-blue-300 transition-all duration-300 appearance-none cursor-pointer font-medium text-gray-700"
                  >
                    <option value="">All Locations</option>
                    {uniqueLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  {locationFilter && (
                    <button
                      onClick={() => setLocationFilter("")}
                      className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Batch Filter */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <div className="bg-indigo-50 p-1.5 rounded-lg group-hover:bg-indigo-100 transition-colors">
                    <GraduationCap className="h-4 w-4 text-indigo-600" />
                  </div>
                  Batch Year
                </label>
                <div className="relative">
                  <select
                    value={batchFilter}
                    onChange={(e) => setBatchFilter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white hover:border-indigo-300 transition-all duration-300 appearance-none cursor-pointer font-medium text-gray-700"
                  >
                    <option value="">All Batches</option>
                    {uniqueBatches.map((batch) => (
                      <option key={batch} value={batch}>{batch}</option>
                    ))}
                  </select>
                  {batchFilter && (
                    <button
                      onClick={() => setBatchFilter("")}
                      className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Salary Filter */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <div className="bg-emerald-50 p-1.5 rounded-lg group-hover:bg-emerald-100 transition-colors">
                    <DollarSign className="h-4 w-4 text-emerald-600" />
                  </div>
                  Salary Type
                </label>
                <div className="relative">
                  <select
                    value={salaryFilter}
                    onChange={(e) => setSalaryFilter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white hover:border-emerald-300 transition-all duration-300 appearance-none cursor-pointer font-medium text-gray-700"
                  >
                    <option value="">All Types</option>
                    <option value="LPA">Annual (LPA)</option>
                    <option value="month">Monthly</option>
                  </select>
                  {salaryFilter && (
                    <button
                      onClick={() => setSalaryFilter("")}
                      className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters Summary */}
            {activeFilterCount > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-gray-600">Active Filters:</span>
                  
                  {locationFilter && (
                    <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200">
                      <MapPin className="h-3.5 w-3.5" />
                      {locationFilter}
                      <button
                        onClick={() => setLocationFilter("")}
                        className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  )}
                  
                  {batchFilter && (
                    <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-indigo-200">
                      <GraduationCap className="h-3.5 w-3.5" />
                      {batchFilter}
                      <button
                        onClick={() => setBatchFilter("")}
                        className="hover:bg-indigo-200 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  )}
                  
                  {salaryFilter && (
                    <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-200">
                      <DollarSign className="h-3.5 w-3.5" />
                      {salaryFilter === "LPA" ? "Annual" : "Monthly"}
                      <button
                        onClick={() => setSalaryFilter("")}
                        className="hover:bg-emerald-200 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}