"use client";

import { useState, useEffect, useMemo } from "react";

export const useJobs = () => {
  const PAGE_SIZE = 50;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async (pageNumber = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/jobs?page=${pageNumber}&limit=${PAGE_SIZE}`,
      );

      // Check for an HTTP error status (like 401 Unauthorized)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        
        // Throw an error with specific details
        const errorMessage = errorData.error || `API Request Failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      // Backend returns: { page, limit, total, jobs: [...] }
      const newJobs = data.jobs || [];

      if (pageNumber === 1) {
        setJobs(newJobs);
      } else {
        setJobs((prev) => [...prev, ...newJobs]);
      }

      // Check if more pages exist
      if (newJobs.length < PAGE_SIZE) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

    } catch (err) {
      console.error("Error fetching jobs:", err.message);
      setError(err.message); // Set the error state
      setHasMore(false);
      
      // If page 1 load fails, clear the jobs list
      if (pageNumber === 1) {
        setJobs([]);
      }

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(1);
  }, []);

  const loadMore = () => {
    if (!hasMore || loading) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs(nextPage);
  };

  const uniqueLocations = useMemo(
    () => [...new Set(jobs.map((j) => j.location).filter(Boolean))].sort(),
    [jobs]
  );

  const uniqueBatches = useMemo(
    () => [...new Set(jobs.map((j) => j.batch).filter(Boolean))].sort(),
    [jobs]
  );

  return {
    jobs,
    loading,
    loadMore,
    hasMore,
    uniqueLocations,
    uniqueBatches,
    error,
  };
};