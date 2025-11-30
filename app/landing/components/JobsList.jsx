"use client";

import { Briefcase, TrendingUp, MapPin, Sparkles } from "lucide-react";
import { useMemo } from "react";

// Enhanced JobCard Component
function JobCard({ job }) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          {/* Company Logo & Info */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                {job.logo_link ? (
                    <img
                    src={job.logo_link}
                    alt="Company Logo"
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                    }}
                    />
                ) : (
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {job.raw?.company_name?.charAt(0) || "C"}
                    </span>
                )}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {job.job_title || "Job Position"}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                {job.raw?.company_name || "Company Name"}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                {job.location && (
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                )}
                {job.batch && (
                  <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                    {job.batch}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Salary Badge */}
          {job.salary && (
            <div className="flex-shrink-0 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-emerald-200 self-start">
              {job.salary}
            </div>
          )}
        </div>

        {/* Qualification */}
        {job.qualification && (
          <div className="mb-4 bg-gray-50 rounded-lg p-3 sm:p-4">
            <p className="text-sm font-semibold text-gray-500 mb-1">QUALIFICATION</p>
            <p className="text-gray-800 text-sm sm:text-base">{job.qualification}</p>
          </div>
        )}

        {/* Action Button */}
        <a
        href={job.apply_link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
        >
            View Details & Apply
        </a>

      </div>
    </div>
  );
}

export default function JobsList({
  jobs,
  loading,
  searchTerm,
  locationFilter,
  batchFilter,
  salaryFilter,
  loadMore,
  hasMore,
}) {
  // FILTERS APPLY ON CURRENTLY LOADED JOBS
  const filteredJobs = useMemo(() => {
    const search = searchTerm.toLowerCase();
  
    return jobs.filter((job) => {
      const title = job.job_title?.toLowerCase() || "";
      const company = job.raw?.company_name?.toLowerCase() || "";
      const qualification = job.qualification?.toLowerCase() || "";
  
      const matchSearch =
        title.includes(search) ||
        company.includes(search) ||
        qualification.includes(search);
  
      const matchLoc = !locationFilter || job.location === locationFilter;
      const matchBatch = !batchFilter || job.batch === batchFilter;
      const matchSalary = !salaryFilter || job.salary?.includes(salaryFilter);
  
      return matchSearch && matchLoc && matchBatch && matchSalary;
    });
  }, [jobs, searchTerm, locationFilter, batchFilter, salaryFilter]);
  
  // LOADING UI - Enhanced with professional animation
  if (loading && jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 sm:py-24 px-4">
        <div className="relative">
          <div className="animate-spin h-16 w-16 sm:h-20 sm:w-20 rounded-full border-4 border-gray-200 border-t-blue-600"></div>
          <Briefcase className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 text-blue-600 animate-pulse" />
        </div>
        <p className="mt-6 text-base sm:text-lg font-semibold text-gray-700 animate-pulse">
          Loading amazing opportunities...
        </p>
      </div>
    );
  }

  // EMPTY LIST UI - Enhanced with better messaging
  if (filteredJobs.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8 sm:p-16 text-center w-full border border-gray-200">
        <div className="bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6 shadow-md">
          <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          No Matching Jobs Found
        </h3>
        <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md mx-auto">
          Try adjusting your filters or search terms to discover more opportunities
        </p>
        <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
          <Sparkles className="h-5 w-5" />
          <span>New jobs are added daily!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full">
      {/* Header Section with Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Opportunity' : 'Opportunities'}
            </h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Find your perfect career match
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 self-start">
            <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            <div>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">Active Jobs</p>
              <p className="text-xl sm:text-2xl font-bold text-white">{filteredJobs.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="space-y-4 sm:space-y-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* LOAD MORE BUTTON - Enhanced */}
      {hasMore && (
        <div className="flex justify-center mt-8 sm:mt-12">
          <button
            onClick={loadMore}
            disabled={loading}
            className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base sm:text-lg"
          >
            <span className="flex items-center gap-3">
              {loading ? (
                <>
                  <div className="animate-spin h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-white border-t-transparent"></div>
                  Loading More...
                </>
              ) : (
                <>
                  Load More Opportunities
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </div>
      )}

      {/* LOADING UI WHILE LOADING MORE - Enhanced */}
      {loading && jobs.length > 0 && !hasMore && (
        <div className="flex flex-col items-center justify-center py-8 sm:py-10">
          <div className="relative">
            <div className="animate-spin h-12 w-12 sm:h-14 sm:w-14 rounded-full border-4 border-gray-200 border-t-blue-600"></div>
            <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7 text-blue-600 animate-pulse" />
          </div>
          <p className="mt-4 text-base sm:text-lg font-semibold text-gray-700">
            Fetching more jobs...
          </p>
        </div>
      )}
    </div>
  );
}