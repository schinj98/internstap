"use client";

import JobCard from "./JobCard";
import { Briefcase } from "lucide-react";
import { useMemo } from "react";

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
  
  // LOADING UI
  if (loading && jobs.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // EMPTY LIST UI
  if (filteredJobs.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center w-full">
        <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No jobs found
        </h3>
        <p className="text-gray-600">Try adjusting your filters or search text.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {filteredJobs.length} Jobs Found
      </h2>

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      {/* LOAD MORE BUTTON */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Load More Jobs
          </button>
        </div>
      )}

      {/* LOADING UI WHILE LOADING MORE */}
      {loading && jobs.length > 0 && (
        <div className="flex justify-center py-6">
          <div className="animate-spin h-8 w-8 rounded-full border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
}
