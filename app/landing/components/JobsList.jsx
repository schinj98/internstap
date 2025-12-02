"use client";

import { Briefcase, MapPin, Calendar, DollarSign, GraduationCap, Building2, TrendingUp, Sparkles, ExternalLink, Mail } from "lucide-react";
import { useMemo } from "react";

// Enhanced JobCard Component with all backend data
function JobCard({ job }) {
  const isEmailApply = job.apply_link?.startsWith('mailto:');
  
  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-300">
      {/* Header Section with gradient accent */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <div className="p-6 lg:p-8">
        {/* Top Row: Company Info & Posted Date */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          {/* Company Logo & Basic Info */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center border-2 border-blue-100 group-hover:border-blue-300 group-hover:scale-105 transition-all duration-300 overflow-hidden shadow-sm">
              {job.logo_link ? (
                <img
                  src={job.logo_link}
                  alt={`${job.company_name} logo`}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<span class="text-2xl font-bold text-blue-600">${job.company_name?.charAt(0) || "C"}</span>`;
                  }}
                />
              ) : (
                <span className="text-3xl font-bold text-blue-600">
                  {job.company_name?.charAt(0) || "C"}
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                {job.job_title}
              </h3>
              <div className="flex items-center gap-2 text-gray-700 mb-3">
                <Building2 className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <p className="text-base lg:text-lg font-semibold truncate">
                  {job.company_name}
                </p>
              </div>
            </div>
          </div>

          {/* Posted Date Badge */}
          {job.posted_date && (
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 self-start">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">
                {formatDate(job.posted_date)}
              </span>
            </div>
          )}
        </div>

        {/* Key Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Location */}
          {job.location && (
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <MapPin className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Location</p>
                <p className="text-sm font-semibold text-gray-900">{job.location}</p>
              </div>
            </div>
          )}

          {/* Salary */}
          {job.salary && (
            <div className="flex items-center gap-3 bg-gradient-to-br from-emerald-50 to-green-50 px-4 py-3 rounded-xl border border-emerald-200">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <DollarSign className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-emerald-600 font-medium">Salary</p>
                <p className="text-sm font-bold text-emerald-700">{job.salary}</p>
              </div>
            </div>
          )}

          {/* Qualification */}
          {job.qualification && (
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <GraduationCap className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Qualification</p>
                <p className="text-sm font-semibold text-gray-900">{job.qualification}</p>
              </div>
            </div>
          )}

          {/* Batch */}
          {job.batch && (
            <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl border border-blue-200">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Briefcase className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-blue-600 font-medium">Batch</p>
                <p className="text-sm font-bold text-blue-700 capitalize">{job.batch}</p>
              </div>
            </div>
          )}
        </div>

        {/* More Details Section */}
        {job.more_details && (
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 mb-6 border border-gray-200">
            <p className="text-sm text-gray-700 leading-relaxed">
              {job.more_details}
            </p>
          </div>
        )}

        {/* Action Button */}
        <a
          href={job.apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
        >
          <span className="text-base">{isEmailApply ? 'Apply via Email' : 'View Details & Apply'}</span>
          {isEmailApply ? (
            <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
          ) : (
            <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          )}
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
  total,
}) {
  // FILTERS APPLY ON CURRENTLY LOADED JOBS
  const filteredJobs = useMemo(() => {
    const search = searchTerm.toLowerCase();
  
    return jobs.filter((job) => {
      const title = job.job_title?.toLowerCase() || "";
      const company = job.company_name?.toLowerCase() || "";
      const qualification = job.qualification?.toLowerCase() || "";
      const details = job.more_details?.toLowerCase() || "";
  
      const matchSearch =
        title.includes(search) ||
        company.includes(search) ||
        qualification.includes(search) ||
        details.includes(search);
  
      const matchLoc = !locationFilter || job.location === locationFilter;
      const matchBatch = !batchFilter || job.batch === batchFilter;
      const matchSalary = !salaryFilter || job.salary?.includes(salaryFilter);
  
      return matchSearch && matchLoc && matchBatch && matchSalary;
    });
  }, [jobs, searchTerm, locationFilter, batchFilter, salaryFilter]);
  
  // LOADING UI - Enhanced with professional animation
  if (loading && jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 lg:py-32 px-4">
        <div className="relative">
          <div className="animate-spin h-20 w-20 lg:h-24 lg:w-24 rounded-full border-4 border-gray-200 border-t-blue-600 shadow-lg"></div>
          <Briefcase className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 lg:h-12 lg:w-12 text-blue-600 animate-pulse" />
        </div>
        <p className="mt-8 text-xl font-bold text-gray-700 animate-pulse">
          Loading Opportunities
        </p>
        <p className="mt-2 text-sm text-gray-500">Finding the perfect matches for you...</p>
      </div>
    );
  }

  // EMPTY LIST UI - Enhanced with better messaging
  if (filteredJobs.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 rounded-3xl shadow-lg p-12 lg:p-20 text-center w-full border border-gray-200">
        <div className="bg-white rounded-full w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Briefcase className="h-12 w-12 lg:h-16 lg:w-16 text-gray-300" />
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          No Matching Jobs Found
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
          We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms to discover more opportunities.
        </p>
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
          <Sparkles className="h-6 w-6 text-blue-600 animate-pulse" />
          <span className="text-blue-600 font-bold">New jobs added daily!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full space-y-6 lg:space-y-8">
      

      {/* Jobs Grid - 2 Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {hasMore && (
        <div className="flex justify-center mt-10 lg:mt-14">
          <button
            onClick={loadMore}
            disabled={loading}
            className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold px-10 lg:px-16 py-5 lg:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base lg:text-lg"
          >
            <span className="flex items-center gap-4">
              {loading ? (
                <>
                  <div className="animate-spin h-6 w-6 rounded-full border-3 border-white border-t-transparent"></div>
                  <span>Loading More Opportunities...</span>
                </>
              ) : (
                <>
                  <span>Load More Jobs</span>
                  <TrendingUp className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </>
              )}
            </span>
          </button>
        </div>
      )}

      {/* LOADING UI WHILE LOADING MORE */}
      {loading && jobs.length > 0 && !hasMore && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative">
            <div className="animate-spin h-16 w-16 rounded-full border-4 border-gray-200 border-t-blue-600 shadow-lg"></div>
            <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-blue-600 animate-pulse" />
          </div>
          <p className="mt-6 text-lg font-bold text-gray-700">
            Fetching more opportunities...
          </p>
        </div>
      )}
    </div>
  );
}