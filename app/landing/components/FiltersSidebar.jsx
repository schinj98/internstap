"use client";

import { Filter } from "lucide-react";

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
    <div className="lg:w-80 w-full">
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900 flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </h2>

          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="space-y-6">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Batch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Batch
            </label>
            <select
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Batches</option>
              {uniqueBatches.map((batch) => (
                <option key={batch} value={batch}>{batch}</option>
              ))}
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salary Type
            </label>
            <select
              value={salaryFilter}
              onChange={(e) => setSalaryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option value="LPA">Annual (LPA)</option>
              <option value="month">Monthly</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}
