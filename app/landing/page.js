"use client";
import { useState } from "react";
import { useJobs } from "./hooks/useJobs";

import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FiltersSidebar from "./components/FiltersSidebar";
import JobsList from "./components/JobsList";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [batchFilter, setBatchFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");

  const { jobs, loading, uniqueLocations, uniqueBatches } = useJobs();

  return (
    <div className="min-h-screen bg-gray-50">

      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <StatsSection jobs={jobs} locations={uniqueLocations} />

      <div className="max-w-7xl mx-auto py-12 flex gap-8" id="jobs">
        <FiltersSidebar
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          batchFilter={batchFilter}
          setBatchFilter={setBatchFilter}
          salaryFilter={salaryFilter}
          setSalaryFilter={setSalaryFilter}
          uniqueLocations={uniqueLocations}
          uniqueBatches={uniqueBatches}
        />

        <JobsList
          jobs={jobs}
          loading={loading}
          searchTerm={searchTerm}
          locationFilter={locationFilter}
          batchFilter={batchFilter}
          salaryFilter={salaryFilter}
        />
      </div>
    </div>
  );
}
