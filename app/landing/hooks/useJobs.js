"use client";
import { useState, useEffect, useMemo } from "react";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await fetch("https://api.internstap.in.net/jobs");
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const uniqueLocations = useMemo(
    () => [...new Set(jobs.map((j) => j.location).filter(Boolean))].sort(),
    [jobs]
  );

  const uniqueBatches = useMemo(
    () => [...new Set(jobs.map((j) => j.batch).filter(Boolean))].sort(),
    [jobs]
  );

  return { jobs, loading, uniqueLocations, uniqueBatches };
};
